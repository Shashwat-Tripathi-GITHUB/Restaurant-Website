const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;

// Serve static files from the 'public' directory
const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

// Redirect to rest.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'rest.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



