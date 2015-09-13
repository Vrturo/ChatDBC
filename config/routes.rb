Rails.application.routes.draw do
  # get  '/login'  => 'sessions#new',     as: 'login'
  # post '/login'  => 'sessions#login'
  # get  '/logout' => 'sessions#logout', as: 'logout'

  # resources :users
  get '/index' => 'client_app#index'

  get '*path' => 'client_app#show'
  root to: 'client_app#show'

end
