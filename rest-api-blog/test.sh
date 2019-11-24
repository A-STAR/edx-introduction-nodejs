# get posts
curl "http://localhost:3000/posts"

# get comments
curl "http://localhost:3000/posts/0/comments"

# post comment
curl -H "Content-Type: application/json" -X POST -d '{ "text": "wow" }'  "http://localhost:3000/posts/0/comments"

# update comment
curl -H 'Content-Type: application/json' -X PUT -d '{ "text": "Wow" }' "http://localhost:3000/posts/0/comments/3"

# get comments
curl "http://localhost:3000/posts/0/comments"

# delete comment
curl -X DELETE "http://localhost:3000/posts/0/comments/3"

# post post
curl -H "Content-Type: application/json" -X POST -d '{ "name": "Top 10 ES6 Features", "url": "http://webapplog.com/es6", "text": "" }'  "http://localhost:3000/posts"

# update post
curl -H 'Content-Type: application/json' -X PUT -d '{ "name": "Top 10 ES6 Features Every Developer Must Know", "url": "http://webapplog.com/es6", "text": "" }' "http://localhost:3000/posts/1"

# get posts
curl "http://localhost:3000/posts"

# delete post
curl -X DELETE "http://localhost:3000/posts/1"