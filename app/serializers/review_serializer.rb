class ReviewSerializer < ActiveModel::Serializer
    attributes  :coffee_id, :username, :title, :description, :user_id, :id
    
    belongs_to :user

end