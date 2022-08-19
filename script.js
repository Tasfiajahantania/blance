document.getElementById('btn-calculate').addEventListener('click', function () {
    const incomeBlanceField = document.getElementById('income');
    const incomeBlanceString = incomeBlanceField.value;
    const incomeBlance = parseFloat(incomeBlanceString);

    const foodBlanceField = document.getElementById('food');
    const foodBlanceString = foodBlanceField.value;
    const foodBlance = parseFloat(foodBlanceString);

    const rentBlanceField = document.getElementById('rent');
    const rentBlanceString = rentBlanceField.value;
    const rentBlance = parseFloat(rentBlanceString);

    const clothBlanceField = document.getElementById('cloth');
    const clothBlanceString = clothBlanceField.value;
    const clothBlance = parseFloat(clothBlanceString);
    

    const totalCost = foodBlance + rentBlance + clothBlance;
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalCost;


    const currentBlance = incomeBlance - totalCost;
    const currentBlanceElement = document.getElementById('blance');
    currentBlanceElement.innerText = currentBlance;


})