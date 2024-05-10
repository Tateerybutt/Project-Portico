document.addEventListener('DOMContentLoaded', function() {
    const workoutForm = document.getElementById('workout-form');
    const workoutList = document.getElementById('workout-list');
    const nutritionForm = document.getElementById('nutrition-form');
    const mealList = document.getElementById('meal-list');
    let totalCaloriesBurned = 0;
    let totalCaloriesIntake = 0;

    // Load workouts and meals from local storage on page load
    loadFromLocalStorage();

    // Function to load workouts and meals from local storage
    function loadFromLocalStorage() {
        const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        const storedMeals = JSON.parse(localStorage.getItem('meals')) || [];

        storedWorkouts.forEach(workout => {
            addWorkoutItem(workout.name, workout.duration);
        });

        storedMeals.forEach(meal => {
            addMealItem(meal.name, meal.calories);
        });
    }

    // Function to save workouts and meals to local storage
    function saveToLocalStorage() {
        const workouts = Array.from(workoutList.children).map(item => ({
            name: item.innerText.split(' - ')[0],
            duration: parseInt(item.innerText.split(' - ')[1].split(' ')[0])
        }));

        const meals = Array.from(mealList.children).map(item => ({
            name: item.innerText.split(' - ')[0],
            calories: parseInt(item.innerText.split(' - ')[1].split(' ')[0])
        }));

        localStorage.setItem('workouts', JSON.stringify(workouts));
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    // Function to add a workout item
    function addWorkoutItem(workoutName, workoutDuration) {
        const workoutItem = document.createElement('li');
        const dateTime = new Date().toLocaleString();
        workoutItem.innerHTML = `${workoutName} - ${workoutDuration} minutes <button class="delete-btn"><i class="fas fa-trash"></i></button><br><small>${dateTime}</small>`;
        workoutList.appendChild(workoutItem);
        const caloriesBurned = workoutDuration * 10; // Assuming 10 calories burned per minute
        totalCaloriesBurned += caloriesBurned;
        updateTotalCalories();
        addDeleteListener(workoutItem, caloriesBurned, 'workout');
        saveToLocalStorage(); // Save to local storage after adding a workout
    }

    // Function to add a meal item
    function addMealItem(mealName, calories) {
        const mealItem = document.createElement('li');
        const dateTime = new Date().toLocaleString();
        mealItem.innerHTML = `${mealName} - ${calories} calories <button class="delete-btn"><i class="fas fa-trash"></i></button><br><small>${dateTime}</small>`;
        mealList.appendChild(mealItem);
        totalCaloriesIntake += calories;
        updateTotalCalories();
        addDeleteListener(mealItem, calories, 'meal');
        saveToLocalStorage(); // Save to local storage after adding a meal
    }

    // Function to update total calories display
    function updateTotalCalories() {
        document.getElementById('total-calories-burned').textContent = `Total Calories Burned: ${totalCaloriesBurned}`;
        document.getElementById('total-calories-intake').textContent = `Total Calories Intake: ${totalCaloriesIntake}`;
    }

    // Function to add a delete listener to an item
    function addDeleteListener(item, calories, type) {
        const deleteBtn = item.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            if (type === 'workout') {
                totalCaloriesBurned -= calories;
            } else {
                totalCaloriesIntake -= calories;
            }
            updateTotalCalories();
            item.remove();
            saveToLocalStorage(); // Save to local storage after deleting an item
        });
    }

    // Event listener for submitting a workout form
    workoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const workoutName = document.getElementById('workout-name').value;
        const workoutDuration = parseInt(document.getElementById('workout-duration').value);
        addWorkoutItem(workoutName, workoutDuration);
        workoutForm.reset();
    });

    // Event listener for submitting a nutrition form
    nutritionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const mealName = document.getElementById('meal-name').value;
        const calories = parseInt(document.getElementById('calories').value);
        addMealItem(mealName, calories);
        nutritionForm.reset();
    });
});