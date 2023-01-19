class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :room_id
      t.date :date_from
      t.date :date_to
      t.integer :room_count
      t.string :phone_number
      t.integer :travelers

      t.timestamps
    end
  end
end
