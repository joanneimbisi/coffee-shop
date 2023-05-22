class UsersController < ApplicationController
    #  before_action :create
    # skip_before_action :authorized, only: :show
    skip_before_action :authorized, only: [:index, :show, :create, :review_length]

    def index
        render json: User.all
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    
    def show  
        render json: current_user, status: :ok
    end

    def review_length
        n = params[:n]
        results = User.all.select{ |u| u.reviews.length >= n.to_i }
        render json: results
    end
    
   
    private
    
    def user_params
        params.permit(:username, :password)  
    end
end


