const questionInputs = document.querySelectorAll('.question-input');
const askButtons = document.querySelectorAll('.ask-button');
const responseDivs = document.querySelectorAll('.response-text');
const clearButtons = document.querySelectorAll('.clear-button');

askButtons.forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();

    const questionInput = document.getElementById('question');
    const question = questionInput.value;
    console.log(`Sending API request with question: ${question}`);

    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question } )
      });
      
      const responseData = await response.json();
      console.log(`Received API response: ${responseData.response}`);

      const responseDiv = document.getElementById('response');
      responseDiv.innerText = responseData.response;
      
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  });
});

clearButtons.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('question').value = '';

    document.getElementById('response').innerHTML = '';

  });
});







