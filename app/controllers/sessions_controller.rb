class SessionsController < ApplicationController 
    skip_before_action :authorized, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :ok
        else
            render json: { errors:  "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id)
        render json: {message: "You are now logged out"}, status: :ok
    end  
end
