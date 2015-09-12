var chat = new Firechat(firebaseRef);
chat.setUser(userId, userName, function(user) {
  chat.resumeSession();
});
