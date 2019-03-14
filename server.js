const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//배열 데이터를 제이슨으로 
app.get('/api/customers', (req,res) => {
    res.send([{
        "id" : 1,
        "image" : "https://placeimg.com/64/64/1",
        "name" : "정태현",
        "birth" : 911015,
        "gender" : "남자",
        "job" : "대학생"
      },
      {
        "id" : 2,
        "image" : "https://placeimg.com/64/64/2",
        "name" : "나루토",
        "birth" : 20011212,
        "gender" : "남자",
        "job" : "프로그래머"
      },
      {
        "id" : 3,
        "image" : "https://placeimg.com/64/64/any",
        "name" : "루피",
        "birth" : 981029,
        "gender" : "남자",
        "job" : "의사"
      }
    ])

});

app.listen(port, () => console.log(`Listen on port  ${port}`));

