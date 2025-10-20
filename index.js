
const prompt = require("prompt-sync")();

const optionList = {
    1: 'Add Expense',
    2: 'View Expenses',
    3: 'View Total',
    4: 'Exit'
}

let expenses = [];
let running = true;

while (running){
    console.log("\n=== Expense Tracker Options ===");
    for (let key in optionList){
        console.log(`${key}. ${optionList[key]}`);
    }

    const choose = prompt("Choose an option (1-4) : ");

    if (choose === ""){
        console.log("Invalid input. Please try again.\n");
        continue;
    }

    const option = parseInt(choose);

    if (option === 1){
        const description = prompt("Enter description : ");
        const amount = parseFloat(prompt("Enter amount : "));

        if (description === "" || isNaN(amount)){
            console.log("Invalid input. Please try again.\n");
        }else{
            expenses.push({ description,amount })
            console.log("Expenses added!");
        }

    }else if (option === 2){
        console.log("\nYour Expenses : ")
        if(expenses.length === 0){
            console.log("No expenses yet.")
        }else{
            expenses.forEach((exp, index) => {
                console.log(`${index + 1}. ${exp.description} - ₱${exp.amount}`)
            });
        }

    }else if (option === 3){
        const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
        console.log(`\nTotal Expenses : ${total}`)
    }else if (option === 4){
        console.log("Exiting... Goodbye!");
        running = false;
    }else{
        console.log("Invalid choice. Please try again.\n");
    }

}
