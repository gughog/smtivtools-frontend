/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Utils } from '../../utils/utils';
import {
  SubmitButton,
  Separator,
  LabelText,
  TextInput,
  Select,
} from '../shared';

interface FormProps {
  selectType: string;
  selectFilter: string;
  searchInput: string;
  handleChange?: (e: any) => void;
  fetchMethod?: () => void;
}

const filters: any = {
  demons: ['name', 'lvl', 'race'],
  skills: ['name', 'MP', 'type', 'description'],
  apps: ['name', 'points', 'requirements', 'description'],
  speciafusions: [],
};

const SearchForm: React.FC<FormProps> = (props: FormProps) => {
  const {
    selectType,
    selectFilter,
    searchInput,
    handleChange,
    fetchMethod,
  } = props;

  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => { e.preventDefault(); }}>
      <label htmlFor="selectType">
        <LabelText> Choose a type search: </LabelText>
        <Select value={selectType} onChange={handleChange} name="selectType" id="selectType">
          <option value="demons">Demons</option>
          <option value="skills">Skills</option>
          <option value="apps">Apps</option>
          <option disabled value="speciafusions">Special Fusions</option>
        </Select>
      </label>

      <label htmlFor="selectFilter">
        <LabelText> Limiter by: </LabelText>
        <Select value={selectFilter} onChange={handleChange} name="selectFilter" id="selectFilter">
          <option disabled value=""> Choose one </option>
          {
            selectType === ''
              ? ''
              : filters[selectType]
                .map((filter: string) => (
                  <option key={filter} value={filter}>{Utils.upperFirstLetter(filter)}</option>
                ))
          }
        </Select>
      </label>

      <label htmlFor="searchInput">
        <LabelText> Type your search: </LabelText>
        <TextInput
          name="searchInput"
          id="searchInput"
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder={Utils.handlePlaceholder(selectType, selectFilter)}
        />
      </label>

      <Separator>
        <span>. . . </span>
      </Separator>

      <SubmitButton type="button" onClick={fetchMethod}>
        :: Search ::
      </SubmitButton>
    </form>
  );
};

export default SearchForm;
