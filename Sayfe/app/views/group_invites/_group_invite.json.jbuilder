json.extract! group_invite, :id, :user_id, :group_id, :inviter_id, :created_at, :updated_at
json.url group_invite_url(group_invite, format: :json)
