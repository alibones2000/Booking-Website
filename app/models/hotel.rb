class Hotel < ApplicationRecord
    has_many :users, through: :bookings
    has_many :rooms
end
