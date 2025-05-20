// Project Xountdown Timer
const endDate = new Date(Date.now() + 60000); // 60,000ms = 1 minute

function countdown() {
  const now = new Date();
  const distance = Date.parse(endDate) - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    total: distance,
    days,
    hours,
    minutes,
    seconds
  };
}

function update() {
  const temp = countdown();
  let output = "";

  for (let unit in temp) {
    output += `${unit}: ${temp[unit]} `;
  }

  console.log(output);

  if (temp.total <= 0) {
    clearInterval(timer);
    console.log("Countdown complete!");
  }
}
const timer = setInterval(update, 1000);