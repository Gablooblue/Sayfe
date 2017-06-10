Rails.application.routes.draw do

    resources :group_checks, only: [:create, :update, :destroy]
    resources :safety_checks, only: [:create, :update, :destroy]

    resources :group_invites
    resources :announcements
    resources :friendships, only: [:index, :create, :update, :destroy]
    devise_for :users, controllers:{
	registrations: 'users/registrations',
	sessions: 'users/sessions'
    }
    resources :posts
    resources :disasters
    resources :groups do
	resources :announcements
	collection do
	    get :check_group
	end
    end

    resources :account, only: :show

    with_options only: :index do |list_only|
	list_only.resources :notifications
	list_only.resources :friend_requests
	list_only.resources :results
	list_only.resources :home
    end

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root 'splash#index'
end
