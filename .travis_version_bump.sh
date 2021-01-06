#!/bin/bash

case "$TRAVIS_BRANCH" in
  main)
    # Merges into "main" will update the minor version automatically
    export NPM_TAG=stable
    SEMVER_LEVEL=minor
  ;;
  develop)
    # Merges into "Develop" will update the patch version automatically
    export NPM_TAG=develop
    SEMVER_LEVEL=patch
  ;;
  *)
    # exit cleanly if on any other branch
    exit 0
  ;;
esac

# Set the user name and email to match the API token holder
git config --local user.email $DEV_TEAM_EMAIL
git config --local user.name "SEAS Computing Robot"
git config --local push.default matching

# Get the credentials from a file
git config credential.helper "store --file=.git/credentials"

# This associates the API Key with the account
echo "https://${GITHUB_TOKEN}:@github.com" > .git/credentials

# Local branch must be clean before bumping version
git checkout -- .

# Use npm's version command to:
# 1. Increase the version number in package.json
# 2. Create a new commit with the updated package.json, adding [skip ci] to
#    prevent this script from running multiple times
# 3. Add a git tag with the version number
npm version $SEMVER_LEVEL -m "[skip ci] Automatic bump to %s"

# Push the new new commit and the tag back into our github repo
git push --tags origin HEAD:$TRAVIS_BRANCH

# Adapted from https://dev.to/jeffreymfarley/deploy-atomically-with-travis--npm-68b
# By Jeff Farley
