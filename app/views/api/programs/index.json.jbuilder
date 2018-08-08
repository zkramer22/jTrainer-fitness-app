@programs.each do |program|
  json.set! program.id do
    json.extract! program, :id, :name, :num_weeks, :days_per_week, :comments
    json.updatedAt program.updated_at.strftime('%d %b %Y')
    json.extract! program.creator, :email_address
  end
end
