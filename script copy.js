// SAFETY ANALYSIS FUNCTION

resultBox.className = ""; // reset classes
resultBox.classList.add("show");

if (battery > required + 10) {
    resultBox.innerHTML = "SAFE TO PROCEED ✅";
    resultBox.classList.add("safe");
} 
else if (battery >= required) {
    resultBox.innerHTML = "RETURN TO STATION ⚠️";
    resultBox.classList.add("warning");
} 
else {
    resultBox.innerHTML = "EMERGENCY – SEND SOS 🚨";
    resultBox.classList.add("danger");
    resultBox.classList.add("shake");
}

    // Base battery requirement
    let required = distance * 5;

    // Wind effect
    if (wind === "medium") required += 5;
    if (wind === "high") required += 10;

    // Load effect
    if (load === "heavy") required += 5;

    if (battery > required + 10) {
        resultBox.innerHTML = "SAFE TO PROCEED ✅";
        resultBox.style.color = "green";
    } 
    else if (battery >= required) {
        resultBox.innerHTML = "RETURN TO STATION ⚠️";
        resultBox.style.color = "orange";
    } 
    else {
        resultBox.innerHTML = "EMERGENCY – SEND SOS 🚨";
        resultBox.style.color = "red";
    }



// Connect button to function (only if button exists)

let analyzeBtn = document.getElementById("analyzeButton");

if (analyzeBtn) {
    analyzeBtn.addEventListener("click", analyzeSafety);
}
else {
    resultBox.innerHTML = "EMERGENCY – SEND SOS 🚨";
    resultBox.classList.add("danger");
    resultBox.classList.add("shake");

    showAlert();  // <-- this triggers popup
}