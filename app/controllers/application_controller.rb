class ApplicationController < ActionController::API
  include ActionController::Cookies
   
  before_action :authorized 

  def current_user
  User.find_by(id: session[:user_id]) 
  end

  def authorized  
    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_user
  end 

end


