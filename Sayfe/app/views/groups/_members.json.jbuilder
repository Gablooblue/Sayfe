json.extract! members, :id, :first_name, :last_name, :email

json.url user_url(id: member.id)
