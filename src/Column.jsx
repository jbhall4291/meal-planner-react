import './App.css'
import Food from './Food'

function Column({ key, column, foods }) {

    const totalCalories = foods.reduce((total, food) => total + food.calories, 0);


    return (
        <div className=" m-2 border-black border-2 w-60 flex flex-col justify-items-center">
            <h3 className="p-2 bg-green-50 text-center">{column.title}</h3>
            <div className="p-2">
                {foods.map(food => <Food key={food.id} food={food} />)}
            </div>

            <div className="p-2 bg-red-50 flex flex-row justify-around">
                <p>TOTAL CALS:</p>
                <p>{totalCalories}</p>
            </div>
        </div>
    )
}

export default Column