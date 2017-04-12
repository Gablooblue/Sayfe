class GroupsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_group, only: [:show, :edit, :update, :destroy]

    def index
	@groups = Group.with_member(current_user)
    end

    def show
    end

    def create
	@group = Group.new(group_params)
	@group.add current_user

	respond_to do |format|
	    if @group.save
		format.html { redirect_to @group, ntoice: 'Group created' }
		format.json { render :show, status: :created, location: @group }
	    else
		format.html {render :new}
		format.json { render json: @group.errors, status: :unprocessable_entity }
	    end
	end
    end

    def group_params
	params.require(:group).permit(:name, :desc)
    end
    
end
