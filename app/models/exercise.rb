class Exercise < ApplicationRecord
  validates :name, presence: true

  has_many :program_exercises,
    class_name: :ProgramExercise,
    foreign_key: :exercise_id

  has_many :programs,
    through: :program_exercises,
    source: :program
end
