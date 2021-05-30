## 환경 설정

- [x] typescript 로 cypress 돌리기
  - [x] https://basarat.gitbook.io/typescript/intro-1/cypress
  - `npm install cypress typescript``
  - `npx tsc --init --types cypress --lib dom,es6``
  - `echo {} > cypress.json`
- [x] cypress-basic에 typescript 환경설정 하기
 - [x] cypress-basic js에서 ts로 이주하기
   - [x] Typescript ReferenceError: exports is not defined 문제 해결하기
     - "module": "commonjs" 옵션이 설정돼서 exports 문법으로 반환해서 생긴 문제 "target": "es6"으로 바꿔주자.
- [x] prettier, eslint typescript 버전으로 추가

## 기능 구현

- [x] 생성시 버튼과 초기값(10)을 렌더링 한다.
- [x] controller 구현
  - [x] counterEvent(): 구현
    - [x] + 버튼을 클릭 시 count가 1증가한다.
    - [x] - 버튼을 클릭 시 count가 1감소한다.
- [x] + 버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)
- [x] - 버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)

## Test Case

- [x] cypress 문법익히기
- [x] counter test case 만들기
 - [x] minus button
 - [x] min value 8
 - [x] plus button
 - [x] plus value 12
