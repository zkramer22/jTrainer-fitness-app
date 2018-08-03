class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.string :superset
      t.string :rest, null: false
      t.integer :tempo1
      t.integer :tempo2
      t.integer :tempo3
      t.integer :tempo4
      t.integer :tempos, array: true
      t.string :tempo_other
      t.integer :sets
      t.string :sets_other
      t.integer :reps
      t.string :reps_other
      t.float :rpe
      t.string :notes

      t.timestamps
    end
    add_index :exercises, :name, unique: true
  end
end
