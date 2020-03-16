import Swal from 'sweetalert2';
import withReactContent, { SweetAlert2 } from 'sweetalert2-react-content';
import styles from '../components/ListData/ListData.module.css';

const MySwal: SweetAlert2 = withReactContent(Swal);

interface FieldsToValidate {
  selectType: string;
  selectFilter: string;
  searchInput: string;
}

interface ErrorObject {
  message: string;
}

export const Utils = Object.freeze({
  // Properties here :-P
  upperFirstLetter: (str: string): string => {
    const strCopy: string[] = str.split('');
    strCopy[0] = strCopy[0].toUpperCase();
    const result: string = strCopy.join('');

    return result;
  },
  scrollIntoElement: (elementID: string) => {
    const el: any = document.getElementById(elementID);

    el.scrollIntoView({ behavior: 'smooth' });
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

    console.log(
      'regexp: ', (selectFilter === 'lvl' || selectFilter === 'MP') && numberRegexp.test(searchInput) === false,
      selectFilter, searchInput,
    );

    if (!selectType) { errors.push({ message: 'Search type cannot be empty!' }); }
    if (!selectFilter && searchInput !== '') { errors.push({ message: 'Filter cannot be empty while searching with an input!' }); }
    if (!searchInput && selectFilter !== '') {
      errors.push({ message: 'Search input field cannot be empty while searching with filters!' });
    }

    const preparedUnorderedListOfErrors = `<ul> ${errors.map((error: ErrorObject) => `<li> ${error.message} </li>`)} </ul>`;

    console.log(errors);

    if (errors && errors.length > 0) {
      MySwal.fire({
        title: 'Some error(s) occured!',
        icon: 'error',
        html: `<p> Please, fix the error(s) bellow before continue your search: </p> ${preparedUnorderedListOfErrors}`,
      });
      return false;
    }
    return true;
  },
  swalDefaultError: (error: any, searchInput: string) => {
    console.log(error.response.status);
    if (error && error.response.status === 404) {
      MySwal.fire({
        title: 'Not found!',
        text: `No data was found with your search input of "${searchInput}".`,
      });
    } else if (error && error.response.status === 500) {
      MySwal.fire({
        title: 'Internal server error!',
        html: 'An internal server error occured. Please, report this clicking <strong><a style="color: cyan;" target="_blank" href="https://github.com/gughog/smtivtools-backend/issues">HERE</a></strong>.',
      });
    }
  },
});

export const Api = Object.freeze({
  // Here is properties q-:
});
