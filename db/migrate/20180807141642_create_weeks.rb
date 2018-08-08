class CreateWeeks < ActiveRecord::Migration[5.1]
  def change
    create_table :weeks do |t|
      t.integer :program_id, null: false

      t.timestamps
    end
  end
end
