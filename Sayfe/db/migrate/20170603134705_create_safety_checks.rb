class CreateSafetyChecks < ActiveRecord::Migration[5.0]
  def change
    create_table :safety_checks do |t|
	t.integer :receiver_id
	t.integer :user_id
	t.string :res, default: "" 

	t.timestamps
    end
  end
end
