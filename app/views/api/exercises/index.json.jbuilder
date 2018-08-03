@exercises.each do |exercise|
  json.set! exercise.id do
    json.extract! exercise, :id, :name, :superset, :rest, :tempos, :sets, :sets_other, :reps, :reps_other, :rpe, :notes
  end
end
