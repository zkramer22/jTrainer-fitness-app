json.program do
  json.extract! @program, :id,:name, :num_weeks, :days_per_week, :comments, :exercise_ids
  json.extract! @program.creator, :email_address
end

json.exercises do
  @program.exercises.each do |exercise|
    json.set! exercise.id do
      json.extract! exercise, :id, :name, :superset, :rest, :tempos, :tempo_other, :sets, :sets_other, :reps, :reps_other, :rpe, :notes
    end
  end
end

json.days do
  @days.each_with_index do |day, i|
    dayArr = []
    json.set! i + 1 do
      day.each do |program_exercise|
        dayArr << program_exercise.exercise_id
      end
      json.exercise_ids dayArr
    end
  end
end

if @program_exercise
  json.program_exercise do
    json.extract! @program_exercise, :program_id, :exercise_id, :day, :order
  end
end
