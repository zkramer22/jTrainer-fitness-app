require 'test_helper'

class ExercisesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exercise = exercises(:one)
  end

  test "should get index" do
    get exercises_url
    assert_response :success
  end

  test "should get new" do
    get new_exercise_url
    assert_response :success
  end

  test "should create exercise" do
    assert_difference('Exercise.count') do
      post exercises_url, params: { exercise: { name: @exercise.name, notes: @exercise.notes, reps: @exercise.reps, rest: @exercise.rest, rpe: @exercise.rpe, sets2: @exercise.sets2, sets: @exercise.sets, superset: @exercise.superset, tempo1: @exercise.tempo1, tempo2: @exercise.tempo2, tempo3: @exercise.tempo3, tempo4: @exercise.tempo4, tempo_other: @exercise.tempo_other, tempos: @exercise.tempos } }
    end

    assert_redirected_to exercise_url(Exercise.last)
  end

  test "should show exercise" do
    get exercise_url(@exercise)
    assert_response :success
  end

  test "should get edit" do
    get edit_exercise_url(@exercise)
    assert_response :success
  end

  test "should update exercise" do
    patch exercise_url(@exercise), params: { exercise: { name: @exercise.name, notes: @exercise.notes, reps: @exercise.reps, rest: @exercise.rest, rpe: @exercise.rpe, sets2: @exercise.sets2, sets: @exercise.sets, superset: @exercise.superset, tempo1: @exercise.tempo1, tempo2: @exercise.tempo2, tempo3: @exercise.tempo3, tempo4: @exercise.tempo4, tempo_other: @exercise.tempo_other, tempos: @exercise.tempos } }
    assert_redirected_to exercise_url(@exercise)
  end

  test "should destroy exercise" do
    assert_difference('Exercise.count', -1) do
      delete exercise_url(@exercise)
    end

    assert_redirected_to exercises_url
  end
end
