const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bp = require('body-parser');
const cors = require('cors');
const { default: Axios } = require('axios');

require("./models/salary");
require("./models/user");
require("./models/expense")
require('dotenv').config({ path: 'ENV_FILENAME' });
require('crypto').randomBytes(64).toString('hex');

dotenv.config();
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const saltRounds = 10;
const Salary = mongoose.model('salary');
const User = mongoose.model('user')
const Expense = mongoose.model('expense')

app.use(cors());
app.use(bp.json());       // to support JSON-encoded bodies
app.use(bp.urlencoded({     // to support URL-encoded bodies
    extended: false
}));

app.get('/Salaries', (req, res) => {
    Salary.find({}, function (err, results) {
        console.log(results)
        res.send(results);
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    User.findOne({ username: username }, function (err, user) {
        console.log(user);
        if (!user) {
            res.send("User does not exist");
        }
        if (user) {
            bcrypt.compare(password, user.password).then(function (result) {
                if (result) {
                    const tokenUser = { user: user.username }
                    const token = jwt.sign(tokenUser, process.env.JWTSECRET, { expiresIn: 60 * 60 }) // CHANGE TO 60 FOR TESTING PURPOSES
                    res.status(200).send({ token, tokenUser })
                }
                else {
                    res.send("Invalid login.");
                }
            });
        }
    });
});

app.post('/authenticateLogin', (req, res) => {
    const token = req.body.token;
    try {
        jwt.verify(token, process.env.JWTSECRET)
        res.send(true)
    } catch (e) {
        res.send(false)
    }
})

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    bcrypt.hash(password, saltRounds).then(function (hash) {
        let user = new User({
            username,
            email,
            password: hash,

        })
        user.save(function (err, user ) {
            if (err) console.log(err);
            if (user) {
                console.log(`${user} saved to database`)
            }
        })
        res.send({registerSuccessful: true})
    })
})

app.post('/addSalary', (req, res) => {
    const salaryAmount = req.body.salary;
    const taxPercentage = req.body.taxPercentage
    const holder = req.body.holder;
    const salary = new Salary({
        amount: salaryAmount,
        taxPercentage: taxPercentage,
        holder: holder
    });
    salary.save(function (err, salary) {
        if (err) return err;
        if (salary) {
            console.log(salary)
        }
        res.send('Added salary amount to user')
    });
});

app.post('/addExpense', (req, res) => {
    const expenseAmount = req.body.expenseAmount
    const expenseType = req.body.expenseType
    const expenseRecurrence = req.body.expenseRecurrence
    const user = req.body.user

    const expenseObject = { expenseAmount: expenseAmount, expenseRecurrence: expenseRecurrence, expenseType: expenseType}

    Expense.findOne({user: user}, function (err, expense) {
        if (!expense) { // user has no Expenses
            const newExpenses = new Expense({
                user: user,
                expenses: {0: expenseObject}
            })
            newExpenses.save(function (err, expenses) {
                if (err) return err
                if (expenses) {
                    console.log(expenses)
                }
                res.send('New expense added for user')
            })
        } else { // user has Expenses
            Expense.findOneAndUpdate(
                { user: user },
                { $set: { [`expenses.${Object.keys(expense.expenses).length}`]: expenseObject } },
                { useFindAndModify: false },
                function (err, doc) {
            });
        }
    })
})

app.post('/getSalary', (req, res) => {
    const holder = req.body.holder
    Salary.findOne({holder: holder}, function (err, result) {
        console.log(result)
        res.send(result);
    });
})
app.post('/getExpense', (req, res) => {
    const user = req.body.user
    Expense.findOne({user: user}, function (err, result) {
        res.send(result.expenses)
    })
})
app.post('/getMonthlyExpense', (req, res) => {
    const user = req.body.user
    let amount = parseFloat("0.0");
    Expense.findOne({user: user}, function (err, result) {
        Object.entries(result.expenses).map(expense => {
            if (expense[1].expenseRecurrence === "Monthly") {
                amount += parseFloat(expense[1].expenseAmount)
            }
        })

        res.send({amount})
    })
})


app.listen(5000, () => {
    console.log(`http://localhost:5000/`)
})