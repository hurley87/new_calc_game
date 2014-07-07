class AddUserIdToDerivative < ActiveRecord::Migration
  def change
  	add_column :derivatives, :user_id, :integer
  end
end
