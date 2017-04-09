class HomeController < ApplicationController

    def index
	@posts = Post.all
	@hash = Gmaps4rails.build_markers(@posts) do |post, marker|
	  marker.lat post.latitude
	  marker.lng post.longtitude
	  end
	@users = User.all
    end

end
