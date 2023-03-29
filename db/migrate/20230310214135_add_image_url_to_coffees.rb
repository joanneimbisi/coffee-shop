class AddImageUrlToCoffees < ActiveRecord::Migration[6.1]
  def change
    add_column :coffees, :image_url, :string
  end
end
