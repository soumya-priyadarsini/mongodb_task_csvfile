const app = require("./server/app");

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Server: listening on port ${port}`);
});
