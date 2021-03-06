class UsersController < ApplicationController
	before_action :all_users

	def index
		@users = User.all
	end

  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)

  	if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, :notice => "Welcome, #{ @user.username } "
  	else
  		render "new"
  	end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    if @user.save
      redirect_to user_path(@user)
    else
      render "new"
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_path
  end

  def show
    @user = User.find(params[:id])
  end

  private 

  def user_params
  	params.require(:user).permit(:email, :username, :password, :password_confirmation)
  end 

  def all_users
  	@users = User.all
  end
end
