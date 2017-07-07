class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[5.0]
  def change
    change_table(:users) do |t|
	add_column :users, :provider, :string, null: false, default: 'email'
	add_column :users, :uid, :string, null: false, default: ''
	add_column :users, :tokens, :text

	# inspired by https://github.com/lynndylanhurley/devise_token_auth/issues/181
	User.find_each do |user| 
	    if user.uid.blank?
		user.uid = user.email
		user.provider = 'email'
		user.save!
	    end
	end
    end
  end
end
