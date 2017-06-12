class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :disaster_id
      t.integer :user_id
      t.string :intensity
      t.text :desc
      t.decimal :longitude
      t.decimal :latitude

      t.timestamps
    end
  end
end
