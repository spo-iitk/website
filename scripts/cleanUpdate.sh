#!/bin/bash

# See if there are new commits
OLD_HEAD=$(git rev-parse HEAD)
git pull origin master
NEW_HEAD=$(git rev-parse HEAD)

# Exit if no new commit
[ "$OLD_HEAD" = "$NEW_HEAD" ] && exit 0

# Remove old packages and build files
rm -rf node_modules/ ./.next/

# Install dependencies and build
yarn install --frozen-lockfile
yarn build
