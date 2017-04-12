class SplashController < ApplicationController

    def index
	if user_signed_in?
	    redirect_to 'home#index' 
	end
    end
end
