var ui = {};

ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
        <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
        <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
        <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
        <a class="nav-link" href="#" onclick="loadTransactions()">Transactions</a>
        <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
        <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
    </div>
    </div>
    </nav>
`;

ui.createAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
        <form>
            <div class="form-group">
            <label for="nameInput">Name</label>
            <input type="text" class="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter name">
            </div>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="passwordInput">Password</label>
            <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp" placeholder="Enter password">
            </div>
            <button type="submit" class="btn btn-light" onclick="create()">Create Account</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
`;

ui.login = `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">Login</div>
    <div class="card-body">
        <form>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="passwordInput">Password</label>
            <input type="password" class="form-control" id="passwordInput" aria-describedby="passwordHelp" placeholder="Enter password">
            </div>
            <button type="submit" class="btn btn-light" onclick="login()">Login</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
`;

ui.deposit = `
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
    <div class="card-body">
        <form>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="amountInput">Amount</label>
            <input type="number" class="form-control" id="amountInput" aria-describedby="amountHelp" placeholder="Enter amount">
            </div>
            <button type="submit" class="btn btn-light" onclick="deposit()">Deposit</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
`;

ui.withdraw = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
        <form>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">  
            <label for="amountInput">Amount</label>
            <input type="number" class="form-control" id="amountInput" aria-describedby="amountHelp" placeholder="Enter amount">
            </div>
            <button type="submit" class="btn btn-light" onclick="withdraw()">Withdraw</button>
            <div id="status"></div>
        </form>
    </div>
    </div>
`;

ui.transactions = `
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">Transactions</div>
    <div class="card-body">
        <form>
            <div class="form-group">  
            <label for="emailInput">Email Address</label>
            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-light" onclick="transactions()">Show Transactions</button>
            <div id="status"></div>
        </form>
    </div>
    </div> 
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<div class="card-header">Balance</div>
<div class="card-body">
    <form>
        <div class="form-group">  
        <label for="emailInput">Email Address</label>
        <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <button type="submit" class="btn btn-light" onclick="balance()">Show Balance</button>
        <div id="status"></div>
    </form>
</div>
</div> 
`;

ui.default = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    BadBank Landing Module
    </div>
    <div class="card-body">
    <h5 class="card-title">Welcome to the bank</h5>
    <p class="card-text">You can move around using the navigation bar.</p>
    </div>
    <img src="bank.png" class="card-img-top" alt="Bank Image">
    </div> 
`;

ui.allData = `     
    <div>
    <h5>All Data in Store</h5>
    <button type="submit" class="btn btn-secondary" onclick="allData()">Show All Data</button>
    </div> 
    <div id="status"></div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;


var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
