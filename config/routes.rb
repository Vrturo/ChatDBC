Rails.application.routes.draw do
  get 'sessions/new' => 'sessions#new'

  post 'sessions/create' => 'sessions#create'

  delete 'sessions/destroy' => 'sessions#destroy'

  get 'users/index' => 'users#index'

  get 'users/new' => 'users#new'

  post 'users/create' => 'users#create'

  get 'users/show' => 'users#show'

  get 'users/:id/edit' => 'users#edit'

  put 'users/:id/edit' => 'users#update'

  delete 'users/:id' => 'users#destroy'

  root 'users#index'

end
