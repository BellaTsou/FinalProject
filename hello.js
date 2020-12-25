const express = require('express');
const app = express();//產生express application物件
const port = process.env.PORT || 8888;
app.get("/", (req, res) => { //當使用者連線到伺服器的根目錄(/)時，做出回應
    res.end("Hello World");
});

app.get("/test", (req, res) => {//當使用者連線到/test時，做出回應
    res.end("You are in the /test");
});

app.listen(port, () => {
    console.log(`server listen on port =${port}`)
});