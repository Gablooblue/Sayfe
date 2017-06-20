json.array! @friend_reqs do |friend_request|
    json.url friendship_url(id: friend_request.id )
    json.user do
	json.first_name friend_request.user.first_name
	json.last_name friend_request.user.last_name
	json.url user_url(id: friend_request.user.id)
    end
end
