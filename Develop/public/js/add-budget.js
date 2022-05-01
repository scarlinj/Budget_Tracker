const handleBudgetSubmit = event => {
    event.preventDefault();

    const budgetName = $budgetForm.querySelector('#budget-name').value;
    const createdBy = $budgetForm.querySelector('#created-by').value;
    // const size = $budgetForm.querySelector('#budget-size').value;
    // const toppings = [...$budgetForm.querySelectorAll('[name=topping]:checked')].map(topping => {
    //   return topping.value;
    // });

    if (!budgetName || !createdBy) {
        return;
    }
    //   include above consts in the below array
    const formData = {
        budgetName,
        createdBy
    };

    fetch('/api/budgets', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(postResponse => {
            console.log(postResponse);
        })
        .catch(err => {
            console.log(err);
            saveRecord(formData);
        });
};

$budgetForm.addEventListener('submit', handleBudgetSubmit);
//   $addToppingBtn.addEventListener('click', handleAddTopping);