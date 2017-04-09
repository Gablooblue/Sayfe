class Post < ApplicationRecord
    belongs_to :disaster
    belongs_to :user

    validates :disaster_id, :user_id, :longtitude, :latitude, :presence => true
    validates :desc, :length => { :maximum => 500 }
end
