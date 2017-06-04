class FriendRequestsController < ApplicationController
    before_action :authenticate_user!

    def index 
	@friend_reqs = current_user.requested_friends
    end
end
