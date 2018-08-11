class AddNameToDayExercise < ActiveRecord::Migration[5.1]
  def change
    add_column :day_exercises, :name, :string
  end
end
