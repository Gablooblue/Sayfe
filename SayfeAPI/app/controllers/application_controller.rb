class ApplicationController < ActionController::API


  include DeviseTokenAuth::Concerns::SetUserByToken

  def user_params
    params.permit(:first_name, :last_name);
  end
end
