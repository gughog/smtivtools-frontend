import React, { useState } from 'react';
import axios from 'axios';
import { SearchForm, ListData } from '../../components';
import styles from './Home.module.css';

const Home: React.FC = () => {
  // Interfaces
  interface HomeData {
    selectType: string;
    searchInput: string;
    selectFilter: string;
    searchData: object[];
  }

  // Hooks:
  const [data, setData] = useState<HomeData>({
    selectType: 'demons',
    searchInput: '',
    selectFilter: '',
    searchData: [],
  });

  const onChangeHandler = (e: any): void => {
    const { value } = e.target;
    const { name } = e.target;

    setData({ ...data, [name]: value });
    console.log(value);
  };

  const getData = async () => {
    const api = axios.create({ baseURL: 'https://smtiv-tools-rest-api.herokuapp.com/api/v1' });

    api.get('/apps')
      .then((response) => {
        setData({ ...data, searchData: response.data.data });
        console.log(data);
      })
      .catch((error) => console.log(error));

    console.log(data);
  };

  // JSX:
  return (
    <main className={styles.home_container}>
      <section className={styles.home__mainScreen}>
        <h1> SMTIV Tools App </h1>
        <p>Welcome to the SMTIV Tools App, where hunters gather!</p>
        <hr />
        <SearchForm
          selectType={data.selectType}
          selectFilter={data.selectFilter}
          searchInput={data.searchInput}
          handleChange={onChangeHandler}
          fetchMethod={getData}
        />
      </section>

      <section className={styles.home__resultScreen}>
        <ListData results={data.searchData} />
      </section>
    </main>
  );
};

export default Home;
