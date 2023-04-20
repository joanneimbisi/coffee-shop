class CoffeesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized, only: [:index, :show]
    
    def index
        coffees = Coffee.all
        render json: coffees
    end

    def show
        coffee = Coffee.find(params[:id])
        render json: coffee
    end

    private

    def render_not_found_response
        render json: { error: "Coffee not found" }, status: :not_found
    end
    
end