app.use(express.static(path.join(__react - chat, "client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(`${__react - chat}/client/build/index.html`));
});
