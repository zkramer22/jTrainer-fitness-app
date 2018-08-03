class RemoveTempoFieldsFromExercises < ActiveRecord::Migration[5.1]
  def change
    remove_column :exercises, :tempo1
    remove_column :exercises, :tempo2
    remove_column :exercises, :tempo3
    remove_column :exercises, :tempo4
  end
end
