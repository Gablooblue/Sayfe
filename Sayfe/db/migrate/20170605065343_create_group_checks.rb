class CreateGroupChecks < ActiveRecord::Migration[5.0]
  def change
    create_table :group_checks do |t|
      t.integer :group_id
      t.integer :receiver_id
      t.string :res, default: ""

      t.timestamps
    end
  end
end
