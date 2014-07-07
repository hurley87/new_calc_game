class SessionsController < ApplicationController
  def new
  end

  def create
  	user = User.find_by_email(params[:email])

  	if user && user.authenticate(params[:password])
  		session[:user_id] = user.id
  		redirect_to root_path, :notice => "Login Successfull"
  	else
      flash.now[:alert] = "Invalid email or password"
  		render "new", :notice => "Login Unsuccessfull"
  	end
  end

  def destroy
  	session[:user_id] = nil
  	redirect_to root_path, :notice => "Logout Successfull"
  end
end
