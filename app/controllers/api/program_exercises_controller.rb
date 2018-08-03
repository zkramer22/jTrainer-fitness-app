class Api::ProgramExercisesController < ApplicationController
  def create

  end

  def destroy

  end

  def program_exercise_params
    params.require(:program_exercise).permit(:program_id, :exercise_id, :day, :order)
  end
end
