#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

const currency:any = {
    USD: 1, 
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280, //base currency
}


let convertAmount:any = await inquirer.prompt([{
    name:'from',
    message: 'Enter from currency',
    type: 'list',
    choices: ['USD','EUR','GBP','INR', 'PKR']//const
},
{
    name: 'to',
    message: 'Enter to currency',
    type: 'list',
    choices: ['USD','EUR','GBP','INR', 'PKR']//const
},
{
    name: 'amount',
    message: 'Enter your Amount',
    type: 'number',
}
]
)

//console.log(convertAmount);
let fromAmount=currency[convertAmount.from];

let toAmount=currency[convertAmount.to];

let amount=convertAmount.amount; // users desired amount

let baseCurrency= amount /fromAmount; //changing users input amount in base currency pkr 
let convertedCurrency=  baseCurrency * toAmount; // changing input amount in currency of user's choice

console.log(chalk.blue.underline.bgYellow(Math.round(convertedCurrency)));


//console.log(toAmount);
//console.log(fromAmount);
//console.log(amount);