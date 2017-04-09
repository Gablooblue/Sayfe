json.extract! post, :id, :disaster_id, :user_id, :intensity, :desc, :longtitude, :latitude, :created_at, :updated_at
json.url post_url(post, format: :json)
