# learn-mongoose

 몽고디비를 활용한 연습을 하려는 프로젝트

## 프로젝트 순서

#### 1. 몽고디비 설치

https://www.mongodb.com/download-center/community 에서 몽고디비 설치한다. 

윈도우 7에서는 설치할 때 compass 선택을 해제하고 설치해준다. mongodb 설치 후 compass는 따로 설치해준다.

설치가 끝나면 윈도의 경우 C:\에 data 폴더를 만들고 그 안에 db 폴더를 만든다.

설치가 끝나면 다음과 같이 이동하여 mongod를 실행하여 mongodb를 실행해준다.

~~~~bash
$ cd "C:\Program Files\MongoDB\Server\4.0\bin"
$ mongod
~~~~

몽고디비가 실행되었다면 새로운 콘솔을 열어 다음의 명령어를 입력하여 접속할 수 있다. 

~~~~bash
$ mongo
~~~~

접속한 후 관리자 계정을 설치해준다.

~~~~
> use admin   // 관리자로 접속
> db.createUser({ user: '이름', pwd: '비밀번호', roles: ['root'] }) // 계정 추가
~~~~

몽고디비를 종료한 후 다음과 같이 명령어를 입력하여 실행해준다.

~~~bash
$ mongod --auth  // 서버에 접속할 때 로그인을 요청하도록 한다.
~~~

~~~
mongo admin -u 이름 -p 비밀번호
~~~

 

