class Program < ApplicationRecord
  validates :name, :creator_id, presence: true

  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id

  has_many :weeks

  has_many :days,
    through: :weeks,
    source: :days

  has_many :day_exercises,
    through: :days,
    source: :day_exercises

  has_many :exercises,
    through: :days,
    source: :exercises

  def num_weeks
    self.weeks.length
  end

  def num_days
    self.days.length
  end
end
