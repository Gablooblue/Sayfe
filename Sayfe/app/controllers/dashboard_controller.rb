class DashboardController < ApplicationController
    def index
	@groups = Group.with_member(current_user)
	@user_queries = SafetyCheck.target(current_user)
	@group_queries = GroupCheck.target(current_user)
	@notifications= @user_queries + @group_queries
    end
end
