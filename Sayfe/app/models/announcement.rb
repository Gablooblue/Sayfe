class Announcement < ApplicationRecord

    paginates_per 5
    belongs_to :user
    belongs_to :group
end
