class GroupsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_group, only: [:show, :edit, :update, :destroy, :check_group]

    def index
	@groups = Group.with_member(current_user)
    end

    def show
	@members = User.in_group(set_group)
	@results = GroupCheck.result(@group).order('updated_at DESC')
	@announcements = @group.announcements.order('created_at DESC').limit(5)
    end

    def new
	@group = Group.new
    end

    def create
	@group = Group.new(group_params)
	respond_to do |format|
	    if @group.save
		format.html { redirect_to @group, notice: 'Group created' }
		format.json { render :show, status: :created, location: @group }
		@group.add(current_user, as: "admin")
	    else
		format.html {render :new}
		format.json { render json: @group.errors, status: :unprocessable_entity }
	    end
	end
    end

    def check_group
	@members = User.in_group(set_group)

	@members.each do |member|
		GroupCheck.create(group_id: params[:id], receiver_id: member.id)
	end


	respond_to do |format|
	    format.html {redirect_to @group, notice: "Group checked"}
	    format.json {render :back, status: :created}
	end
    end

    def group_params
	params.require(:group).permit(:name, :desc)
    end

    def set_group
	@group = Group.find(params[:id])
    end

end
