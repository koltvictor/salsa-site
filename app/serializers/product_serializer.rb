class ProductSerializer < ActiveModel::Serializer
  attributes :name, :image, :description, :price
  has_one :user
end
