module.exports = {
  getPosts(request, response) {
    response
      .status(200) // OK
      .send(request.store.posts);
  },
  addPost(request, response) {
    const id = request.store.posts.length;
    const post = request.body;

    request.store.posts.push(post);

    response
      .status(201) // Created
      .send({ id });
  },
  updatePost(request, response) {
    const id = request.params.id;
    request.store.posts[id] = Object.assign(request.store.posts[id], request.body);

    response
      .status(200) // OK
      .send(request.store.posts[id]);
  },
  removePost(request, response) {
    request.store.posts.splice(request.params.id, 1);

    response
      .status(204) // No Content
      .send();
  }
};
