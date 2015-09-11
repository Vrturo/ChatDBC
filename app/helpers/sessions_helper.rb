module SessionsHelper
  def session?
    !session[:user_id].nil?
  end
end
