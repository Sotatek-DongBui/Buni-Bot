# buni-api-islands

## Running application
- Create `.env` from `.env.example` file
- Start service
```
npm i
npm run start:dev
```
- APIs are served at http://localhost:3001 by defaut
- View swagger docs at http://localhost:3001/docs

## Deploy in production
- Install pm2
- Create `.env` from `.env.example` file
- Start service
```
npm i
npm run build
pm2 start 1_app.json
```

## Export api for integrating with other microservices
Everytime the API contract is changed, run this command to generate api classes, commit all `output-specs` folder, and inform all microservices which depend on this service to update the newest specs.
```
npx swagger-typescript-api -p ./output-specs/api-islands.json -o ./output-specs/ -n api-islands.ts --axios --responses --module-name-index 2
```
