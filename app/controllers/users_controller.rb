class UsersController < ApplicationController
    skip_before_action :authorized, only: :show

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id # remembering our user only within the same domain (shared cookies won't work outside of the domain)
            render json: user, status: :created
        else
            render json: { errors: user.error.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
    end

    private
    
    def user_params
        params.permit(:username, :password)  
    end
end

