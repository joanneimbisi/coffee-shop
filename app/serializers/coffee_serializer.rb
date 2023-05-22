class CoffeeSerializer < ActiveModel::Serializer
  attributes :name, :country, :price, :image_url, :id
  has_many :reviews
end
