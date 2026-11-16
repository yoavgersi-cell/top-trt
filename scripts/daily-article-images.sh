#!/usr/bin/env bash
# Daily batch: generate + wire hero images for the next 5 articles missing one,
# then verify the build. Commit/push is left to the caller (the fired session's
# agent) so the commit carries that session's own attribution.
#
# Safe to run when nothing is missing: the generator no-ops and the build still
# passes, leaving the working tree clean.
set -euo pipefail
cd "$(dirname "$0")/.."

# Trust the session proxy CA so Node's fetch can reach api.openai.com.
if [ -f /root/.ccr/ca-bundle.crt ]; then
  export NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt
fi

COUNT="${1:-5}"

# Ensure deps exist (fresh clones have no node_modules).
if [ ! -x node_modules/.bin/next ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Generating + wiring up to ${COUNT} article images..."
node scripts/gen-article-images.mjs --count "${COUNT}" --wire

echo "Verifying build..."
npm run build

echo "Done. Review 'git status' and commit public/article-images + src/lib/seeds/trt-articles.ts if changed."
