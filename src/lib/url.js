// 사이트 내부 경로를 배포 base 기준으로 만든다.
// GitHub 프로젝트 페이지(/<repo>/)에 올려도, 루트(/)에 올려도 같은 코드로 동작한다.
const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const url = (path = '') => base + path.replace(/^\//, '');
