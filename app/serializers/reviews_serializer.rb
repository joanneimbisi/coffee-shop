class ReviewsSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :coffee_id, :title, :description
    
    belongs_to :user
end