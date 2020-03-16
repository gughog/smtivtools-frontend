/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Utils } from '../../utils/utils';
import {
  SubmitButton,
  Separator,
  LabelText,
  TextInput,
  Select,
  TextLink,
  TextFooter,
} from '../shared';

interface FormProps {
  selectType: string;
  selectFilter: string;
  searchInput: string;
  handleChange?: (e: any) => void;
  fetchMethod?: () => void;
  resetHandler?: () => void;
}

const filters: any = {
  demons: ['name', 'lvl', 'race'],
  skills: ['name', 'MP', 'type', 'effect'],
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
    resetHandler,
  } = props;

  return (
    <>
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
          <LabelText> Filter by: </LabelText>
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
            type={selectFilter === 'MP' || selectFilter === 'lvl' ? 'number' : 'text'}
            value={searchInput}
            onChange={handleChange}
            placeholder={Utils.handlePlaceholder(selectType, selectFilter)}
            onKeyUp={(e) => Utils.onKeyEnter(e, fetchMethod)}
          />
        </label>

        <Separator>
          <span>. . . </span>
        </Separator>

        <SubmitButton type="button" onClick={fetchMethod}>
          :: Search ::
        </SubmitButton>

        <TextLink onClick={resetHandler}>
          Reset filters
        </TextLink>
      </form>

      <TextFooter>
        Made by
        {' '}
        <a href="https://github.com/gughog"> Gustavo Oliveira </a>
        ,
        {' '}
        {
          new Date().getFullYear()
        }
      </TextFooter>
    </>
  );
};

export default SearchForm;
