import React, { FC, Fragment } from 'react';

import styles from './DataTable.module.scss';
import Header from './Header';
import Button from '../button/Button';
import StockChart from '../stock-chart/StockChart';

interface IDataTable {
  data: Array<any>;
  columns: Array<any>;
  onRowClick: (row: any) => void;
  onFiltersClick: () => void;
  onActionClick: (row: any) => void;
}

const DataTable: FC<IDataTable> = ({
  columns,
  data,
  onRowClick,
  onFiltersClick,
  onActionClick,
}) => {
  return (
    <div className={styles.container}>
      <Header onFilterClick={onFiltersClick} />
      <table className={styles.dataTable}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={`column-${index}`}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((cell: any, index) => (
            <tr key={`row-${index}`}>
              {columns.map((column, index) => (
                <Fragment key={`layout-${index}`}>
                  {column.stats ? (
                    <td key={`chart-${index}`}>
                      <StockChart data={cell} />
                    </td>
                  ) : column.action ? (
                    <td key={`button-${index}`}>
                      <Button
                        fitContent
                        disabled={column.isDisabled(cell)}
                        onClick={() => onActionClick(cell)}
                        text={column.actionText}
                      />
                    </td>
                  ) : (
                    <td key={`cell-${index}`} onClick={() => onRowClick(cell)}>
                      {column.renderer
                        ? column.renderer(cell)
                        : cell[column.dataIndex]}
                    </td>
                  )}
                </Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
