Rails.application.routes.draw do
  resources :group_invites
  resources :announcements
  resources :friendships
  devise_for :users, controllers:{
      registrations: 'users/registrations',
      sessions: 'users/sessions'
  }
  resources :posts
  resources :disasters
  resources :groups do
      resources :announcements
  end

  resources :notifications, only: :index

  resources :friend_requests, only: :index


  resources :results, only: :index
  resources :home, only: :index

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'splash#index'
end
