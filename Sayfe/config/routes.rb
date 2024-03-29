Rails.application.routes.draw do
 
    resources :group_checks, only: [:create, :update, :destroy] 
    resources :safety_checks, only: [:create, :update, :destroy] 
 
    resources :group_invites 
    resources :announcements do
	get :target
    end
    resources :friendships, only: [:index, :show, :create, :update, :destroy] do 
	delete :unfriend 
    end 
 
 
    devise_for :users, controllers:{ 
	registrations: 'users/registrations', 
	sessions: 'users/sessions' 
    } 

    namespace :api do
	scope :v1 do
	    mount_devise_token_auth_for 'User', at: 'auth' 
	end
    end
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
 
    with_options only: :index do |only| 
	only.resources :notifications 
	only.resources :friend_requests 
	only.resources :results 
	only.resources :map
	only.resources :splash
	only.resources :dashboard
	only.resources :search
    end 
 
    resources :users, only: [:index, :show] do 
	get 'groups'
    end
 
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 
    root 'splash#index' 
end 
