class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :booking_id, :total, :card
  belongs_to :room
end
