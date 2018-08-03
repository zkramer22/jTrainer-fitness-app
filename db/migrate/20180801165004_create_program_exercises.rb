class CreateProgramExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :program_exercises do |t|
      t.integer :program_id, null: false
      t.integer :exercise_id, null: false

      t.timestamps
    end
  end
end
