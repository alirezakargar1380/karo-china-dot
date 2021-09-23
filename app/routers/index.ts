module.exports = (app: any) => {
  app.use("/api",
      require("./test")
  )
}