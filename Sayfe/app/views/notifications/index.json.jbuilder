json.array! @user_queries do |query|
    json.user do
	json.name query.user.first_name + " " + query.user.last_name
    end
    json.url safety_check_url(id: query.id)
end

json.array! @group_queries do |query|
    json.name query.name
    json.url group_check_url(id: query.id)
end
