json.array! @announcements do |announcement|
    json.title announcement.title
    json.announcement announcement.announcement
    json.date announcement.created_at
    json.url group_announcement_url(id: announcement.id, group_id: announcement.group )
    json.user do
	json.first_name announcement.user.first_name
	json.last_name announcement.user.last_name
    end
end
