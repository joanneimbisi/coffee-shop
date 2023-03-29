class CoffeesSerializer < ActiveModel::Serializer

  attributes :name, :country, :price, :image_url
  
end
