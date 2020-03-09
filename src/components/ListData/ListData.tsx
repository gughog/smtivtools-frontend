import React from 'react';
import styles from './ListData.module.css';
import icon from '../../assets/devil.png';

interface DataProps {
  results: object[];
}

const ListData: React.FC<DataProps> = (props: DataProps) => {
  const { results } = props;

  const noDataMessage = (): JSX.Element => (
    <div className={styles.listData__icon}>
      <h2>No data</h2>
      <img width="200" height="200" src={icon} alt="Devil icon" />
    </div>
  );

  const tableData = (): JSX.Element => (
    <div className={styles.listData__table_container}>
      <table className={styles.listData__table}>
        <tr>
          <th> id </th>
          <th> lvl </th>
          <th> name </th>
          <th> race </th>
          <th> hp </th>
          <th> mp </th>
          <th> st </th>
          <th> dx </th>
          <th> ma </th>
          <th> ag </th>
          <th> lu </th>
          <th> phys </th>
          <th> gun </th>
          <th> fire </th>
          <th> ice </th>
          <th> elec </th>
          <th> force </th>
          <th> light </th>
          <th> dark </th>
        </tr>

        <tr>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
          <td> XXX </td>
        </tr>
      </table>
    </div>
  );

  return (
    <>
      {
        results && results.length > 1
          ? noDataMessage()
          : tableData()
      }
    </>
  );
};

export default ListData;
