Rails.application.routes.draw do
  get  '/login'  => 'sessions#new',     as: 'login'
  post '/login'  => 'sessions#login'
  get  '/logout' => 'sessions#logout', as: 'logout'

  resources :users

  root to: 'users#index'
end
