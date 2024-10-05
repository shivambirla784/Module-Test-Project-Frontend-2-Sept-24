let employees = [];
let idCounter = 1;

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    errorMessage.innerHTML = '';
    successMessage.innerHTML = '';
    
    // Validate input fields
    if (!name || !profession || !age) {
        errorMessage.innerHTML = 'Error: Please make sure all the fields are filled before adding an employee.';
        return;
    }

    // Create new employee object
    const newEmployee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: age
    };

    // Add to employees array
    employees.push(newEmployee);
    successMessage.innerHTML = 'Success: Employee added!';
    updateEmployeeList();

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}

function updateEmployeeList() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    if (employees.length === 0) {
        employeeList.innerHTML = 'You have 0 Employees.';
    } else {
        employees.forEach(employee => {
            const employeeItem = document.createElement('div');
            employeeItem.classList.add('employee-item');
            employeeItem.innerHTML = `
    <span>${employee.id}. Name: ${employee.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profession: ${employee.profession}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age: ${employee.age}</span>
    <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</button>
`;

            employeeList.appendChild(employeeItem);
        });
    }
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    updateEmployeeList();
}
