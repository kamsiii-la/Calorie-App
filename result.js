const params = new URLSearchParams(window.location.search);

const age = parseInt(params.get('age'));
const sex = params.get('sex');
const currentWeight = parseFloat(params.get('currentWeight'));
const currentHeight = parseFloat(params.get('currentHeight'));
const goalWeight = parseFloat(params.get('goalWeight'));
const activityLevel = params.get('activityLevel');

if(isNaN(age) || !sex || isNaN(currentWeight) || isNaN(currentHeight) || isNaN(goalWeight) || !activityLevel){
    document.body.innerHTML = `<h1>Error</h1>`;
}
else{

    const maintenanceCalories = maintenanceCaloriesCalculator(age, sex, currentWeight, currentHeight, goalWeight, activityLevel);
    const caloriesDeficit = deficitCalculator(age, sex, currentWeight, currentHeight, goalWeight, activityLevel);
    const caloriesSurplus = surplusCalculator(age, sex, currentWeight, currentHeight, goalWeight, activityLevel);

    document.getElementById("Qage").textContent = `Age: ${age}`;
    document.getElementById("Qsex").textContent = `Sex: ${sex}`;
    document.getElementById("Cweight").textContent = `Current Weight: ${currentWeight} kg`;
    document.getElementById("Cheight").textContent = `Current Height: ${currentHeight} cm`;
    document.getElementById("Gweight").textContent = `Goal Weight: ${goalWeight} kg`;
    document.getElementById("ActivityLevel").textContent = `Activity Level: ${activityLevel}`;
    document.getElementById("Qmain").textContent = `Maintenance Calories: ${maintenanceCalories.toFixed(2)}`;
    document.getElementById("Qdef").textContent = `Calorie Deficit: ${caloriesDeficit.toFixed(2)}`;
    document.getElementById("Qsur").textContent = `Calorie Surplus: ${caloriesSurplus.toFixed(2)}`;
}

function maintenanceCaloriesCalculator(age, sex, weight, height, goal, activity){
    let bmr;

    if(sex === 'male'){
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else{
         bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }


    switch(activity){
        case 'Sedentary':
            multiplier = 1.2;
            break;
        case 'Lightly Active':
            multiplier = 1.375;
            break;
        case 'Moderately Active':
            multiplier = 1.55;
            break;
        case 'Very Active':
            multiplier = 1.725;
            break;
        case 'Extra Active':
            multiplier = 1.9;
            break;
    }

        return bmr * multiplier;
}

function deficitCalculator(age, sex, weight, height, goal, activity){
    const maintenance = maintenanceCaloriesCalculator(age, sex, weight, height, goal, activity);
    return maintenance - 500;
}

function surplusCalculator(age, sex, weight, height, goal, activity){
    const maintenance = maintenanceCaloriesCalculator(age, sex, weight, height, goal, activity);
    return maintenance + 300;
}

