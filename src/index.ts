// class Blick {
//   constructor(private data: string) {}
//   static hello() {
//     return 'hi!';
//   }
// }

// lib : "dom" 을 작성하면 window, document 등의 자동완성을 사용할 수 있었다.
// 그 이유는 ts가 d.ts라는 정의 파일을 가지고 있기 때문에 가능했던 것이다.
// 그런데, "strict": true 를 작성하면 ts에서는 myPackage 내의 함수들에 대한 정의파일이 없기 때문에 에러가 발생하게 된다.
// myPackage.d.ts 파일 생성 후 모듈을 생성해주면 에러가 사라진다.

import { init, exit } from 'myPackage';

init({
  debug: true,
  url: 'true',
});

exit(1);
