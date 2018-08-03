class ProgramExercise < ApplicationRecord
  validates :program_id, :exercise_id, presence: true
  validates :exercise_id, uniqueness: { scope: :program_id }

  belongs_to :program

  belongs_to :exercise
end
