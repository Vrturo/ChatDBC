class UsersController < ApplicationController
  def index
    @user = User.new
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
      if @user.save
        login_as(@user)
        redirect_to root_path
      else
        @user = User.new(user_params)
        @login_failed = true
        render :new
      end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
  end

  def update
  end


  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :phase, :display_name)
  end
end
