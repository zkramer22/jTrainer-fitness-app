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

export const selectAllExercises = state => {
  let exercises = values(state.entities.exercises);
  return exercises;
}

export const selectWeeks = (state, program, weeks) => {
  if (Object.values(weeks).length === 0) { return {} }
  let ids = program.week_ids;
  const programWeeks = new Object();
  for (let i = 0, length = ids.length; i < length; i++) {
    programWeeks[i] = state.entities.weeks[i + 1];
  }
  return programWeeks;
}

export const selectDays = (state, program, days) => {
  if (Object.values(days).length === 0) { return {} }
  let ids = program.day_ids;
  const programDays = new Object();
  for (let i = 0, length = ids.length; i < length; i++) {
    // debugger
    programDays[i] = state.entities.days[i + 1];
  }
  return programDays;
}

export const selectDayExercises = (state, program) => {
  if (!program.exercise_ids) { return {} }
  const dayExercises = new Object();

  for (let i = 1, length = program.exercise_ids.length; i <= length; i++) {
    dayExercises[i] = state.entities.dayExercises[i];
  }
  return dayExercises;
}
