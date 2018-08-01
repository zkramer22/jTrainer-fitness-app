export const fetchAllPrograms = () => {
  return $.ajax({
    method: "GET",
    url: "api/programs"
  });
};

export const fetchProgram = id => {
  return $.ajax({
    method: "GET",
    url: `api/programs/${id}`
  });
};

export const createProgram = program => {
  return $.ajax({
    method: "POST",
    url: "api/programs",
    data: { program }
  });
};

export const deleteProgram = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/programs/${id}`
  });
};
