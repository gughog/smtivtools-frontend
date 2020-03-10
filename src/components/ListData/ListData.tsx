/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ListData.module.css';
import icon from '../../assets/devil.png';

interface DataProps {
  results: object[];
}

const ListData: React.FC<DataProps> = (props: DataProps) => {
  const { results } = props;

  // JSX fragment for "no data"
  const noDataMessage = (): JSX.Element => (
    <div className={styles.listData__icon}>
      <h2>No data</h2>
      <img width="200" height="200" src={icon} alt="Devil icon" />
    </div>
  );

  // JSX fragment for list rendering
  const tableRender = (): JSX.Element => {
    const queryKeys = Object.keys(results[0]);
    return (
      // Maps the table headers
      <>
        <thead>
          <tr>
            {
              queryKeys.map((key) => (
                <th key={key}>
                  { key }
                </th>
              ))
            }
          </tr>
        </thead>

        {/* // Maps the table rows */}
        <tbody>
          {
            results.map((row: any) => (
              <tr key={row.id}>
                {
                  Object.values(row).map((tabledata: any) => (
                    <td key={Math.random()}>
                      { tabledata }
                    </td>
                  ))
                }
              </tr>
            ))
          }

        </tbody>
      </>
    );
  };

  const tableData = (): JSX.Element => (
    <div className={styles.listData__table_container}>
      <table className={styles.listData__table}>
        { tableRender() }
      </table>
    </div>
  );

  return (
    <>
      {
        results && results.length < 1
          ? noDataMessage()
          : tableData()
      }
    </>
  );
};

export default ListData;
