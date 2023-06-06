//try and catch
//try is block of code during testing error execution of code comeout of any banch of code line any line error are come bolck of code is stop and go to catch block over handle it block of code catch executed to run ...


//catch catch only use try have any error are come out yeh not..otherwise catch block skkip..

try {
    console.log('hello');
    console.log(a);
    console.log('ending');
} catch (err) {
    console.log('handled',err); 
}finally{
    console.log('final');
}
console.log('the code is end');

// Here's a simple explanation and example of how try and catch works:

// The "try" block: This is where you write the code that might generate an error. It is enclosed within the "try" keyword and curly braces {}.

// The "catch" block: If an error occurs within the "try" block, the program jumps to the corresponding "catch" block. This block contains the code to handle the error gracefully. It is defined using the "catch" keyword followed by parentheses () and curly braces {}.

try {
    let result = 10/0; //divison by zero error
    console.log(result);
    console.log("result is not come");
} catch  {
    console.log('an arror ocurrred: ');
}finally{
console.log("aditya ");
}