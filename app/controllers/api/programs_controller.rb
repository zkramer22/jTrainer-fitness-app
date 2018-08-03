class Api::ProgramsController < ApplicationController
  def new

  end

  def create
    @program = Program.new(program_params)
    if @program.save
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
    @program = Program.find(params[:id])
    numDays = @program.days_per_week
    @days = []
    1.upto(numDays) do |i|
      @days << @program.program_exercises.where(day: i)
    end

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
