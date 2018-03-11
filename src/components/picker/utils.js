
//获取默认Translate
export function getDefaultTranslate(offset, rowHeight, items) {

    var currentIndex = getDefaultIndex(items);

    return (offset - currentIndex) * rowHeight;
}

/**
 * get max translate
 * @param offset
 * @param rowHeight
 * @returns {number}
 */
export function getMax(offset, rowHeight) {
    return offset * rowHeight;
}

/**
 * get min translate
 * @param offset
 * @param rowHeight
 * @param length
 * @returns {number}
 */
export function getMin(offset, rowHeight, length) {
    return -(rowHeight * (length - offset - 1));
}
/**
 * @desc get index of middle item
 * @param items
 * @returns {number}
 */
export function getDefaultIndex(items) {
    var current = Math.floor(items.length / 2);
    var count = 0;
    while (!!items[current] && items[current].disabled) {
        current = ++current % items.length;
        count++;

        if (count > items.length) {
            throw new Error('No selectable item.');
        }
    }

    return current;
}