class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new

  end

  def create
       @user = User.new(user_params)
      if @user.save
        redirect_to root_path
      else
        "no"
      end
  end

  def show
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
