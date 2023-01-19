class RoomSerializer < ActiveModel::Serializer
  attributes :id, :price, :beds, :availability, :amentities, :hotel_id, :images
  has_many :bookings
  has_many :payments
end
