<template>
    <v-app style="background-color:#007090">
        <router-view></router-view>
    </v-app>
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
