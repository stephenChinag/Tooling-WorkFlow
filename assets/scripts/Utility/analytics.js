const analyticBtn = document.getElementById("stop-analytics-btn");
const intervalId = setInterval(() => {
	console.log("Sending analytics data...");
}, 2000);

analyticBtn.addEventListener("click", () => {
	clearInterval(intervalId);
});
