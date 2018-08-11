class Api::ProgramsController < ApplicationController
  def create
    @program = Program.new(program_params)
    if @program.save
      @week = Week.new(program_id: @program.id, week_num: 1)
      if @week.save
        @day = Day.new(week_id: @week.id, day_num: 1)
        if @day.save
          render json: "blank day and week created successfully"
        else
          render json: @day.errors.full_messages, status: 422
        end
      else
        render json: @week.errors.full_messages, status: 422
      end
      render "api/programs/show"
    else
      render json: @program.errors.full_messages, status: 422
    end
  end

  def index
    @programs = Program.all.where(creator_id: current_user.id)
    render "api/programs/index"
  end

  def show
    @program = current_user.created_programs.find(params[:id])
    render "api/programs/show"
  end

  def update
    @program = current_user.programs.find(params[:id])
    if @program.update(program_params)
      render "api/programs/index"
    else
      render json: @program.errors.full_messages, status: 422
    end
  end

  def destroy
    @programs = Program.all.where(creator_id: current_user.id)
    @program = Program.find(params[:id])
    @program.destroy!
    render "api/programs/index"
  end

  private

  def program_params
    params.require(:program).permit(:name, :creator_id)
  end
end
