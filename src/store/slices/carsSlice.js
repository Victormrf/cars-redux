import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // We assume that action.payload === { 'name': 'carExample', 'cost': 14000 }
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()   //REDUX toolkit implementation: nanoid
            });
        },
        removeCar(state, action) {
            // We assume that action.payload === the id of the car we want to remove
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;
        },
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;