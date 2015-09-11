class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def login
    user_params = params.require(:user).permit(:email, :password)
    @user = User.find_by(email: user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      login_as(@user)
      redirect_to root_path
    else
      @user = User.new(user_params)
      @login_failed = true
      render :new
    end
  end

  def logout
    logout!
    redirect_to root_path
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :confirmation_password)
  end

  def set_session(user)
    session[:user_id] = user.id
  end
end
