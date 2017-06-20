class MembersController < ApplicationController
    before_action :set_group, only: [:show, :index]

    def index
	@members = User.in_group(set_group)
    end

    def show
	@member = User.find(params[:id])
    end

    private
    
    def set_group
	@group = Group.find(params[:group_id])
    end
end
