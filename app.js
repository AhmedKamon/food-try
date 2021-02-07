const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailContent = document.querySelector(".meal-detail-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

// add event listaner
searchBtn.addEventListener("click", getMealList);
mealList.addEventListener("click", getMealRecipe)



// getMealList
function getMealList() {
   let searchInput = document.getElementById("search-input").value.trim();
   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
   .then(response => response.json())
   .then(data => {
       let html = "";
       if(data.meals){
           data.meals.forEach(meals => {
               html += `
               <div class="meal-item" data-id="${meals.idMeal}">
               <div class="meal-img">
                   <img src="${meals.strMealThumb}" alt="food">
               </div>
               <div class="meal-name">
                <h3>${meals.strMeal}</h3>
                <a href="#" class="recipe-btn">view more</a>
               </div>
           </div>
               `;
           });
       } else{
           html = "your are going to have today";
        //    mealList.classList.add("notFound");
           
       }
       mealList.innerHTML = html;
   });
}

// recipe




