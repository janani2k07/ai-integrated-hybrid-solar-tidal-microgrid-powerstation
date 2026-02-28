// SAFETY ANALYSIS FUNCTION
function analyzeSafety() {
    // Base battery requirement
    let required = distance * 5;

    // Wind effect
    if (wind === "medium") required += 5;
    if (wind === "high") required += 10;

    // Load effect
    if (load === "heavy") required += 5;

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

 document.addEventListener("DOMContentLoaded", function () {

    function animateValue(elementId, endValue) {
        let element = document.getElementById(elementId);
        let startValue = 0;
        let duration = 2000; // total animation time (2 seconds)
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            let progress = currentTime - startTime;

            // Ease-out effect
            let percent = Math.min(progress / duration, 1);
            let easeOut = 1 - Math.pow(1 - percent, 3);

            let currentValue = Math.floor(easeOut * endValue);
            element.innerText = currentValue + "%";

            if (progress < duration) {
                requestAnimationFrame(animation);
            } else {
                element.innerText = endValue + "%";
            }
        }

        requestAnimationFrame(animation);
    }

    animateValue("solarPercent", 70);
    animateValue("tidalPercent", 30);

});