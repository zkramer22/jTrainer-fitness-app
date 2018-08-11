class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.integer :week_id, null: false

      t.timestamps
    end
  end
end
