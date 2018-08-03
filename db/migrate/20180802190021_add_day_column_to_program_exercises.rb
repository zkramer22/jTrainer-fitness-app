class AddDayColumnToProgramExercises < ActiveRecord::Migration[5.1]
  def change
    add_column :program_exercises, :day, :integer
  end
end
