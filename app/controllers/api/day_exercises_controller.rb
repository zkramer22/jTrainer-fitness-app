class Api::DayExercisesController < ApplicationController
  def create

  end

  def destroy

  end

  private

  def day_exercise_params
    params.require(:day_exercise).permit(
      :name, :day_id, :exercise_id, :order, :rest, :tempos, :tempos_other,
      :sets, :sets_other, :reps, :reps_other, :rpe, :notes
    )
  end
end
