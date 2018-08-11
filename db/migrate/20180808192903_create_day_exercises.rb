class CreateDayExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :day_exercises do |t|
      t.integer :day_id, null: false
      t.integer :exercise_id, null: false
      t.integer :order, null: false
      t.string :rest
      t.integer :tempos, array: true
      t.string :tempo_other
      t.integer :sets
      t.string :sets_other
      t.integer :sets
      t.string :sets_other
      t.integer :reps
      t.string :reps_other
      t.float :rpe
      t.string :notes

      t.timestamps
    end
  end
end
