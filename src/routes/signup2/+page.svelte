<div>
  <div class="welcome">
    <h1>Welcome!</h1>
  </div>
</div>

<div class="E">
  <div class="center">
    <div>
      Please enter a username:
      <input type="text">
    </div>
    <div>
      Create a password:
      <input type="password">
    </div>
  </div>
</div>

<div class='error-messages'>
  <div>
    error-msg1: That username is already taken.
    error-msg2: Username too long
    error-msg3: User contains unsupported characters
  </div>
</div>


<div class="button">
  Create your account:
  <input type="button">
</div>

<style>
    .welcome {
  display: flex;
  justify-content: center;
}

.E {
  display: flex;
  justify-content: center;
}

.button {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>