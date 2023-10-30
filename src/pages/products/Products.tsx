import React, { useEffect } from 'react';
import DataTable from '../../components/data-table/DataTable';
import productData from '../../data/products.json';
import {
  useFilters,
  useProductActions,
  useProducts,
  useSelectedProduct,
} from '../../store/useProduct';
import styles from './Products.module.scss';
import { Product } from '../../interfaces/product';
import ImageViewer from '../../components/image-viewer/ImageViewer';
import Filters from '../../components/filters/Filters';
import { columns } from './columns';

const Products = () => {
  const { setProducts, setSelectedProduct, toggleFilters, updateProducts } =
    useProductActions();
  const products = useProducts();
  const selectedProduct = useSelectedProduct();
  const filtersVisible = useFilters();

  useEffect(() => {
    setProducts(productData.data as any);
  }, [setProducts]);

  const onRowClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const onFiltersClick = () => {
    toggleFilters(!filtersVisible);
  };

  const onActionClick = (product: Product) => {
    updateProducts(product);
  };

  return (
    <div className={styles.container}>
      {filtersVisible && (
        <div className={styles.filterContainer}>
          <Filters />
        </div>
      )}
      <div className={styles.tableContainer}>
        <DataTable
          data={products}
          columns={columns}
          onRowClick={onRowClick}
          onFiltersClick={onFiltersClick}
          onActionClick={onActionClick}
        />
      </div>
      {selectedProduct && (
        <div className={styles.imageContainer}>
          <ImageViewer imageUrl={selectedProduct?.imageUrl} />
        </div>
      )}
    </div>
  );
};

export default Products;
