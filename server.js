const express = require('express');
const app = express();
app.listen(8080, function(){
    //8080이라는 포트에 서버 띄어주세요
    console.log('listening on 8080');
    //서버를 띄우기 위한 기본 셋팅

});//컴터에 서버열기 

//누군가가 /pet으로 방문을 하면..
//pet관련된 안내문을 띄워주자
app.get('/pet', function(요청, 응답){
        응답.send('펫용품 쇼핑할 수 있는 페이지입니다.');
})

//ctrl+c 서버꺼주기
