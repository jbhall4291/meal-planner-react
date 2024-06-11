import './App.css'
import { initialData } from './initial-data'
import { useState } from 'react';
import Column from './Column';

function App() {

  const [state, setState] = useState(initialData);


  return (
    <>

      {state.columnOrder.map((columnId => {

        const column = state.columns[columnId];
        const foods = column.foodIds.map(foodId => state.foods[foodId]);

        return <Column key={column.id} column={column} foods={foods} />

      }))}
    </>
  )
}

export default App