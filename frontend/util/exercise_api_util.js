export const fetchAllExercises = () => {
  return $.ajax({
    method: "GET",
    url: "api/exercises"
  });
};

export const createExercise = exercise => {
  return $.ajax({
    method: "POST",
    url: "api/exercises",
    data: { exercise }
  });
};

export const deleteExercise = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/exercises/${id}`
  });
};
