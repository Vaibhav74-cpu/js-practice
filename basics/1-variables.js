const accountId = 12345;
let accountEmail = 'vb@gmail.com'
var accountPwd = "258"
accountCity= "jaipur"
let accountState

// accountId=2;

console.log('accountId', accountId);

/*
    Dont used var beacused of issue in block scope
*/
accountEmail="bv@gmail.com";
accountPwd="369";

console.table([accountId, accountEmail, accountPwd, accountCity, accountState]);