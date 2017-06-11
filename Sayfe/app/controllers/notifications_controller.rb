class NotificationsController < ApplicationController
    before_action :authenticate_user!

    def index
	#@safety_queries = current_user.safety_queries
	@user_queries = SafetyCheck.target(current_user).order('updated_at DESC')
	@group_queries = GroupCheck.target(current_user).order('updated_at DESC')
	@safety_queries = @user_queries + @group_queries
	@safety_queries.sort_by(&:created_at)
    end
end
