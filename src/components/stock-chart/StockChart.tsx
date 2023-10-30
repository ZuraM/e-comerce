import React, { FC } from 'react';
import { Pie } from 'react-chartjs-2';

import styles from './StockChart.module.scss';
import { Product } from '../../interfaces/product';

interface IStockChart {
  data: Product;
}

const StockChart: FC<IStockChart> = ({ data }) => {
  const chartData = {
    labels: ['In stock', 'Out of stocks'],
    datasets: [
      {
        label: 'Stock',
        data: [data.count, data.sold],
        backgroundColor: ['#4373c3', '#eb7b31'],
        borderColor: ['#3a67b1', '#3a67b1'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Pie data={chartData} />
    </div>
  );
};

export default StockChart;
