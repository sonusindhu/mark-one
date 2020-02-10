#!/bin/bash

if [[ "$TRAVIS_BRANCH" == develop ]]; then 

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

  npm version prerelease --preid=develop -m "[skip ci] Automatic bump to %s"
  git push --tags origin HEAD:$TRAVIS_BRANCH
fi


# Adapted from https://dev.to/jeffreymfarley/deploy-atomically-with-travis--npm-68b
# By Jeff Farley
