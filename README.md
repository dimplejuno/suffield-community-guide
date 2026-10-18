# Suffield Community Guide

Suffield(코네티컷)의 지역 기관·시설 29곳을 지도와 함께 정리한 Astro 정적 사이트.

## 로컬 실행

```bash
npm install
npm run dev        # http://localhost:4326/
```

## GitHub Pages 배포

어느 GitHub 계정, 어떤 저장소 이름으로 올려도 **코드 수정 없이** 동작한다.
`.github/workflows/deploy.yml` 이 `actions/configure-pages` 로 배포 주소를 알아내
`SITE_URL`·`BASE_PATH` 로 빌드에 넘기고, 사이트 내부 링크는 전부 `src/lib/url.js` 의
`url()` 로 만들어 base 경로를 따른다.

| 저장소 이름 | 사이트 주소 |
|---|---|
| `suffield-community-guide` (아무 이름) | `https://<계정>.github.io/<저장소>/` |
| `<계정>.github.io` | `https://<계정>.github.io/` |
| 커스텀 도메인 설정 시 | 그 도메인 루트 |

### 방법 1 — 스크립트 (gh CLI)

```bash
gh auth login                    # 올릴 계정으로 로그인 (최초 1회)
scripts/publish.sh               # 저장소 이름 기본값: suffield-community-guide
scripts/publish.sh my-repo-name  # 이름 지정
```

저장소 생성 → push → Pages 소스를 "GitHub Actions" 로 지정 → 배포 실행까지 한 번에 한다.

### 방법 2 — 웹에서 수동

1. GitHub 에서 빈 **public** 저장소를 만든다 (README 추가 체크 해제).
2. 이 폴더에서:
   ```bash
   git remote add origin https://github.com/<계정>/<저장소>.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꾼다.
4. **Actions** 탭에서 `Deploy to GitHub Pages` 를 다시 실행(Re-run)한다.
   첫 push 때는 Pages 가 꺼져 있어 실패하는 것이 정상이다.

### 주의

- 무료 플랜에서는 **private 저장소에 Pages 를 쓸 수 없다.** public 으로 만든다.
- 내부 링크를 새로 추가할 때는 `href="/..."` 대신 `url('...')` 를 쓴다.
  루트 절대경로를 쓰면 프로젝트 페이지(`/<저장소>/`)에서 404 가 난다.
- 기관 운영시간·연락처는 공개 전에 재확인을 권장한다. `VFW Landry-Sic Post 9544` 주소는 확인 필요 표시가 있다.
