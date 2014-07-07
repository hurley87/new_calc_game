class CreateAdditions < ActiveRecord::Migration
  def change
    create_table :additions do |t|
      t.float :score

      t.timestamps
    end
  end
end
