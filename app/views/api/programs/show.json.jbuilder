json.program do
  json.extract! @program, :id, :name, :num_weeks, :week_ids, :num_days, :day_ids, :comments, :exercise_ids
  json.extract! @program.creator, :email_address
end

json.weeks do
  @program.weeks.each do |week|
    json.set! week.week_num do
      json.extract! week, :id, :program_id, :week_num, :day_ids
    end
  end
end

json.days do
  @program.days.each do |day|
    json.set! day.day_num do
      json.extract! day, :id, :week_id, :day_num, :day_exercise_ids
    end
  end
end

json.day_exercises do
  @program.days.each do |day|
    json.set! day.day_num do
      day.day_exercises.each do |day_exercise|
        json.set! day_exercise.order do
          json.extract! day_exercise, :id, :name, :day_id, :exercise_id, :order, :rest, :tempos, :tempo_other, :sets, :sets_other, :reps, :reps_other, :rpe, :notes
        end
      end
    end
  end
end
#^^^^  exercise, :superset

# json.days do
#   @days.each_with_index do |day, i|
#     dayArr = []
#     json.set! i + 1 do
#       day.each do |program_exercise|
#         dayArr << program_exercise.exercise_id
#       end
#       json.exercise_ids dayArr
#     end
#   end
# end

# if @program_exercise
#   json.program_exercise do
#     json.extract! @program_exercise, :program_id, :exercise_id, :day, :order
#   end
# end
