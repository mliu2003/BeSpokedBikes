# BeSpoked Bikes Exercise
# Author: Max Liu

Frontend: `npm start` or `npm run frontend`, localhost:3000
Middle Tier: `npm run middletier`, localhost:3001/(call)

# Note:
As it currently stands, my computer is unable to run MySQL or any database manager/application (due to old age, low storage). Due to this, I have chosen to create a simple "pseudo-database" using a JSON file (see `data.json`). I've also added an example SQL file (`data.sql`) that can hopefully showcase what I was trying to simulate. That being said, Please keep this design choice in mind, as some parts of the code are obviously going to be less inefficient and uglier.

Also, just as note- my useEffect function doesn't seem to be working all the time. Specifically when trying to update salespeople/products, the page may need a reload to show changes.