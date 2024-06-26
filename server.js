const express = require('express');
const html_routes = require('./Develop/public/routes/html_routes.js');
const api_routes = require('./Develop/public/routes/api_routes.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Corrected typo here
app.use(express.static("public"));
app.use(html_routes);
app.use(api_routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); 
});