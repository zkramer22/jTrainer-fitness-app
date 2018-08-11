class DayExercise < ApplicationRecord
  validates :day_id, :exercise_id, :name, presence: true
  validates :exercise_id, uniqueness: { scope: :day_id }

  belongs_to :day

  belongs_to :exercise
end
