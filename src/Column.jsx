import './App.css'
import Food from './Food'
import { Droppable } from 'react-beautiful-dnd';

function Column({ column, foods }) {

    const totalCalories = foods.reduce((total, food) => total + food.calories, 0);


    return (

        <div className=" m-2 border-black border-2 w-100 flex flex-col justify-items-center">
            <h3 className="p-2 bg-green-50 text-center">{column.title}</h3>

            <Droppable droppableId={column.id}>
                {provided => {
                    return (
                        <div className="p-2"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {foods.map((food, index) => <Food key={food.id} food={food} index={index} />)}
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>

            <div className="p-2 bg-red-50 flex flex-row justify-around">
                <p>TOTAL CALS:</p>
                <p>{totalCalories}</p>
            </div>
        </div>

    )
}

export default Column