class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.integer :price
      t.string :beds
      t.string :availability
      t.string :amentities
      t.integer :hotel_id
      t.string :images

      t.timestamps
    end
  end
end
