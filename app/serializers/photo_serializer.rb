class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :hotel_id, :img
  belongs_to :hotel
end
