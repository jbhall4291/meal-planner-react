
function Food({ food }) {



    return (
        <div className="bg-gray-50 flex flex-row justify-between p-2 m-2">
            <p className="w-20">{food.content}</p>
            <p>{food.calories}</p>
        </div>
    )
}

export default Food