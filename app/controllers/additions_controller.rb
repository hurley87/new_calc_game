class AdditionsController < ApplicationController
  def index
		@additions = Addition.order("score ASC")
  end

  def new
  	@dTime = Addition.new
  end

  def create
  	@dTime = Addition.new(d_params)
  	@dTime.user_id = current_user.id

  	if @dTime.save
  		redirect_to additions_path
  	else
  		render "new"
  	end
  end

  private 

  def d_params
  	params.require(:addition).permit(:score, :user_id)
  end
end
