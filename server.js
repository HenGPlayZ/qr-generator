const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root and public directory
app.use(express.static("."));
app.use("/public", express.static("public"));

// Clean URL routes
app.get("/qr-generator", (req, res) => {
  res.sendFile(path.join(__dirname, "qr-generator.html"));
});

// Redirect old URLs for backward compatibility
app.get("/home/home.html", (req, res) => {
  res.redirect(301, "/qr-generator");
});

// Root route - landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle 404s - redirect to landing page
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("🚀 QR Generator Server");
  console.log(`📱 Landing Page: http://localhost:${PORT}`);
  console.log(`� QR Generator: http://localhost:${PORT}/qr-generator`);
  console.log(`⚡ Environment: ${process.env.NODE_ENV || "development"}`);
});
