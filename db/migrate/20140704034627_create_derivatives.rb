class CreateDerivatives < ActiveRecord::Migration
  def change
    create_table :derivatives do |t|
      t.float :score

      t.timestamps
    end
  end
end
