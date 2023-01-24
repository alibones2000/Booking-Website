class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :location
      t.integer :rating
      t.string :images
      t.string :phone_number
      t.string :img
      

      t.timestamps
    end
  end
end
