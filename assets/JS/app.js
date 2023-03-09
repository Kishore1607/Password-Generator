
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

function value_r() {
    var val = document.getElementById("result");
    value_l = val.innerHTML; 

    let input = document.getElementById( "input_result" );
    input.setAttribute( "maxlength", "value_l" );
   }