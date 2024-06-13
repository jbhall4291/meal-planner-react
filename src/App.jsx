import './App.css'
import { initialData } from './initial-data'
import { useState } from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  const [state, setState] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId]
    const newFoodIds = Array.from(column.foodIds)
    newFoodIds.splice(source.index, 1)
    newFoodIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      foodIds: newFoodIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      }
    }

    setState(newState)

  };

  return (
    <>
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={() => console.log(`trying to drag...`)}
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