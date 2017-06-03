class NotificationsController < ApplicationController
    before_action :authenticate_user!

    def index
	@friend_reqs = current_user.pending_friends
    end
end
