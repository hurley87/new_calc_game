class User < ActiveRecord::Base

	has_secure_password

	has_many :derivatives
	has_many :additions

	validates :email, presence: true, uniqueness: true
	validates :password, :presence => true
	validates :username, presence: true, uniqueness: true

	def lowest_add
		lowest = 100.0
		self.additions.each do |add|
			lowest = add.score if add.score < lowest
		end
		lowest
	end

	def lowest_der
		lowest = 100.0
		self.derivatives.each do |add|
			lowest = add.score if add.score < lowest
		end
		lowest
	end
	def total_time 
		self.lowest_add + self.lowest_der
	end
end
