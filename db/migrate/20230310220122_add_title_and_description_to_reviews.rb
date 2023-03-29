class AddTitleAndDescriptionToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :title, :string
    add_column :reviews, :description, :string

  end
end
