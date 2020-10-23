
function create() {
    //  Create user account on server
    var status = document.getElementById('status');
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    var url = '/account/create/' + name + '/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                status.innerHTML = "Account Created!";    
            }
        });

}

function login() {
    //  Confirm credentials on server
    var status = document.getElementById('status');
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    var url = '/account/login/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                if(res.body!=undefined){
                    console.log(res.body);
                    status.innerHTML = "Login Successful!"; 
                }
                else{
                    status.innerHTML = "Login Failed!"; 
                }
            }
        });
}

function deposit() {
    //  Deposit funds user funds on server
    var status = document.getElementById('status');
    var email = document.getElementById('emailInput').value;
    var amount = document.getElementById('amountInput').value;
    var url = '/account/deposit/' + email + '/' + amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                if(res.body!=undefined){
                    console.log(res.body);
                    status.innerHTML = "Deposit complete!"; 
                }
                else{
                    status.innerHTML = "Desposit Failed!"; 
                }
            }
        });
}

function withdraw() {
    //  Withdraw funds user funds on server
    var status = document.getElementById('status');
    var email = document.getElementById('emailInput').value;
    var amount = document.getElementById('amountInput').value;
    var url = '/account/withdraw/' + email + '/' + amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                if(res.body!=undefined){
                    console.log(res.body);
                    status.innerHTML = "Withdraw complete!"; 
                }
                else{
                    status.innerHTML = "Withdraw failed!"; 
                }
            }
        });
}

function transactions() {
    //  Get all user transactions
    var status = document.getElementById('status');
    var email = document.getElementById('emailInput').value;
    var url = '/account/transactions/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                if(res.body==undefined){
                    status.innerHTML = "No matching account!"; 
                }
                else{
                    console.log(res.body);
                    status.innerHTML = JSON.stringify(res.body,null,1); 
                }
            }
        });
}

function balance() {
    //  Get user balance
    var status = document.getElementById('status');
    var email = document.getElementById('emailInput').value;
    var url = '/account/get/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                if(res.body==undefined){
                    status.innerHTML = "No matching account!"; 
                }
                else{
                    console.log(res.body);
                    status.innerHTML = res.body; 
                }
            }
        });
}

function allData() {
    //  Get all data
    var status = document.getElementById('status');
    var url = '/account/all';

    superagent
        .get(url)
        .end(function(err, res){
            status.innerHTML = JSON.stringify(res.body,null,1); 
        });

}

