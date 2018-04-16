console.log('js');

$(document).ready(readyNow);
//variables
let totalMonthlySalary = [];
let annualSalaryTotal = 0
let i = 0

//function for when submitt button is clicked
function readyNow() {
    console.log('JQ');
    $('#submitButton').on('click', clickHandler);
    monthlySalary()
}

function clickHandler() {
    let firstName = $('#firstname').val();
    let lastName = $('#lastname').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = Number($('#annualSalary').val());
    let employee = firstName && lastName && idNumber && jobTitle && annualSalary
    if (employee) {
        addMonthlySalary()
        monthlySalary();
        addEmployee();
    } else {
        //make sure all the information required is fill in
        alert('Please fill in all fields')
    }

    //clear data input
    $('#firstname').val(''), $('#lastname').val(''), $('#idNumber').val(''), $('#jobTitle').val('') , $('#annualSalary').val('') 
    
}

//changing the color of the total monthly salary rate to red once it reached 20000 or more
function monthlySalary() {
    annualSalaryTotal = Number((annualSalaryTotal));
    if (annualSalaryTotal >= 20000) {
        $('#totalMonthSalary').text('$' + annualSalaryTotal).css('color', 'red');
    } else {
        $('#totalMonthSalary').text('$' + annualSalaryTotal)
    }
}

//caculating the Annual Salary
function addMonthlySalary() {
    totalMonthlySalary.push(Number($('#annualSalary').val()));
    for (i; i < totalMonthlySalary.length; i++) {
        annualSalaryTotal += totalMonthlySalary[i]
    }
    console.log(totalMonthlySalary);
}

//creating the table (appending the information to the DOM)
function addEmployee() {
    console.log('employees');
    $('#listOfEmployee').append('<tr><td>' + $('#firstname').val() + '</td><td>' + $('#lastname').val() + '</td><td>' + $('#idNumber').val() + '</td><td>' + $('#jobTitle').val() + '</td><td>$' + $('#annualSalary').val() + '</td></tr>'
    );
}


