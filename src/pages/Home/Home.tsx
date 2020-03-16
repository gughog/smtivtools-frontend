import React, { useState } from 'react';
import axios from 'axios';
import { SearchForm, MemoListData, DefaultLoading } from '../../components';
import {
  MainContainer,
  MainSectionForm,
  MainSectionResults,
  FloatingButton,
} from './styled.components';
import { Utils } from '../../utils/utils';
import { LoaderContainer } from '../../components/ListData/styled.components';

const Home: React.FC = () => {
  // Interfaces
  interface HomeData {
    selectType: string;
    searchInput: string;
    selectFilter: string;
    searchData: object[];
  }

  interface PropsData {
    selectType: string;
    searchInput: string;
    selectFilter: string;
  }

  // Hooks:
  const [data, setData] = useState<HomeData>({
    selectType: 'demons',
    searchInput: '',
    selectFilter: '',
    searchData: [],
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onChangeHandler = (e: any): void => {
    const { value } = e.target;
    const { name } = e.target;

    setData({ ...data, [name]: value });
    console.log(value);
  };

  const getData = async (): Promise<void> => {
    const { selectType, searchInput, selectFilter } = data;
    const api = axios.create({ baseURL: 'https://smtiv-tools-rest-api.herokuapp.com/api/v1' });

    const endpoint = `/${selectType}${selectFilter ? `?${selectFilter}=${searchInput}` : ''}`;

    // set loading on (if on mobile, scrolls to list):
    setLoading(true);
    if (window.innerWidth <= 768) {
      Utils.scrollIntoElement('results');
    }

    api.get(endpoint)
      .then((response) => {
        // Append data and set loading off:
        setData({ ...data, searchData: response.data.data });
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(error); // temporary. change later to another error alert.
      });
  };

  const resetHandler = (): void => {
    setData({
      selectType: 'demons',
      searchInput: '',
      selectFilter: '',
      searchData: [],
    });

    console.info(':: Resetted! ');
  };

  // JSX:
  return (
    <MainContainer>
      <MainSectionForm id="mainForm">
        <h1 id="title"> SMTIV Tools App </h1>
        <p>Welcome to the SMTIV Tools App, where hunters gather!</p>
        <hr />
        <SearchForm
          selectType={data.selectType}
          selectFilter={data.selectFilter}
          searchInput={data.searchInput}
          handleChange={onChangeHandler}
          resetHandler={resetHandler}
          fetchMethod={getData}
        />
      </MainSectionForm>

      <MainSectionResults id="results">
        {
          loading
            ? (
              <LoaderContainer>
                <DefaultLoading />
              </LoaderContainer>
            )
            : (
              <MemoListData results={data.searchData} />
            )
        }
      </MainSectionResults>

      <FloatingButton onClick={() => Utils.scrollIntoElement('title')}>
        ▲
      </FloatingButton>
    </MainContainer>
  );
};

export default Home;
