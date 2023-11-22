//your JS code here. If required.
async function delayAndDisplayMessage() {
  // Get user input
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  // Validate inputs
  if (!textInput || isNaN(delayInput) || delayInput <= 0) {
    alert('Please enter valid input values.');
    return;
  }

  // Convert delay to milliseconds
  const delayMilliseconds = delayInput * 1000;

  // Use async/await to wait for the specified delay
  await new Promise(resolve => setTimeout(resolve, delayMilliseconds));

  // Display the message on the webpage
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = textInput;
}

// Attach the function to the button click event
document.getElementById('btn').addEventListener('click', delayAndDisplayMessage);

