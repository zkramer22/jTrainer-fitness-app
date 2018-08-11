class Api::DaysController < ApplicationController
  def create
    @day = Day.new(day_params)
    if @day.save
      # render "api/day/show"
      render json: "day successfully created"
    else
      render json: @day.errors.full_messages, status: 422
    end
  end

  private

  def day_params
    params.require(:day).permit(:week_id)
  end
end
