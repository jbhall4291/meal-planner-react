export const initialData = {
    foods: {
        'food-1': { id: 'food-1', content: 'Banana', calories: 100 },
        'food-2': { id: 'food-2', content: 'Bowl of cereal', calories: 250 },
        'food-3': { id: 'food-3', content: 'Milk', calories: 150 }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Breakfast',
            foodIds: ['food-1', 'food-2', 'food-3']
        },

    },
    columnOrder: ['column-1']
}