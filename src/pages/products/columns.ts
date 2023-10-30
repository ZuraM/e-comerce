import { Stock } from '../../interfaces/product';

export const columns = [
  {
    name: 'Product Name',
    dataIndex: 'productName',
  },
  {
    name: 'Company',
    dataIndex: 'company',
  },
  {
    name: 'Color',
    dataIndex: 'color',
  },
  {
    name: 'In stock',
    dataIndex: 'inStock',
    renderer: (row: any) => {
      return row.count ? Stock.IN_STOCK : Stock.OUT_OF_STOCK;
    },
  },
  {
    name: 'Price',
    dataIndex: 'price',
  },
  {
    name: 'Count',
    dataIndex: 'count',
  },
  {
    name: '# Reviews',
    dataIndex: 'reviews',
  },
  {
    name: 'Seller Location',
    dataIndex: 'sellerLocation',
  },
  {
    name: 'Additional',
    action: true,
    actionText: 'buy',
    isDisabled: (row: any) => {
      return row.count === 0;
    },
  },
  {
    name: 'Stats',
    stats: true,
  },
];
