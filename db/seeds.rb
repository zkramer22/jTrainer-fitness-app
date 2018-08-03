# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Program.destroy_all
# Exercise.destroy_all
# ProgramExercise.destroy_all


# exercise_list = [
#   ["Conventional Deadlifts", "2-3 min", nil, "Reset", 4, nil, 6, nil, 6.5, "Build Volume"],
#   ["Paused/Contrast Pulls", "2-3 min", nil, "Reset", nil, "C 1:1", 4, 6.5, nil],
#   ["Spoto Press", "2-3min", [2,2,1,0], nil, 3, nil, 4, nil, 6, nil],
#   ["Incline Bench Row to Hip", "Next", [3,2,3,0], nil, 3, nil, nil, "12-15", 8, nil],
#   ["Lean Away Lateral Raises", "90 sec", [1,0,1,0], nil, 3, nil, nil, "12-15", 8, nil],
#   ["DB Shoulder Press", "Next", [2,0,1,0], nil, 3, nil, 10, nil, 8, nil],
#   ["GHR negatives", "Next", [5,0,1,0], nil, 3, nil, nil, "AMRAP", 8, nil],
#   ["Farmer's Walks", "60-90 sec", nil, "Control", 3, nil, nil, "20 yds", 10, nil],
#
#   ["High Bar Squats", "2-3 min", [2,0,1,0], nil, 4, nil, 7, nil, 6.5, nil],
#   ["Hip Thrusts", "2-3 min", [2,1,1,0], nil, 3, nil, 8, nil, 7, nil],
#   ["Wide Grip Paused Swiss Bar", "2-3 min", [2,1,1,0], nil, 5, nil, 5, nil, 8, nil],
#   ["Low Incline DB Chest Flyes", "Next", [3,0,2,0], nil, 3, nil, 10, nil, 9, nil],
#   ["TBar Row", "90 sec", [2,0,2,0], nil, 3, nil, 10, nil, 8, nil],
#   ["Flat DB Press", "Next", [2,0,1,0], nil, nil, "x3 Drop", nil, "10-12", 9, nil],
#   ["Preacher Curls", "90 sec", [2,0,2,0], nil, nil, "x3 Drop", nil, "10-12", 9, nil]
# ]
#
# exercise_list.each do |name, rest, tempos, tempo_other, sets, sets_other, reps, reps_other, rpe, notes|
#   Exercise.create!(name: name, rest: rest, tempos: tempos, tempo_other: tempo_other, sets: sets, sets_other: sets_other, reps: reps, reps_other: reps_other, rpe: rpe, notes: notes)
# end

# program_exercise_list = [
#   [1, 1, 1, 1],
#   [1, 2, 1, 2],
#   [1, 3, 1, 3],
#   [1, 4, 1, 4],
#   [1, 5, 1, 5],
#   [1, 6, 1, 6],
#   [1, 7, 1, 7],
#   [1, 8, 1, 8],
#   [1, 9, 2, 1],
#   [1, 10, 2, 2],
#   [1, 11, 2, 3],
#   [1, 12, 2, 4],
#   [1, 13, 2, 5],
#   [1, 14, 2, 6],
#   [1, 15, 2, 7],
#   [1, 16, 2, 8],
#   [1, 17, 3, 1],
#   [1, 18, 3, 2],
#   [1, 19, 3, 3],
#   [1, 20, 3, 4],
#   [1, 21, 3, 5],
#   [1, 22, 3, 6],
#   [1, 23, 3, 7],
# ]
#
# program_exercise_list.each do |program_id, exercise_id, day, order|
#   ProgramExercise.create!(program_id: program_id, exercise_id: exercise_id, day: day, order: order)
# end
