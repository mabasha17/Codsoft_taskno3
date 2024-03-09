function appendToResult(value) {
    document.getElementById("result").value += value;
}


function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        var result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
function removeLastCharacter() {
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}
