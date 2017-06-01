class FriendshipsController < ApplicationController
    before_action :authenticate_user! 

    def index 
	@friends = current_user.friendships.all 
    end

    def create
	@friendship = current_user.friendships.build(:friend_id => params[:friend_id])
	if @friendship.save
	    flash[:notice] = "Friend request sent"
	    redirect_to :back
	else
	    flash[:error] = "Error in sending friend request"
	    redirect_to :back
	end
    end

    def update 
	@friendship = current_user.friendships.find(params[:id])
        @friendship.update(status: "confirmed") 

	if @friendship.save
	    flash[:notice] = "Added friend"
	    redirect_to :back
	else
	    flash[:error] = "Error in adding friend"
	    redirect_to :back
	end
    end
    
    def destroy
	@friendship = current_user.friendships.find(params[:id])
	@friendship.destroy
	
	flash[:notice] = "Unfriended"
	redirect_to :back
    end

end
