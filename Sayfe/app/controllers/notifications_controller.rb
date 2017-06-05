class NotificationsController < ApplicationController
    before_action :authenticate_user!

    def index
	#@safety_queries = current_user.safety_queries
	@user_queries = SafetyCheck.target(current_user).order('updated_at DESC')
	@group_queries = nil #current_user.requested_group_checks
    end
end
