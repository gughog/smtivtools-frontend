import React from 'react';
import styles from './SearchForm.module.css';
import { Utils } from '../../utils/utils';

interface FormProps {
  selectType: string;
  selectFilter: string;
  searchInput: string;
  handleChange?: (e: any) => void;
}

const filters: any = {
  demons: ['name', 'level', 'race'],
  skills: ['name', 'MP', 'type', 'description'],
  apps: ['name', 'points', 'requirements', 'description'],
  speciafusions: [],
};

/**
 * Returns a static string for placeholder for a type passed as parameter.
 * @param type - Type of search
 */
const handlePlaceholder = (type: string): string => {
  if (type === 'skills') { return 'e.g.: "Megido"'; }
  if (type === 'apps') { return 'e.g.: "Demolingual"'; }
  // if (type === 'specialfusions') { return 'e.g.:'; }

  // Default return:
  return 'e.g.: "Minotaur"';
};

const SearchForm: React.FC<FormProps> = (props: FormProps) => {
  const {
    selectType,
    selectFilter,
    searchInput,
    handleChange,
  } = props;

  return (
    <form>
      <label htmlFor="selectType">
        <h3> Choose a type search: </h3>
        <select value={selectType} onChange={handleChange} name="selectType" className={styles.form__typeLabel} id="selectType">
          <option value="demons">Demons</option>
          <option value="skills">Skills</option>
          <option value="apps">Apps</option>
          <option disabled value="speciafusions">Special Fusions</option>
        </select>
      </label>

      <label htmlFor="searchInput">
        <h3> Type your search: </h3>
        <input
          className={styles.form__searchInput}
          name="searchInput"
          id="searchInput"
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder={handlePlaceholder(selectType)}
        />
      </label>

      <label htmlFor="selectFilter">
        <h3> Search by: </h3>
        <select value={selectFilter} onChange={handleChange} name="selectFilter" className={styles.form__typeLabel} id="selectFilter">
          {
            selectType === ''
              ? ''
              : filters[selectType]
                .map((filter: string) => (
                  <option key={filter} value={filter}>{Utils.upperFirstLetter(filter)}</option>
                ))
          }
        </select>
      </label>

      <input className={styles.form__button} type="button" value="Search" />
    </form>
  );
};

export default SearchForm;
