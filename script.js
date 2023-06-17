// Array to store added employees
let employees = [];

// Function to display added employees
function displayEmployees() {
  const addedEmployeesDiv = document.getElementById('addedEmployees');
  addedEmployeesDiv.innerHTML = '';

  employees.forEach((employee) => {
    const employeeDiv = document.createElement('div');
    employeeDiv.innerHTML = `ID: ${employee.id}, Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}`;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete Employee';
    deleteButton.addEventListener('click', () => {
      deleteEmployee(employee.id);
      employeeDiv.remove();
    });

    employeeDiv.appendChild(deleteButton);
    addedEmployeesDiv.appendChild(employeeDiv);
  });
}

// Function to add an employee
function addEmployee(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  if (name === '' || profession === '' || age === '') {
    showMessage('Error : Please Make sure All the fields are filled before adding in an employee !', 'error');
    return;
  }

  const id = employees.length + 1;
  const employee = { id, name, profession, age };
  employees.push(employee);

  showMessage('Employee added successfully.', 'success');

  // Reset form fields
  document.getElementById('name').value = '';
  document.getElementById('profession').value = '';
  document.getElementById('age').value = '';

  displayEmployees();
}

// Function to delete an employee
function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  showMessage('Employee deleted successfully.', 'success');
}

// Function to display a message
function showMessage(message, className) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.className = className;
  document.body.insertBefore(messageDiv, document.getElementById('employeeForm'));

  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// Event listener for form submission
const employeeForm = document.getElementById('employeeForm');
employeeForm.addEventListener('submit', addEmployee);
