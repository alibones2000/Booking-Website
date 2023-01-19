class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.integer :user_id
      t.integer :booking_id
      t.integer :total
      t.string :card
      t.integer :room_id
      
      t.timestamps
    end
  end
end
