import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityActions";

const { getCitiesFilter, getCities } = cityActions;

const initialState = {
  value: "",
  cities: [],
  categories: [],
  continent: [],
};

const cityReducer = createReducer(initialState, (builder) => { //builder de las actions que va a recibir
  builder.addCase(getCities.fulfilled, (state, action) => {
    let allcities = action.payload.cities.map((city)=>city.continent)
    let eachContinent = [...new Set(allcities)]
    return {
        ...state,
        cities: action.payload.cities,
        categories: eachContinent
    }
})
    .addCase(getCitiesFilter.fulfilled, (state, action) => {//fulfilled es un estado
      return {
        ...state,
        ...action.payload,
      };
    });
});

export default cityReducer;
