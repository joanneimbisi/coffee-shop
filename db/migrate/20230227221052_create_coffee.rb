class CreateCoffee < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :name
      t.string :country
      t.integer :price

      t.timestamps
    end
  end
end
