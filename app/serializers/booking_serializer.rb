class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :date_from, :date_to, :room_count, :phone_number, :travelers
end
