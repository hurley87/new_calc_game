class DerivativesController < ApplicationController

	def index
		@derivatives = Derivative.order("score ASC")
  end

  def new
  	@dTime = Derivative.new
  end

  def create
  	@dTime = Derivative.new(d_params)
  	@dTime.user_id = current_user.id
  	if @dTime.save
  		redirect_to derivatives_path
  	else
  		render "new"
  	end
  end

  private 

  def d_params
  	params.require(:derivative).permit(:score, :user_id)
  end
end
