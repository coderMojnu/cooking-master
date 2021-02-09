const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => {
            document.getElementById('not-found').innerText = "Not Found!";
        });
}
const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';

        const mealName = meal.strMeal;
        const mealImage = meal.strMealThumb;

        const mealInfo = `
                <div onclick="displayMealDetails('${mealName}')">
                <img class="meal-image" src="${mealImage}">
                <h3 class="meal-name">${meal.strMeal}</h3>
                </div>
                `;

        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);

    });
}

const displayMealDetails = name => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals[0]));
}

const renderMealInfo = meal => {
    const mealDiv = document.getElementById("meal-details");

    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <li>${meal.strIngredient1}</li> 
        <li>${meal.strIngredient2}</li> 
        <li>${meal.strIngredient3}</li> 
        <li>${meal.strIngredient4}</li> 
        <li>${meal.strIngredient5}</li> 
        <li>${meal.strIngredient6}</li> 
        <li>${meal.strIngredient7}</li> 
        <li>${meal.strIngredient8}</li> 
        <li>${meal.strIngredient9}</li> 
        <li>${meal.strIngredient10}</li> 
        
    `;
    mealDiv.className = 'center';
};