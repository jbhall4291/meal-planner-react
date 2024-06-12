import { Draggable } from "react-beautiful-dnd"

function Food({ food, index }) {

    return (

        <Draggable draggableId={food.id} index={index}>
            {provided => (
                <div className="bg-gray-50 flex flex-row justify-between p-2 m-2"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}

                >
                    <p className="w-20">{food.content}</p>
                    <p>{food.calories}</p>
                </div>
            )}

        </Draggable>
    )
}

export default Food