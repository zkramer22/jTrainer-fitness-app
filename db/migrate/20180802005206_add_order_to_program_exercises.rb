class AddOrderToProgramExercises < ActiveRecord::Migration[5.1]
  def change
    add_column :program_exercises, :order, :integer
  end
end
