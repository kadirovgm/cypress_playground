# Cypress terminal commands

## Install cypress 
### Go to repository path:
    cd /your/project/path
### Install cypress using npm packet manager (Make sure that Nade.js is installed)
    npm install cypress  --save-dev

## How to run cypress?

### The long way with the full path
    ./node_modules/.bin/cypress open

## Or with the shortcut using npm bin
    $(npm bin)/cypress open

## Or by using yarn
    yarn run cypress open

## Recommended: using npm scripts (package.json: scripts field):
    npm run cypress:open


