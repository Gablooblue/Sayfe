class Group < ActiveRecord::Base
  groupify :group

  has_many :announcements, dependent: :destroy
end
