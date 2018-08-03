import values from 'lodash/values';

const propSort = prop => {
  let sortOrder = 1;
  if (prop[0] === '-') {
    sortOrder = -1;
    prop = prop.substr(1);
  }
  return function (a,b) {
    const result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
    return result * sortOrder;
  }
};

export const selectAllPrograms = state => {
  let programs = values(state.entities.programs);
  return programs.sort(propSort("name"));
};

export const selectProgramExercises = (state, program) => {
  if (!program.exercise_ids) { return {} }
  const programExercises = new Object();

  for (let i = 1, length = program.exercise_ids.length; i <= length; i++) {
    programExercises[i] = state.entities.exercises[i];
  }
  return programExercises;
}
