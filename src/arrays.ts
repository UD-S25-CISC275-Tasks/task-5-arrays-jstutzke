/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
// new array, just first and last elements
export function bookEndList(numbers: number[]): number[] {
    let length: number = numbers.length;
    if (length == 0) {
        return [];
    } else if (length == 1) {
        return [...numbers, ...numbers];
    }

    let firstElem: number = numbers[0];
    let lastElem: number = numbers[length-1];

    let array: number[] = [firstElem, lastElem];
    return array;
}
// COMPLETE

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled: number[] = numbers.map((n: number): number => n*3);
    return tripled;
}
// COMPLETE

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // strings into integers
    // if not an integer, change it to 0
    let ints: number[] = numbers.map(
        (num: string): number => (parseInt(num)) ? (parseInt(num)) : 0
    );

    return ints;
}
// COMPLETE

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.

// if first element is $, remove it
// if result can't be made an int, make it a 0

export const removeDollars = (amounts: string[]): number[] => {
    // removing dollar sign
    let noSign: number[] = amounts.map(
        (word: string): number => (word[0] == "$") ? (parseInt(word[:1])): 0
    );
    return noSign;
};
// COMPLETE

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // check for ! at the end of messages
    let exclam: string[] = messages.map(
        (word: string): string => (word[word.length-1] == "!") ? (word.slice(1).toUpperCase())
    );

    let remove: string[] = exclam.filter(
        (word:string): boolean => word[word.length-1] == "?"
    );
    return remove;
};
// COMPLETE

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let counter: number = 0;

    

    return 0;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
