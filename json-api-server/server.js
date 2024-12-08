const express = require("express");
const app = express();
const port = 8080;

// Serve the JSON file as an API
app.get("/api/data", (req, res) => {
  const data = {
    id: 0,
    image: "./image/e-commerce.jpg",
    name: "Ecommerce Product Page",
    description:
      "An interactive e-commerce platform offering a seamless shopping experience, featuring product galleries, detailed descriptions, and secure checkout. Perfect for browsing and purchasing a variety of goods with ease",
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(data)
});
