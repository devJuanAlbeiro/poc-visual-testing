# React App with Cypress & Percy Example

This is example project for React.js with Cypress & Percy.

# Setup

## First Step

Please make sure your PC have installed Node.js & yarn.

```
% node -v
v14.xx

% yarn -v
1.22.10
```

Also you need install dependencies.

```
yarn install
```

## Install Cypress

Plase install Cypress client:

https://www.cypress.io/

You can read this docs & try to install it:

https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

## Craete Percy project

Actually, we can use Cypress without Percy.
So this is optional step, so feel free to choose.

Create Percy project & get your token:

https://percy.io/login

After get your token, set your local env:

```
export PERCY_TOKEN=***********
```

## Run Cypress

You can check Cypress is running with the following command:

```
yarn cy:run-ci
```

You can check test result.

```

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  app.spec.js                              403ms        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        403ms        2        2        -        -        -  

✨  Done in 24.80s.
```

Also you can check your Percy result on your Percy project.
