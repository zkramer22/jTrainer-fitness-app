class Week < ApplicationRecord
  belongs_to :program

  has_many :days

  def num_days
    self.days.length
  end
end
