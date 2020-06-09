export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = (featureName) => {
  return { type: REMOVE_FEATURE, payload: featureName };
};
