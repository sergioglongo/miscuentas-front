import { ListsSlice, StoreSlice } from "../types";

export const createListsSlice: StoreSlice<ListsSlice> = (set) => ({
  areasList: [],
  categoriesList: [],
  accountsList: [],
  payMethodsList: [],
  unitsList: [],
  setAreasList: (areasList) =>
    set(
      (state) => ({
        lists: {
          ...state.lists,
          areasList,
        },
      }),
      false,
      "lists/setAreasList"
    ),
  setCategoriesList: (categoriesList) =>
    set(
      (state) => ({
        lists: {
          ...state.lists,
          categoriesList,
        },
      }),
      false,
      "lists/setCategoriesList"
    ),
  setAccountsList: (accountsList) =>
    set(
      (state) => ({
        lists: {
          ...state.lists,
          accountsList,
        },
      }),
      false,
      "lists/setAccountsList"
    ),
  setPayMethodsList: (payMethodsList) =>
    set(
      (state) => ({
        lists: {
          ...state.lists,
          payMethodsList,
        },
      }),
      false,
      "lists/setPayMethodsList"
    ),
  setUnitsList: (unitsList) =>
    set(
      (state) => ({
        lists: {
          ...state.lists,
          unitsList,
        },
      }),
      false,
      "lists/setUnitsList"
    ),
});
