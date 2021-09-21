<template>
    <div>
        <header class="header">
            <router-link to="/" class="header--link">トップ</router-link>
            <router-link to="/about" class="header--link" v-if="isLoggedIn">詳細</router-link>
            <router-link to="/login" class="header--link" v-if="!isLoggedIn">ログイン</router-link>
            <router-link to="/register" class="header--link" v-if="!isLoggedIn">新規登録</router-link
            >
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        computed: {
            isLoggedIn() {
                return this.$store.getters.idToken !== null;
            }
        }
    };
</script>
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
