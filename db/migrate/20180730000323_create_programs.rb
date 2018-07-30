class CreatePrograms < ActiveRecord::Migration[5.1]
  def change
    create_table :programs do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.integer :weeks
      t.integer :days
      t.integer :days_per_week
      t.string :comments

      t.timestamps
    end
  end
end
