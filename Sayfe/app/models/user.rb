class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_many :posts

  has_many :friendships
  has_many :inverse_friendships, class_name: "Friendship", foreign_key: 'friend_id'
  has_many :inverse_friends, through: :inverse_friendships, source: :user
  
  has_many :friendship_requests, class_name: "Friendship", foreign_key: "friend_id"

  has_many :active_friends, -> {where(friendships: {confirmed: true})}, through: :friendships, source: :friend
  has_many :received_friends, -> {where(friendships: {confirmed: true})}, through: :friendship_requests, source: :user
  has_many :pending_friends, -> {where(friendships: {confirmed: false})}, through: :friendships, source: :friend
  has_many :requested_friends, -> {where(friendships: {confirmed: false})}, through: :friendship_requests, source: :user

  def friends
      active_friends | received_friends
  end

  def requests
      pending_friends | requested_friends
  end
  has_many :group_invites
  
  groupify :group_member
  groupify :named_group_member

  has_many :announcements, dependent: :destroy

end
