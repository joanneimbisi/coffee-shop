class Review < ApplicationRecord
    belongs_to :user
    belongs_to :coffee
    validates :title, :description, presence: true

end

