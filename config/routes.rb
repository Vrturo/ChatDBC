Rails.application.routes.draw do
  get '/sessions/new' => 'sessions#new'

  post '/sessions' => 'sessions#create'

  get '/sessions' => 'sessions#destroy', as: 'logout'

  get '/users/index' => 'users#index'

  get '/users/new' => 'users#new'

  post '/users' => 'users#create'

  get '/users/:id' => 'users#show'

  get '/users/:id' => 'users#edit'

  put '/users/:id' => 'users#update'

  delete '/users/:id' => 'users#destroy'

  root 'users#index'

end
