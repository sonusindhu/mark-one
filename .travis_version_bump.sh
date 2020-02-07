#!/bin/sh

# Set the user name and email to match the API token holder
git config --global user.email $DEV_TEAM_EMAIL 
git config --global user.name "SEAS Computing Robot"
git config --global push.default matching

# Get the credentials from a file
git config credential.helper "store --file=.git/credentials"

# This associates the API Key with the account
echo "https://${GITHUB_TOKEN}:@github.com" > .git/credentials

git checkout -- .
  
# %s is the placeholder for the created tag
if [[ $TRAVIS_BRANCH == master ]]; then
  SEMVER=minor
fi

if [[ "$TRAVIS_BRANCH" == develop ]]; then 
  SEMVER=patch
fi

if [[ "$SEMVER" != "" ]]; then
  npm version $SEMVER -m "automatic bump to %s"
fi

git push --tags origin HEAD:$TRAVIS_BRANCH

# Adapted from https://dev.to/jeffreymfarley/deploy-atomically-with-travis--npm-68b
# By Jeff Farley
