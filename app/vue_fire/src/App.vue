<template>
  <div>
    <header class="header">
      <router-link to="/" class="header--link">トップ</router-link>
      <router-link to="/about" class="header--link">詳細</router-link>
      <router-link to="/login" class="header--link">ログイン</router-link>
      <router-link to="/register" class="header--link">新規登録</router-link>
    </header>
    <router-view></router-view> 
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  display: flex;
  justify-content: center;
}
.header--link {
  padding: 10px;
}
</style>
