class Week < ApplicationRecord
  # has_many :exercises,
  #   class_name: :Exercise,
  #   foreign_key: :week_id

  belongs_to :program
end
