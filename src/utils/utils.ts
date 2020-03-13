import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from '../components/ListData/ListData.module.css';

const MySwal = withReactContent(Swal);

interface FieldsToValidate {
  selectType: string;
  selectFilter: string;
  searchInput: string;
}

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
  /**
   * Returns a static string for placeholder for a type passed as parameter.
   * @param type - Type of search
   */
  handlePlaceholder: (type: string, filter: string): string => {
    if (type === 'skills') {
      if (filter === 'MP') { return 'e.g.: 10'; }
      if (filter === 'type') { return 'e.g.: "Physical"'; }
      if (filter === 'description') { return 'e.g.: "Weak Fire attack. Target: 1 enemy"'; }
      return 'e.g.: "Megido"';
    }
    if (type === 'apps') {
      if (filter === 'points') { return 'e.g.: 10'; }
      if (filter === 'requirements') { return 'e.g.: "Complete "Training Exercise I"'; }
      if (filter === 'description') { return 'e.g.: "Makes skills mutate."'; } // TODO: rename this filter to "effect".
      return 'e.g.: "Demolingual"';
    }

    if (filter === 'lvl') { return 'e.g.: 50'; }
    if (filter === 'race') { return 'e.g.: "Godly"'; }
    // Default return:
    return 'e.g.: "Minotaur"';
  },

  handleErrorWithSwal: (props: FieldsToValidate) => {
    const { selectType, selectFilter, searchInput } = props;
    const numberRegexp = new RegExp(/^\d+$/);
    const errors = [];

    if (!selectType) { errors.push({ message: 'Select a valid type!' }); }
    if (!selectFilter) { errors.push({ message: 'Select a valid filter to limit by!' }); }
    if (!searchInput) {
      errors.push({ message: 'Search input field cannot be empty!' });
    } else if ((selectFilter === 'lvl' || selectFilter === 'points') && !numberRegexp.test(searchInput)) {
      errors.push(`Your search "${searchInput}" is not a valid ${selectFilter} value!`);
    }
  },
});

export const Api = Object.freeze({
  // Here is properties q-:
});
