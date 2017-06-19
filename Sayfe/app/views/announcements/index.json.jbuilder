json.array! @announcements do |announcement|
    json.title announcement.title
    json.body announcement.announcement
    json.date announcement.created_at
    json.user do
	json.first_name announcement.user.first_name
	json.last_name announcement.user.last_name
    end
end
