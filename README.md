# 마이크로서비스 연습장

NestJS 모노레포 기능을 활용하여 각 앱을 하나의 마이크로서비스로 제작하여 연동하는 과정을 연습삼아 진행해보았습니다

### 시작 명령
```
docker-compose up
```

### 정리 사항
- Redis VS RabbitMQ
  - Redis는 하나의 이벤트에 대한 pub/sub 구조이기 때문에 (추측), 클라이언트에서 마이크로서비스 호출시에도 여러 프로세스가 동시에 응답하게 된다.
  - 이와달리 RabbitMQ는 메시지큐 형식이여서 여러 프로세스가 구독하더라도 하나의 메시지는 하나의 프로세스가 처리함
  - 데이터 생성/수정 작업을 할 때는 Redis 사용시에 충돌 발생 가능성이 있을듯