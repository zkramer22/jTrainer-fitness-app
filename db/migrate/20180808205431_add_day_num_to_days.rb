class AddDayNumToDays < ActiveRecord::Migration[5.1]
  def change
    add_column :days, :day_num, :integer
  end
end
