/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ListData.module.css';
import icon from '../../assets/devil.png';
import { Utils } from '../../utils/utils';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { DefaultLoading } from '../index';
// <DefaultLoading />

interface DataProps {
  results: object[];
  loading: boolean;
}

interface PropsData {
  selectType: string;
  searchInput: string;
  selectFilter: string;
}

const ListData: React.FC<DataProps> = (props: DataProps) => {
  const { results, loading } = props;

  // JSX fragment for "no data"
  const noDataMessage = (): JSX.Element => {
    if (loading) {
      return (
        <div className={styles.listData__loader}>
          <DefaultLoading />
        </div>
      );
    }
    return (
      <div className={styles.listData__icon}>
        <h2>No data</h2>
        <img width="200" height="200" src={icon} alt="Devil icon" />
      </div>
    );
  };

  // JSX fragment for list rendering
  const tableRender = (): JSX.Element => {
    // Mapping results without field 'ID'. This is necessary to make
    // Tables always automatic generated, instead of return a different
    // Table format to different types of query from API.
    const queryData = results.map(({ id, ...data }: Record<string, any>) => data);

    return (
      // Maps the table headers
      <>
        <thead>
          <tr>
            {
              Object.keys(queryData[0])
                .map((key: string) => (
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
            queryData.map((row: any) => (
              <tr key={row.id}>
                {
                  Object.values(row).map((tabledata: any) => (
                    <td className={Utils.classColorHandler(tabledata)} key={Math.random()}>
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
