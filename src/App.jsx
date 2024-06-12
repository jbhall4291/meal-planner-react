import './App.css'
import { initialData } from './initial-data'
import { useState } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  const [state, setState] = useState(initialData);

  const onDragEnd = () => {
    // TODO reorders the column items
    console.log('element was dropped')
  };

  return (
    <>
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        {state.columnOrder.map((columnId => {

          const column = state.columns[columnId];
          const foods = column.foodIds.map(foodId => state.foods[foodId]);

          return <Column key={column.id} column={column} foods={foods} />

        }))}
      </DragDropContext>
    </>
  )
}

export default App