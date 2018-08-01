class Program < ApplicationRecord
  validates :name, :creator_id, presence: true

  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id
end
