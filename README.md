## edgio-v7-render-with-app-issue
Deployed: https://edg-test-edgio-v7-render-with-app-issue-default.edgio.link

### Used versions
- Node 16
- NPM 8
- @edgio/* 7.2.7

### Steps to reproduce
#### 1. Deploy the app
```
git clone git@github.com:edg-test/edgio-v7-render-with-app-issue.git
cd edgio-v7-render-with-app-issue
npm install
npx edgio deploy
```

#### 2. Set origin shields for edgio_serverless
- Open edgio.app console
- Find your app and deployment
- Open Origins tab
- Find and open edgio_serverless origin
- Open shields section
- Set shields as following:
```
HKC - Hong Kong
FRB - Frankfurt
AGA - Atlanta
SEB - Seattle
```
- Deploy changes
- Visit the Edge URL of the deployment

#### 3. You should see the following error:
```
{"error":"Error: Serverless function with index  app not found.\n    at RequestContext.executeCompute (/var/task/internal/handler.cjs:28120:17)\n    at RequestContext.handleHint (/var/task/internal/handler.cjs:28105:22)\n    at RequestContext.executeServerless (/var/task/internal/handler.cjs:28086:22)\n    at RequestHandler.handle (/var/task/internal/handler.cjs:30931:29)\n    at /var/task/internal/handler.cjs:31053:29\n    at /var/task/internal/handler.cjs:6936:14\n    at withContext (/var/task/internal/handler.cjs:6901:12)\n    at /var/task/internal/handler.cjs:6935:12\n    at /var/task/internal/handler.cjs:31054:7\n    at async withLogging (/var/task/internal/handler.cjs:31099:12)"}
```