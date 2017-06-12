class NotificationsController < ApplicationController
    before_action :authenticate_user!

    def index
	#@safety_queries = current_user.safety_queries
	@user_queries = SafetyCheck.target(current_user)
	@group_queries = GroupCheck.target(current_user)
	@safety_queries = @user_queries + @group_queries
	@safety_queries.sort_by(&:updated_at)
    end
end
