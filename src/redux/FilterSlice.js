import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],      
  filteredProducts: [],
  filterValues: {
    category: "",
    tag: "",
    offers: "",
    priceRange: [0, 1000],
    search: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload; 
    },
    setFilterValues(state, action) {
      state.filterValues = { ...state.filterValues, ...action.payload };
      
      const { category, tag, offers, priceRange, search } = state.filterValues;

      let filtered = [...state.products];

      if (category) {
        filtered = filtered.filter((p) => p.category.includes(category));
      }
      if (tag) {
        filtered = filtered.filter((p) => p.tag.includes(tag));
      }
      if (offers) {
        filtered = filtered.filter((p) => p.offers === offers);
      }
      if (search) {
        filtered = filtered.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      filtered = filtered.filter((p) => {
        const price = parseFloat(p.price);
        return price >= priceRange[0] && price <= priceRange[1];
      });

      state.filteredProducts = filtered;
    },
    clearFilters(state) {
      state.filterValues = {
        category: "",
        tag: "",
        offers: "",
        priceRange: [0, 1000],
        search: "",
      };
      state.filteredProducts = state.products;
    },
  },
});

export const { setProducts, setFilterValues, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
