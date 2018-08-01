import values from 'lodash/values';

export const selectAllPrograms = state => values(state.entities.programs);
