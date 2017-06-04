class NotificationsController < ApplicationController
    before_action :authenticate_user!

    def index
	#@safety_queries = current_user.safety_queries
	@user_queries = current_user.requested_user_checks
	@group_queries = current_user.requested_group_checks
    end
end
