Rails.application.routes.draw do

    resources :group_checks, only: [:create, :update, :destroy]
    resources :safety_checks, only: [:create, :update, :destroy]

    resources :group_invites
    resources :announcements
    resources :friendships, only: [:index, :show, :create, :update, :destroy] do
	delete :unfriend
    end


    devise_for :users, controllers:{
	registrations: 'users/registrations',
	sessions: 'users/sessions'
    }
    resources :posts
    resources :disasters
    resources :groups do
	resources :announcements
	post :add_member
	collection do
	    get :check_group
	end
	resources :members, only: [:index, :show]
    end

    resources :account, only: :show

    with_options only: :index do |list_only|
	list_only.resources :notifications
	list_only.resources :friend_requests
	list_only.resources :results
	list_only.resources :home
    end

    resources :users, only: [:index, :show] do
	get 'groups'
    end

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root 'splash#index'
end
