class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  # This is a good place for the cookies extension so that it applies to all routes 

  before_action :authorized 

  def authorized  
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end 

  def current_user
    User.find_by(id: session[:user_id])
  end
end
