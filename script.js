// Page Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hidden');
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('nav a').forEach(link => link.classList.toggle('dark-mode'));
  });
}

// Meal Plans: Calculate Total Calories
document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('calculate-button');
  const calorieResult = document.getElementById('calorie-result');

  if (calculateButton && calorieResult) {
    calculateButton.addEventListener('click', () => {
      const selectedMeals = document.querySelectorAll('.meal-item input:checked');
      let totalCalories = 0;

      selectedMeals.forEach(meal => {
        const calories = parseInt(meal.dataset.calories) || 0;
        totalCalories += calories;
      });

      calorieResult.textContent = `Total Calories: ${totalCalories}`;
    });
  }
});

// Optional: Recipe Search
function searchRecipes(query) {
  const recipes = document.querySelectorAll('.recipe-item h3');
  recipes.forEach(recipe => {
    if (recipe.textContent.toLowerCase().includes(query.toLowerCase())) {
      recipe.parentElement.style.display = 'block';
    } else {
      recipe.parentElement.style.display = 'none';
    }
  });
}
