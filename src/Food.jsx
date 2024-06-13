import { Draggable } from "react-beautiful-dnd"

function Food({ food, index }) {

    return (

        <Draggable draggableId={food.id} index={index}>
            {(provided, snapshot) => (
                <div className={`border-black border-2 flex flex-row justify-between  p-2 m-2 ${snapshot.isDragging ? 'bg-red-500' : 'bg-grey-50'}`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}

                >
                    <p className="">{food.content}</p>
                    <p>{food.calories}</p>
                </div>
            )}

        </Draggable>
    )
}

export default Food