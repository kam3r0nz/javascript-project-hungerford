class Songs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :album_cover
      t.belongs_to :user
    end
  end
end
