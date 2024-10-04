const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/save', (req, res) => {
    const { userInput } = req.body;

    // Write the user input to a file (e.g., "user-input.txt")
    fs.writeFileSync('user-input.txt', userInput);

    res.status(200).send('Data saved successfully!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


