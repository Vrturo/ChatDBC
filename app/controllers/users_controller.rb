class UsersController < ApplicationController
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
        redirect_to root_path
      else
        render 'sign_up'
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
