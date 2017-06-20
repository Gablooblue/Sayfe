class FriendRequestsController < ApplicationController
    before_action :authenticate_user!

    def index 
	@friend_reqs = Friendship.target(current_user)
    end
end
