class CreateAnnouncements < ActiveRecord::Migration[5.0]
  def change
    create_table :announcements do |t|
      t.integer :user_id
      t.integer :group_id
      t.string :title
      t.text :announcement

      t.timestamps
    end
  end
end
