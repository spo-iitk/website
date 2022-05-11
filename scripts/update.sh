#!/bin/bash

# See if there are new commits
OLD_HEAD=$(git rev-parse HEAD)
git pull origin master
NEW_HEAD=$(git rev-parse HEAD)

# Exit if no new commit
[ "$OLD_HEAD" = "$NEW_HEAD" ] && exit 0

# rebuild the website
yarn build
