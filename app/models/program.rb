class Program < ApplicationRecord
  validates :name, :creator_id, presence: true

  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id

  has_many :program_exercises,
    class_name: :ProgramExercise,
    foreign_key: :program_id

  has_many :exercises,
    through: :program_exercises,
    source: :exercise
end
