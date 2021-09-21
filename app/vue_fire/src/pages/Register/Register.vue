<template>
    <div class="container">
        <h2>新規登録</h2>
        <form class="login-form">
            <div class="input-group">
                <label for="email">メールアドレス</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <div class="input-group">
                <label for="password">パスワード</label>
                <input type="password" id="password" v-model="password" />
            </div>
            <div class="input-group">
                <button type="button" @click="register">新規登録</button>
            </div>
        </form>
    </div>
</template>
<script src="./Register.js"></script>
