<template>
<div class="container">
  <h2>ログイン</h2>
  <form class="login-form">
    <div class="input-group">
      <label for="email">メールアドレス</label>
      <input type="email" id="email">
    </div>
    <div class="input-group">
      <label for="password">パスワード</label>
      <input type="password" id="password">
    </div>
    <div class="input-group">
      <button type="button">送信</button>
    </div>
  </form>
</div>
</template>

<style>
.input-group {
  margin: 5px;
}
</style>