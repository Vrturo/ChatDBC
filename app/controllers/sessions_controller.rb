class SessionsController < ApplicationController
  def new

  end

  def create
     @user = User.new(user_params)
      if @user.save
        redirect_to root_path
      else
        render "login"
      end
  end

  def destroy
    session.destroy
    redirect_to root_path
  end
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :phase, :display_name)
  end
end
