class AddWeekNumToWeeks < ActiveRecord::Migration[5.1]
  def change
    add_column :weeks, :week_num, :integer
  end
end
