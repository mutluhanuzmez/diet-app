// MealTable.js
import React from 'react';

const MealTable = ({ calories }) => {
    const breakfastOptions = ['Menemen', 'Simit', 'Sucuklu Yumurta', 'Peynirli Börek'];
    const lunchOptions = ['Kısır', 'Döner Kebab', 'Hünkar Beğendi', 'Lahmacun'];
    const dinnerOptions = ['İskender Kebab', 'Karnabahar Kızartması', 'Balık Tava', 'Manti'];

    const getRandomMeal = (row, remainingCalories) => {
        const mealOptions =
            row === 0 ? breakfastOptions : row === 1 ? lunchOptions : dinnerOptions;

        const selectedMeal = getRandomOption(mealOptions);

        const maxCalories = Math.min(remainingCalories, 500);
        const mealCalories = Math.floor(Math.random() * maxCalories) + 1;

        return { meal: selectedMeal, calories: mealCalories, type: row };
    };

    const getRandomOption = (options) => {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    };

    let totalCalories = 0;

    const breakfastMeal = getRandomMeal(0, calories - totalCalories);
    totalCalories += breakfastMeal.calories;

    const lunchMeal = getRandomMeal(1, calories - totalCalories);
    totalCalories += lunchMeal.calories;

    const dinnerMeal = getRandomMeal(2, calories - totalCalories);
    totalCalories += dinnerMeal.calories;

    return (
        <div className="flex justify-center">
            <div className="ml-8 bg-gray-800 p-4 rounded">
                <h2 className="text-xl font-bold mb-4 text-white">Meal Plan</h2>
                <table className="w-full border-collapse border border-gray-300 text-white">
                    <thead>
                        <tr className="bg-gray-600">
                            <th className="p-2 border border-gray-300">Meal</th>
                            <th className="p-2 border border-gray-300">Calories</th>
                            <th className="p-2 border border-gray-300">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border border-gray-300">Breakfast</td>
                            <td className="p-2 border border-gray-300">{breakfastMeal.meal}</td>
                            <td className="p-2 border border-gray-300">{breakfastMeal.calories} kcal</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-gray-300">Lunch</td>
                            <td className="p-2 border border-gray-300">{lunchMeal.meal}</td>
                            <td className="p-2 border border-gray-300">{lunchMeal.calories} kcal</td>
                        </tr>
                        <tr>
                            <td className="p-2 border border-gray-300">Dinner</td>
                            <td className="p-2 border border-gray-300">{dinnerMeal.meal}</td>
                            <td className="p-2 border border-gray-300">{dinnerMeal.calories} kcal</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MealTable;
