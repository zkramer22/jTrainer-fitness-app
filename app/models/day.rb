class Day < ApplicationRecord
  belongs_to :week

  has_many :day_exercises

  has_many :exercises,
    through: :day_exercises,
    source: :exercise

  def num_exercises
    self.exercises.length
  end
end
