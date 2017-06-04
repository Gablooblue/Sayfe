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

  #Friends who user added 
  has_many :active_friends, -> {where(friendships: {confirmed: true})}, through: :friendships, source: :friend
  #Friends which added user 
  has_many :received_friends, -> {where(friendships: {confirmed: true})}, through: :friendship_requests, source: :user
  #Friend requests sent by user 
  has_many :pending_friends, -> {where(friendships: {confirmed: false})}, through: :friendships, source: :friend
  #Friend requests from others
  has_many :requested_friends, -> {where(friendships: {confirmed: false})}, through: :friendship_requests, source: :user

  has_many :group_queries, class_name: "SafetyCheck", foreign_key: "group_id"
  has_many :friend_queries, class_name: "SafetyCheck", foreign_key: "friend_id"

  has_many :pending_friend_checks, -> {where(safety_checks: {res: ""})}, through: :safety_checks, source: :friend
  has_many :pending_group_checks, -> {where(safety_checks: {res: ""})}, through: :safety_checks, source: :group
  has_many :requested_user_checks, -> {where(safety_checks:{ res: "" })}, through: :friend_queries, source: :user
  has_many :requested_group_checks, -> {where(safety_checks:{res: ""})}, through: :group_queries, source: :user

  def friends
      active_friends | received_friends
  end

  def requests
      pending_friends | requested_friends
  end

  def safety_queries
      requested_user_checks | requested_group_checks
  end

  def safety_requests
      pending_friend_checks | pending_group_checks
  end

  has_many :group_invites
  
  groupify :group_member
  groupify :named_group_member

  has_many :announcements, dependent: :destroy
  
  has_many :safety_checks

end
