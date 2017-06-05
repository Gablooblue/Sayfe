class SafetyCheck < ApplicationRecord
    belongs_to :receiver, class_name: "User"
    belongs_to :user

    scope :target,-> (user) do
	where("safety_checks.receiver_id = ? AND res = ?", user.id, "")
    end

    scope :result, -> (user) do
	where("safety_checks.user_id= ? and res != ?", user.id, "")
    end
end
