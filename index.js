// setup server
var express = require('express');
var app = express();

// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
var low = require('lowdb');
var fs = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db = low(adapter);

// required data store structure
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/
db.defaults({ accounts: []}).write();

app.get('/account/create/:name/:email/:password', function (req, res) {
    // Create account route
    // return success or failure string
    var account = {
        "name"    : req.params.name,
        "email" : req.params.email,
        "balance" : 0,
        "password" : req.params.password,
        "transactions" : [
            {
                "action" : 'create',
                "amount" : 0,
                "timestamp" : new Date()
            }
        ]
    };
    db.get('accounts').push(account).write();
    console.log("Account Created!");
    res.send(db.get('accounts').value());
});

app.get('/account/login/:email/:password', function (req, res) {
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    var trans ={
        "action" : 'login',
        "amount" : 0,
        "timestamp" : new Date()
    };
    db.get('accounts')
        .find({email : req.params.email, password : req.params.password})
        .get('transactions')
        .push(trans).write();
    console.log(db.get('accounts').find({email : req.params.email, password : req.params.password}).value());
    res.send(db.get('accounts').find({email : req.params.email, password : req.params.password}).value());
    /*if (account != undefined){
        account.transactions.push(trans);
        console.log(account.transactions);
    }
    res.send(account);
    */
});

app.get('/account/get/:email', function (req, res) {
    // Return account balance based on email
    res.send(db.get('accounts').find({email : req.params.email}).get('balance'));
});

app.get('/account/deposit/:email/:amount', function (req, res) {
    // Deposit amount for email
    // return success or failure string
    var trans ={
        "action" : 'deposit',
        "amount" : Number(req.params.amount),
        "timestamp" : new Date()
    };
    if (db.get('accounts').find({email : req.params.email}).value() != undefined){
        db.get('accounts')
            .find({email : req.params.email})
            .get('transactions')
            .push(trans).write();
        db.get('accounts')
            .find({email : req.params.email})
            .assign({balance : db.get('accounts').find({email : req.params.email}).get('balance').value() + Number(req.params.amount) })
            .write();
    }
    res.send(db.get('accounts').find({email : req.params.email}).value());
});

app.get('/account/withdraw/:email/:amount', function (req, res) {
    // Withdraw amount for email
    // return success or failure string
    var trans ={
        "action" : 'withdraw',
        "amount" : Number(req.params.amount),
        "timestamp" : new Date()
    };
    if (db.get('accounts').find({email : req.params.email}).value() != undefined && db.get('accounts').find({email : req.params.email}).get('balance').value() >= Number(req.params.amount)){
        db.get('accounts')
            .find({email : req.params.email})
            .get('transactions')
            .push(trans).write();
        db.get('accounts')
            .find({email : req.params.email})
            .assign({balance : db.get('accounts').find({email : req.params.email}).get('balance').value() - Number(req.params.amount) })
            .write();
        res.send(db.get('accounts').find({email : req.params.email}).value());
    }
    else{
        res.send(undefined);
    }
    
});

app.get('/account/transactions/:email', function (req, res) {
    // Return all transactions for account
    var account = db.get('accounts').find(obj => obj.email == req.params.email).get('transactions');
    res.send(account);
});

app.get('/account/all', function (req, res) {
    // Return data for all accounts
    var accounts = db.get('accounts');
    res.send(accounts);
});

app.listen(3000, function(){
    console.log('Running on port 3000');
});
