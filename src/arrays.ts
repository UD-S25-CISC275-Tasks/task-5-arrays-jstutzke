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
    let lastElem: number = numbers[length - 1];

    let array: number[] = [firstElem, lastElem];
    return array;
}
// COMPLETE

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled: number[] = numbers.map((n: number): number => n * 3);
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
    let ints: number[] = numbers.map((num: string): number =>
        parseInt(num) ? parseInt(num) : 0,
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
    let noSign: string[] = amounts.map((word: string): string =>
        word[0] == "$" ? word.slice(1) : word,
    );

    let nums: number[] = noSign.map((num: string): number =>
        parseInt(num) ? parseInt(num) : 0,
    );

    let plan: boolean = nums.every((num: number): boolean => num != 0);

    if (!plan) {
        return [0];
    }

    return nums;
};
// COMPLETE

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // check for ! at the end of messages
    let exclam: string[] = messages.map((word: string): string =>
        word.includes("!") ? word.toUpperCase() : word,
    );

    let remove: string[] = exclam.filter(
        (word: string): boolean => word[word.length - 1] != "?",
    );
    return remove;
};
// COMPLETE

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */

// let newWords: string[] = [];
// for (int i=0; i<words.length; i++) {
//      if (words[i].length < 4) {
//          newWords.push(word);
//      }
// }
// return newWords.length;

export function countShortWords(words: string[]): number {
    const newWords: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return newWords.length;
}
// COMPLETE !!!!!!!!!!

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    // filter the colors array and take out any colors that aren't red blue or green
    // measure the length of the colors array

    let red: string[] = colors.filter(
        (color: string): boolean => color == "red",
    );
    let blue: string[] = colors.filter(
        (color: string): boolean => color == "blue",
    );
    let green: string[] = colors.filter(
        (color: string): boolean => color == "green",
    );

    let total: number = red.length + blue.length + green.length;

    if (total == colors.length) {
        return true;
    } else {
        return false;
    }
}
// COMPLETE!!!!!

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */

export function makeMath(addends: number[]): string {
    // INCOMPLETE!!!!!!
    if (addends.length == 0) {
        return "0=0";
    }
    // solved in a typsecript playground the incorrect way, just have to make it the way they want it

    let sum: number = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let sumWord: string = sum.toString();

    let list: string = addends.join("+");

    return sumWord + "=" + list;
}
// COMPLETE!!!!!

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
    // search for a negative number and get the index of it
    // get the sum up to the negative number
    // if index is -1, append it to the end through spread operator
    // otherwise, splice it after the first negative

    let neg: number = values.findIndex((value: number): boolean => value < 0);
    let index: number = neg + 1;

    let upToNeg: number[] = values.filter(
        (value: number): boolean => value > 0,
    );

    let sum: number = upToNeg.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );

    if (neg == -1) {
        let newList: number[] = [...values, sum];
        return newList;
    }

    let newValues: number[] = [...values];
    newValues.splice(index, 0, sum);
    return newValues;
}
// COMPLETE!!!!!!!!!
