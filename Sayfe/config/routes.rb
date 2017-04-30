Rails.application.routes.draw do
  resources :friend_requests
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

  resources :home, :only => :index

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'splash#index'
end
