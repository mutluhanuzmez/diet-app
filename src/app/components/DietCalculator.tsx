'use client'
// DietCalculator.js
import React, { useState } from 'react';
import MealTable from './MealTable';

const DietCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male'); // Default to male
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [bmr, setBMR] = useState('');

  const calculateDiet = () => {
    // Perform your diet calculation logic here

    // Convert height to centimeters for BMR calculation
    const heightInCm = parseFloat(height);

    // Harris-Benedict equation for BMR calculation
    const bmrFormula =
      gender === 'male'
        ? 66 + 13.7 * parseFloat(weight) + 5 * heightInCm - 6.8 * parseFloat(age)
        : 655 + 9.6 * parseFloat(weight) + 1.8 * heightInCm - 4.7 * parseFloat(age);

    const calculatedBMR = bmrFormula;

    // Basic protein calculation
    const calculatedProtein = parseFloat(weight) * 0.8;

    setBMR(calculatedBMR.toFixed(2));
    // Assuming a simple calorie calculation for illustration
    setCalories((calculatedBMR * 1.2).toFixed(2));
    setProtein(calculatedProtein.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Diet Calculator</h1>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-600">
            Weight (in kg):
          </label>
          <input
            type="number"
            className="w-full border p-2 rounded bg-gray-100 text-gray-800 border-gray-300"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-600">
            Height (in cm):
          </label>
          <input
            type="number"
            className="w-full border p-2 rounded bg-gray-100 text-gray-800 border-gray-300"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-600">
            Age:
          </label>
          <input
            type="number"
            className="w-full border p-2 rounded bg-gray-100 text-gray-800 border-gray-300"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-600">
            Gender:
          </label>
          <select
            className="w-full border p-2 rounded bg-gray-100 text-gray-800 border-gray-300"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={calculateDiet}
        >
          Calculate
        </button>
        <div className="mt-4">
          <p className="text-sm text-gray-600">BMR: {bmr} kcal/day</p>
          <p className="text-sm text-gray-600">Calories: {calories} kcal/day</p>
          <p className="text-sm text-gray-600">Protein: {protein} g/day</p>
        </div>
      </div>
      {/* Add the MealTable component on the right side */}
      {calories && <MealTable calories={parseFloat(calories)} />}
    </div>
  );
};

export default DietCalculator;
