module.exports = {
  getComments(request, response) {
    response
      .status(200) // OK
      .send(request.store.posts[request.params.postId].comments);
  },
  addComment(request, response) {
    const postId = request.params.postId;
    const comments = request.store.posts[postId].comments;
    const commentId = comments.length;

    comments.push(request.body);

    response
      .status(201) // Created
      .send({ commentId });
  },
  updateComment(request, response) {
    const { postId, commentId } = request.params;

    request.store.posts[postId].comments[commentId] = Object.assign(
      request.store.posts[postId].comments[commentId],
      request.body
    );

    response
      .status(200) // OK
      .send(request.store.posts[postId].comments[commentId]);
  },
  removeComment(request, response) {
    const { postId, commentId } = request.params;

    request.store.posts[postId].comments.splice(commentId, 1);

    response
      .status(204) // No Content
      .send();
  }
};
