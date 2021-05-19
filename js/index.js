/*
Declare three variables, a ,b and caches.delete
if a has a value of 3, b has a value of 5 and c doesn't have a value
*/

let a = 3;
let b = 5;
let c;

let output = 'let a = 3; \nlet b = 5; \nlet c\n---------'

output = output + '\na + b = ' + (a + b);
output = output + '\na - b = ' + (a - b);
output = output + '\na * b = ' + (a * b);
output = output + '\na / b = ' + (a / b);
output = output + '\na % b = ' + (a % b);
output = output + '\na += b = ' + (a += b);
output = output + '\na -= b = ' + (a -= b);
output = output + '\na *= b = ' + (a *= b);
output = output + '\na /= b = ' + (a /= b);
output = output + '\na %= b = ' + (a %= b);
output = output + '\na == b: ' + (a == b);
output = output + '\na != b: ' + (a != b);
output = output + '\na > b: ' + (a > b);
output = output + '\na < b: ' + (a < b);
output = output + '\n!a && !c: ' + (!a && !c);
output = output + '\n!a || !c: ' + (!a || !c);
alert(output);

// Declaring variables to my first name, last name and email

let first_name = 'Daisy';
let last_name = 'Kimutai';
let email = 'kimbrooke9@gmail.com';

let output2 = 'My name is ' + first_name + ' ' + last_name + '. You can contact me at ' + email + '.';

alert(output2); // Print My name is Daisy Kimutai. You can contact me at kimbrooke9@gmail.com
