import { create } from 'zustand';
import { Product } from '../interfaces/product';

interface IProductStore {
  products: Product[];
  selectedProduct: Product | null;
  filtersVisible: boolean;
  actions: {
    setProducts: (products: Product[]) => void;
    setSelectedProduct: (product: Product) => void;
    toggleFilters: (visible: boolean) => void;
    updateProducts: (product: Product) => void;
  };
}

const useProductStore = create<IProductStore>((set) => ({
  products: [],
  selectedProduct: null,
  filtersVisible: false,
  actions: {
    setProducts: (products) => set({ products }),
    setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
    toggleFilters: (visible) => set({ filtersVisible: visible }),
    updateProducts: (product) =>
      set((state) => {
        if (product.count === 0) {
          return state;
        }

        const currentProducts = [...state.products];
        const productToUpdate = currentProducts.findIndex(
          (p) => p.id === product.id
        );
        currentProducts[productToUpdate].count -= 1;
        currentProducts[productToUpdate].sold += 1;

        return {
          ...state,
          products: currentProducts,
        };
      }),
  },
}));

export const useProducts = () => useProductStore((state) => state.products);
export const useFilters = () =>
  useProductStore((state) => state.filtersVisible);
export const useSelectedProduct = () =>
  useProductStore((state) => state.selectedProduct);

// 🚀 Actions
export const useProductActions = () =>
  useProductStore((state) => state.actions);
