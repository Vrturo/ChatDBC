class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email]) || nil
    if user && user.authenticate(params[:password])
      set_session(user)
      redirect_to root_path
    else
      render 'login'
    end
  end

  def destroy
    session.destroy
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
