export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (featureName) => {
  return { type: ADD_FEATURE, payload: featureName };
};
