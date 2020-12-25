const express = require('express');
const app = express();//產生express application物件
const port = process.env.PORT || 8888;
app.get("/", (req, res) => { //當使用者連線到伺服器的根目錄(/)時，做出回應
    res.end("Hello Everyone:)This is main page.");
});

app.use("/user", user_router)

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
});