Rails.application.routes.draw do
  devise_for :users
  get 'groups' => 'groups#index'
  get 'messages' => 'messages#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
