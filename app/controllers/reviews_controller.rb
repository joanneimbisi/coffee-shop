class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
skip_before_action :authorized, only: [:index, :show, :destroy]


    def index
        if params[:coffee_id]
            reviews = Review.where(coffee_id: params[:coffee_id]).order(created_at: :desc)
        else
            reviews = Review.all
        end
        render json: reviews.to_json(include: [:user])
    end

    def show
        review = Review.find(params[:id])
        render json: review, include: :coffee
    end

    def create
        review = Review.create!(review_params.merge(user_id: current_user.id))  
        render json: review, status: :created
    end

        
    def update 
        review = Review.find_by(id: params[:id])
            if review.user_id == session[:user_id] 
            review.update(review_params)
            render json: review, status: :accepted
        else
            render json: {error: "review not found"}, status: :not_found
        end
    end


    def destroy
        review = Review.find_by(id:params[:id])
        if review
            review.destroy
            head :no_content
        else 
            render json: {error: "review not found"}, status: :not_found
        end 
    end


    private

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def review_params
        params.require(:review).permit(:title, :description, :coffee_id)
    end
end

