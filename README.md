# TripWeGo ✈️
All-in-one solution for your travel.

## Get started
You need to have the following requirements for running this app 
1) Node.js (v18)
2) Sequelize CLI
2) MySQL server

First, clone the repo
```bash
git clone https://github.com/siddeshwarnavink/tripwego-travel-app
```

Then install the dependencies
```bash
npm install
```

Create a ```.env``` and provide your database config. Refer ```.env.example``` for reference. Then to setup database, run

```bash
sequelize db:migrate
sequelize db:seed:all
```

Finally, to start a dev server

```bash
npm run dev
```

## Contributing Content
Edit and fix the sit. Feel free to submit PRs for small issues. For large issues or features open an issue first.

First, fork this repo on Github.

```
git clone <your-forked-repo>
npm install
npm run dev

git checkout -b my-fix
```

## Fix some code
Find something wrong which is need to be fixed?  Make the changes in a branch and run the following code:

```
git commit -m "fix: corrected a typo"
git push origin my-fix
```
