class UsersController < ApplicationController
    before_action :set_user, only: [:show]
    
    def index
	@users = User.all
    end

    def show 
    end

    def groups
	@user = User.find(params[:user_id])
	@groups = @user.groups
    end

    private 

    def set_user
	@user = User.find(params[:id])
    end
end
