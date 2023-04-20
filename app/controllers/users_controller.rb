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
        # user = User.find_by(:user_id)
        # user = User.find_by(id: params[:id])
        render json: current_user, status: :ok
    end

    private
    
    def user_params
        params.permit(:username, :password)  
    end
end

