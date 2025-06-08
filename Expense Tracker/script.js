let expenses = [];
let categories = ['Food', 'Transport', 'Entertainment', 'Utilities'];
const err = document.getElementById('errmsg');

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (description && !isNaN(amount) && category) {
        const expense = { description, amount, category };
        expenses.push(expense);
        displayExpenses();
        updateSummary();
        err.innerHTML = ''; // Clear error msg

        // Clear inputs
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('category').value = 'Food';
    } else {
        err.innerHTML = 'Please fill in all fields!';
    }
}


// Function to display expenses
function displayExpenses() {
    const expensesList = document.getElementById('expenses-list');
    expensesList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('expense-item');
        listItem.innerHTML = `
      <strong>${expense.description}</strong> - $${expense.amount} (${expense.category})
    `;
        expensesList.appendChild(listItem);
    });
}

// Function to update summary
function updateSummary() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
}

// Function to add a new category
function addNewCategory() {
    const newCategory = document.getElementById('newCategoryInput').value;
    if (newCategory) {
        categories.push(newCategory);
        updateCategoryDropdown();
        closeModal();
    }
}

// Function to update category dropdown options
function updateCategoryDropdown() {
    const categoryDropdown = document.getElementById('category');
    categoryDropdown.innerHTML = '';
    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });
}

// JavaScript code remains the same
// Function to open the modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
updateCategoryDropdown();
