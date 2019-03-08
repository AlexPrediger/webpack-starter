/**
 * validate string
 * @param {function} f
 * @return {Boolean}
 */
export const isFunction = f => {
    if (typeof f === 'function') {
        try {
            f();
        } catch (err) {
            return false;
        }
        return true;
    } else return false;
}

// () => { if (typeof cl === 'function') {
//     try {
//         new cl();
//     } catch (err) {
//         return true;
//     }
//     return false;
// } else return false;
// }
