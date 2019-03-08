/**
 * validate string
 * @param {class} cl
 * @return {Boolean}
 */
export const isClass = cl => {
    if (typeof cl === 'function') {
        try {
            cl();
        } catch (err) {
            return true;
        }
        return false;
    } else return false;
}
// cl => {
//     typeof cl === 'class' && try {
//         new cl();
//     } catch (err) {
//         return false;
//     }
//     return true;
// };
