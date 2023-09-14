#!/usr/bin/env bash

# 이 파일은 웹스톰에서 .husky/pre-commit 이 인코딩되는 과정에서
# 형식이 깨지기 때문에 이를 고치기 위한 스크립트 입니다.

# shellcheck disable=SC2016
printf '#!/usr/bin/env sh\n.%s "$(dirname -- "$0")/_/husky.sh"\n\nnpm run lint\n' >.husky/pre-commit
chmod +x .husky/pre-commit
