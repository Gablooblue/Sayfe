class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_many :posts

  has_many :friendships
  has_many :friends, through: :friendships, dependent: :destroy
  has_many :inverse_friendships, class_name: "Friendship", foreign_key: 'friend_id'
  has_many :inverse_friends, through: :inverse_friendships, source: :user
  
  groupify :group_member
  groupify :named_group_member

  has_many :announcements, dependent: :destroy

end
