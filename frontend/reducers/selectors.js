import values from 'lodash/values';

export const propSort = (property, order) => {
  let sortOrder = 1;
  if (order === 'DESC') {
    sortOrder = -1;
  }
  return function (a,b) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
};

export const selectAllPrograms = state => {
  let programs = values(state.entities.programs);
  return programs;
};

export const selectProgramExercises = (state, program) => {
  if (!program.exercise_ids) { return {} }
  const programExercises = new Object();

  for (let i = 1, length = program.exercise_ids.length; i <= length; i++) {
    programExercises[i] = state.entities.exercises[i];
  }
  return programExercises;
}
