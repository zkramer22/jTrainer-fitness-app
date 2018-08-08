class ChangeProgramWeeksToNumWeeks < ActiveRecord::Migration[5.1]
  def change
    rename_column :programs, :weeks, :num_weeks
    remove_column :programs, :days
  end
end
