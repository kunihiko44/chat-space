Rails.application.routes.draw do
  devise_for :users
  get 'groups' => 'groups#index'
  root 'groups#index'
  resource :user, only: [:edit, :update, :index]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end