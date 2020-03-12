/* eslint-disable react/prop-types */
import React from 'react';
import { LoaderContainer, IconContainer, Table } from './styled.components';
import icon from '../../assets/devil.png';
import { Utils } from '../../utils/utils';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { DefaultLoading } from '../index';

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
        <LoaderContainer>
          <DefaultLoading />
        </LoaderContainer>
      );
    }
    return (
      <IconContainer>
        <h2>No data</h2>
        <img width="200" height="200" src={icon} alt="Devil icon" />
      </IconContainer>
    );
  };

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
    <div>
      <Table>
        { tableRender() }
      </Table>
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
