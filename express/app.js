const express = require("express");
const app = express(); //Express의 인스턴스
const port = 3000; // port 번호 설정
var http = require('http');
var path = require('path');

//views라는 폴더의 클라이언트 접근 허용 (미들웨어)
app.use(express.static('views'))

// __dirname은 현재 경로를 의미
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/main.html"));
});

app.get("/weather", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/weather.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

// app.listen()을 통해서 서버 실행
// client는 host:port로 노드 서버에 요청을 보낼 수 있다.
app.listen(port, () => {
    console.log(`Server started. http://localhost:${port}`);
});


// next Object 사용 예시
// (req, res, next)
//client의 요청 정보, client에게 응답하기 위한 정보, 다음 미들웨어 함수 가리키는 Object
// app.get('/example', (req, res, next) => {
//     console.log('첫 번째 콜백 함수');
//     next(); // 다음 콜백 함수 호출
// }, (req, res) => {
//     res.send('두 번째 콜백 함수'); // client 응답
// })

// // 콜백 함수 배열 사용 예시
// const ex0 = (req, res ,next) => {
//     console.log('첫 번째 콜백 함수');
//     next();
// }
// const ex1 = (req, res ,next) => {
//     console.log('첫 번째 콜백 함수');
// }
// app.get('/example1', [ex0, ex1]); //콜백 함수 배열로 정의



// http.createServer(app).listen(port, function(){
//     console.log(`Server started. http://1270.0.01:${port}`);
// })

// http로 실행
// var http = require('http');

//public이라는 폴더의 클라이언트 접근 허용 (미들웨어)
// app.use(express.static('public'));

// path: 서버에서의 경로
// HANDLER: 라우트가 일치할 때 실행되는 함수
// METHOD: GET, POST, PUT, DELETE 등 존재, all을 사용하면 모든 요청에 대한 응답

// client에서 GET을 이용해서 host:port요청시 실행 
// 'host:3000/' 을 호출했을 때 Hello World 보내줌
// 만약 'host:3000/customer' 호출시 app.get("/customer", (req, res))로 변경시 가능

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });
