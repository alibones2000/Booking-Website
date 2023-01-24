class RoomSerializer < ActiveModel::Serializer
  attributes :id, :price, :beds, :availability, :hotel_id, :images
  has_many :bookings
  has_many :payments
  belongs_to :hotel
end
