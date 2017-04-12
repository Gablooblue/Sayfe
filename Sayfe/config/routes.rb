Rails.application.routes.draw do
  resources :friendships
  devise_for :users
  resources :posts
  resources :disasters
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'splash#index'
end
