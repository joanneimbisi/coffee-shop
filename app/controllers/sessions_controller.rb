class SessionsController < ApplicationController 
    skip_before_action :authorized, only: :create
    
    # this helps if the user is logging in for the first time 
    def create
        user = User.find_by(username: params[:username])
        # searches by username param from frontend
        if user&.authenticate(params[:password])
            # if user & user.authenticate (hash this password with the salt save  to make sure that this password matches the one stored in database exists
            session[:user_id] = user.id 
            # saves our user to our session
            render json: user, status: :ok
        else
            render json: { error: { login: "Invalid username or password" } }, status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id)
        #logging our user out by removing the id from our session
        render json: {}
    end  
end