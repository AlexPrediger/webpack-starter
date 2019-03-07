/**
 * validate string
 * @param {object} obj
 * @return {Boolean}
 */
export const isObject = obj => typeof obj === 'object' && obj !== null && !Array.isArray(obj);
