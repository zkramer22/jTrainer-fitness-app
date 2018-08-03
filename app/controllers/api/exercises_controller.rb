class Api::ExercisesController < ApplicationController
  def new
    @exercise = Exercise.new
  end

  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      render "api/exercises/show"
    else
      render json: @exercise.errors.full_messages, status: 422
    end
  end

  def index
    @exercises = Exercise.all
    render "api/exercises/index"
  end

  def show
    @exercise = Exercise.find(params[:id])
    render "api/exercises/show"
  end

  def edit
  end

  def update
    @exercise = Exercise.find(params[:id])
    if @exercise.update(exercise_params)
      render "api/exercises/index"
    else
      render json: @exercise.errors.full_messages, status: 422
    end
  end

  def destroy
    @exercise = Exercise.find(params[:id])
    @exercise.destroy!
    render "api/exercises/index"
  end

  private
    def exercise_params
      params.require(:exercise).permit(:name, :superset, :rest, :tempo1, :tempo2, :tempo3, :tempo4, :tempos, :tempo_other, :sets, :sets2, :reps, :rpe, :notes)
    end
end
