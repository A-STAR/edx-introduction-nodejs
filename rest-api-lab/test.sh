# posts account data
curl -H "Content-Type: application/json" -X POST -d '{ "balance": 100, "name": "checking" }'  "http://localhost:3000/accounts" -iv

# updates account data at a specified id
curl -H 'Content-Type: application/json' -X PUT -d '{ "balance": 200, "name": "savings" }'  "http://localhost:3000/accounts/0"

# gets accounts data
curl "http://localhost:3000/accounts"

# deletes account data at a specified id
curl -X DELETE "http://localhost:3000/accounts/0"