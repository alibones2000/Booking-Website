class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :rating, :images, :phone_number
  has_many :rooms
end
