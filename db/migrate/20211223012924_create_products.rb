class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.string :description
      t.decimal :price
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
