json.program do
  json.extract! @program, :id,:name, :weeks, :days_per_week, :comments
  json.extract! @program.creator, :email_address
end
