
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

const uppercharacter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowercharacter ="abcdefghijklmnopqrstuvwxyz";
const numbercharacter = "1234567890";
const symbolcharacter = "!@#$%^&*()_-+=";

function password(){
    let password= "";
    let uppercase = document.getElementById(uppercase).Checked;
    let lowercase = document.getElementById(lowercase).Checked;
    let number = document.getElementById(numbers).Checked;
    let symbol = document.getElementById(symbols).Checked;

    if(uppercase=Checked){
        password += uppercharacter
    }
    if(lowercase=Checked){
        password += lowercharacter
    }
    if(number=Checked){
        password += numbercharacter
    }
    if(symbol=Checked){
        password += symbolcharacter
    }

    for (let i = 1; i <= charLength; i++) {
        var char = Math.floor(Math.random() * password.length + 1);
    }
      
    return password;
}

function generatePassword(length,uppercase, lowercase, numbers, symbols){
    let passwordchar ="";
    
    if (length || uppercase|| lowercase|| numbers|| symbols){
        passwordchar +=uppercharacter + lowercharacter + numbercharacter + symbolcharacter;
    }

    else(!uppercase|| !lowercase|| !numbers|| !symbols){
        
    }
}