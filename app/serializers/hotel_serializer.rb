class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :rating, :images, :phone_number, :img
  has_many :rooms
  has_many :photos
  has_many :informations
end
