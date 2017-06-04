class CreateSafetyChecks < ActiveRecord::Migration[5.0]
  def change
    create_table :safety_checks do |t|
	t.integer :user_id
	t.integer :friend_id, null:true, default: nil
	t.integer :group_id, null: true, default: nil
	t.string :res, default: "" 

	t.timestamps
    end
  end
end
