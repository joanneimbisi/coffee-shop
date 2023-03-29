class Review < ApplicationRecord
    belongs_to :user
    belongs_to :coffee
end

# Make sure you have validation