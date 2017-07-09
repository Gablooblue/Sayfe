class SearchController < ApplicationController

    def index
	@users = User.all
	@q = @users.ransack(params[:q])
	@results = @q.result(distinct: true)
    end
end
