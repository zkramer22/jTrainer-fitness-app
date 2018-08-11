class Api::WeeksController < ApplicationController
  def create
    @week = Week.new(week_params)
    if @week.save
      # render "api/week/show"
      render json: "week successfully created"
    else
      render json: @week.errors.full_messages, status: 422
    end
  end

  private

  def week_params
    params.require(:week).permit(:program_id)
  end
end
