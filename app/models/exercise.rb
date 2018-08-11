class Exercise < ApplicationRecord
  validates :name, presence: true

  has_many :day_exercises

  has_many :days,
    through: :day_exercises,
    source: :day
end
