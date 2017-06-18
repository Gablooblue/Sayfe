class ResultsController < ApplicationController

    def index
	@q = User.ransack(params[:q])
	@results = @q.result(distinct: true)
    end

end
