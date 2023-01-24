class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.integer :hotel_id
      t.string :img

      t.timestamps
    end
  end
end
