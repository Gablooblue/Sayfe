class GroupCheck < ApplicationRecord
    belongs_to :receiver, class_name: "User"
    belongs_to :group

    scope :target, -> (user) do
	where("group_checks.receiver_id = ? and res = ?", user.id, "")
    end

    scope :result, -> (group) do
	where("safety_checks.group_id = ? and res != ?", group.id, "")	
    end
end
