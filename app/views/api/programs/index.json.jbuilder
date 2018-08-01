@programs.each do |program|
  json.set! program.id do
    json.extract! program, :id, :name, :weeks, :days_per_week, :comments, :created_at, :updated_at
    json.extract! program.creator, :email_address
  end
end
