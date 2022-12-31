import _ from 'lodash';

export const flattenObject = (input) => {
  const result = {};
  Object.keys(input).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      if (_.isObject(input[key]) && ![{}, [], null, undefined].includes(input[key])) {
        const childObject = flattenObject(input[key]);
        Object.keys(childObject).forEach((childKey) => {
          if (Object.prototype.hasOwnProperty.call(childObject, childKey)) {
            result[`${key}.${childKey}`] = childObject[childKey];
          }
        });
      } else {
        result[key] = input[key];
      }
    }
  });
  return result;
};
