class FriendshipsController < ApplicationController
    def index 
	if user_signed_in?
	    @friends = current_user.friendships.all
	else
	    redirect_to new_user_session_path
	end
    end

    def create
	@friendship = current_user.friendships.build(:friend_id => params[:friend_id])
	if @friendship.save
	    flash[:notice] = "Added friend"
	    redirect_to root_url
	else
	    flash[:error] = "Error in adding friend"
	    redirect_to root_url
	end
    end
    
    def destroy
	@friendship = current_user.friendships.find(params[:id])
	@friendship.destroy
	
	flash[:notice] = "Unfriended"
	redirect_to current_user
    end
end
