const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState // undefined

// accountId = 2 // not allowed, assignment to a constant variable

accountEmail = 'hc@hc.com'
accountPassword = '21212121'
accountCity = 'Bengaluru'

console.log(accountId)

{
  // curly braces are simple a scope and problem with var is that it does not respect block scope
}

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])