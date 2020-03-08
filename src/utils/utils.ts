export const Utils = Object.freeze({
  // Properties here :-P
  upperFirstLetter: (str: string): string => {
    const strCopy: string[] = str.split('');
    strCopy[0] = strCopy[0].toUpperCase();
    const result: string = strCopy.join('');

    return result;
  },
});

export const Api = Object.freeze({
  // Here is properties q-:
});
