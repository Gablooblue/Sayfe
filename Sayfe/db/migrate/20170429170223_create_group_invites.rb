class CreateGroupInvites < ActiveRecord::Migration[5.0]
  def change
    create_table :group_invites do |t|
      t.integer :user_id
      t.integer :group_id
      t.integer :inviter_id

      t.timestamps
    end
  end
end
