class Hotel < ApplicationRecord
    has_many :users, through: :bookings
    has_many :rooms
    has_many :photos
    has_many :informations
end
