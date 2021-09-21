<template>
    <div class="container">
        <h2>ログイン</h2>
        <form class="login-form">
            <div class="input-group">
                <label for="email">メールアドレス</label>
                <input type="email" id="email" v-model="email"/>
            </div>
            <div class="input-group">
                <label for="password">パスワード</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <div class="input-group">
                <button type="button" @click="login">送信</button>
            </div>
        </form>
    </div>
</template>
<script src="./Login.js"></script>
<style>
    .input-group {
        margin: 5px;
    }
</style>