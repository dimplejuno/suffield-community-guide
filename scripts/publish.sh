#!/usr/bin/env bash
# 현재 gh 로 로그인된 GitHub 계정에 저장소를 만들고 push 한 뒤 Pages(GitHub Actions)를 켠다.
#   사용: scripts/publish.sh [저장소이름] [--private]
#   저장소이름 기본값: suffield-community-guide
#   <계정>.github.io 로 지으면 https://<계정>.github.io/ 루트에 뜬다.
set -euo pipefail
cd "$(dirname "$0")/.."

REPO="${1:-suffield-community-guide}"
VIS="--public"
[[ "${2:-}" == "--private" ]] && VIS="--private"   # 무료 플랜은 private 저장소에서 Pages 불가

command -v gh >/dev/null || { echo "gh CLI 가 필요합니다: brew install gh"; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "먼저 로그인하세요: gh auth login"; exit 1; }
OWNER="$(gh api user -q .login)"
echo "계정: $OWNER / 저장소: $REPO"

[[ -d .git ]] || git init -b main
git add -A
git diff --cached --quiet || git commit -m "Prepare GitHub Pages deployment"
git branch -M main

if git remote get-url origin >/dev/null 2>&1; then
  git push -u origin main
else
  gh repo create "$OWNER/$REPO" $VIS --source=. --remote=origin --push
fi

# Pages 소스를 GitHub Actions 로 지정 (이미 켜져 있으면 갱신)
gh api -X POST "repos/$OWNER/$REPO/pages" -f build_type=workflow >/dev/null 2>&1 \
  || gh api -X PUT "repos/$OWNER/$REPO/pages" -f build_type=workflow >/dev/null

# 첫 push 때 Pages 가 꺼져 있어 실패했을 워크플로를 다시 돌린다
gh workflow run deploy.yml --ref main >/dev/null 2>&1 || true

if [[ "$REPO" == "$OWNER.github.io" ]]; then URL="https://$OWNER.github.io/"; else URL="https://$OWNER.github.io/$REPO/"; fi
echo "배포 진행 상황: https://github.com/$OWNER/$REPO/actions"
echo "완료 후 주소:   $URL"
