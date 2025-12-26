exports.home = (req, res) => {
  res.json({
    message: "Welcome to the Express MVC Backend"
  });
};

exports.about = (req, res) => {
  res.json({
    message: "This is a simple Express.js backend using MVC pattern"
  });
};
exports.contact = (req, res) => {
  res.json({
    email: "contact@example.com",
    phone: "+251-900-000-000"
  });
}
exports.getTime = (req, res) => {
  res.json({
    serverTime: new Date().toLocaleString()
  });
};
exports.echoData = (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      error: "No JSON data provided"
    });
  }

  res.json({
    receivedData: data
  });
};
