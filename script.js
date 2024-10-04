document.getElementById('inputForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const userInput = document.getElementById('textInput').value;

    // Send the user input to the server
    const response = await fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
    });

    if (response.ok) {
        console.log('Data saved successfully!');
    } else {
        console.error('Error saving data.');
    }
});
