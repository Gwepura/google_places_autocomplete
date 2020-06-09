class AddColumsToAutoCompletes < ActiveRecord::Migration[5.2]
  def change
    add_column :autocompletes, :line_1, :string
    add_column :autocompletes,:line_2, :string
    add_column :autocompletes,:city, :string
  end
end
