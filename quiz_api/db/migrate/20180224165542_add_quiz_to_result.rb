class AddQuizToResult < ActiveRecord::Migration[5.1]
  def change
    add_column :results, :quiz_id, :integer
    add_index :results, :quiz_id
  end
end
