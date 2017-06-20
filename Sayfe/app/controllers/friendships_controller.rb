class FriendshipsController < ApplicationController
    before_action :authenticate_user! 

    def index 
	@friends = current_user.friends
    end

    def show
	@user = User.find(params[:id])
	@friends = @user.friends 
    end

    def create
	@friendship = current_user.friendships.build(friend_id: params[:friend_id])
	respond_to do |format|
	    if @friendship.save
		format.html {redirect_to :back, notice: "Friend request sent"}
		format.json { render "Friend request sent", status: :created, location: :back }
	    else
		format.html {redirect_to :back, notice: "Error in sending friend request"}
		format.json {render json: "Error in sending friend request", status: :unprocessable_entity}
	    end
	end
    end

    def update 
	@friendship = Friendship.find(params[:id])
	@friendship.update(confirmed: true) 

	respond_to do |format|
	    if @friendship.save
		format.html { redirect_to :back, notice: "Added friend" }
		format.json { render :back, status: :created, location: :back }
	    else
		format.html {redirect_to :back, error: "Unable to add friend, please try again later"}
		format.json {render json: "Unable to add friend", status: :unprocessable_entity}

	    end
	end
    end

    def destroy
	@friendship = Friendship.find(params[:id])
	@friendship.destroy

	respond_to do |format|
	    format.html {redirect_to :back, notice: "Deleted"}	
	    format.json { head :no_content}
	end
    end

    def unfriend
	@friendship = Friendship.where(user_id: params[:user_id], friend_id: params[:friendship_id]).first
	@friendship.destroy
	respond_to do |format|
	    format.html {redirect_to :back, notice: "Unfriended"}	
	    format.json { head :no_content}
	end
    end

end
