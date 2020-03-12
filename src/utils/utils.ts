import styles from '../components/ListData/ListData.module.css';

export const Utils = Object.freeze({
  // Properties here :-P
  upperFirstLetter: (str: string): string => {
    const strCopy: string[] = str.split('');
    strCopy[0] = strCopy[0].toUpperCase();
    const result: string = strCopy.join('');

    return result;
  },
  classColorHandler: (tableDataName: string): string => {
    // Weak, Null, Repel, Drain, Resist, N/A
    if (tableDataName === 'Weak') { return styles.weak; }
    if (tableDataName === 'Null') { return styles.null; }
    if (tableDataName === 'Repel') { return styles.repel; }
    if (tableDataName === 'Drain') { return styles.drain; }
    if (tableDataName === 'Resist') { return styles.resist; }
    if (tableDataName === 'N/A') { return styles.NA; }
    return '';
  },
});

export const Api = Object.freeze({
  // Here is properties q-:
});
