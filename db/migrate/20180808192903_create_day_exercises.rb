class CreateDayExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :day_exercises do |t|

      t.timestamps
    end
  end
end
