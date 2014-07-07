class AddUserIdToAddition < ActiveRecord::Migration
  def change
  	add_column :additions, :user_id, :integer
  end
end
