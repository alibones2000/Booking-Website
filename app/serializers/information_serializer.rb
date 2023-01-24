class InformationSerializer < ActiveModel::Serializer
  attributes :id, :description, :hotel_id, :amentity
  belongs_to :hotel
end
