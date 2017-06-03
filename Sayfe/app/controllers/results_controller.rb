class ResultsController < ApplicationController

    def index
	@results = User.all
    end

end
