import { defineConfig } from 'astro/config';

// 배포 주소는 빌드 환경에서 받는다. GitHub Actions 워크플로가 actions/configure-pages 의
// 결과로 SITE_URL(예: https://<user>.github.io)과 BASE_PATH(예: /<repo>, 루트면 빈 값)를 넘긴다.
// 그래서 어느 계정·저장소 이름으로 올려도 코드 수정이 필요 없다. 로컬에서는 둘 다 비어 루트(/)로 뜬다.
const site = process.env.SITE_URL || 'http://localhost:4326';
const basePath = (process.env.BASE_PATH || '').replace(/\/+$/, '');

// https://astro.build/config
export default defineConfig({
  // 이 프로젝트의 dev/preview 포트는 4326 로 고정한다.
  // 안 박아두면 Astro 기본값 4321 로 떠서 먼저 뜬 사이트에 밀린다
  // (전역 배정표는 ~/.claude/CLAUDE.md 참고).
  // host: true 로 IPv4·IPv6 양쪽에 바인딩해야 브라우저가 localhost 로 붙는다.
  server: { port: 4326, host: true },

  site,
  base: `${basePath}/`,
});
