class Payment < ApplicationRecord
    belongs_to :user
    belongs_to :booking
    belongs_to :room
end
