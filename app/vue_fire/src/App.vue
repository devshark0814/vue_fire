<template>
    <div>
        <v-app>
            <template v-if="!isLoggedIn">
                <loginComponent />
            </template>
            <template v-else>
                <v-navigation-drawer app v-model="drawer">
                    <menu-component />
                </v-navigation-drawer>

                <v-app-bar app style="background-color: #007090;">
                    <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer">
                    </v-app-bar-nav-icon>
                    <v-spacer />
                    <v-btn color="#01a7c2" class="white--text" @click="logout">Logout</v-btn>
                </v-app-bar>

                <v-main style="background-color: #e6fbff;">
                    <v-container fluid>
                        <router-view></router-view>
                    </v-container>
                </v-main>
            </template>
        </v-app>
    </div>
</template>
<script>
    import loginComponent from "@/pages/Login/Login.vue";
    export default {
        components: {
            loginComponent
        },
        data() {
            return{
                drawer: true,
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.idToken !== null;
            }
        },
        methods:{
            logout() {
                this.$store.commit("updateIdToken", null);
                this.$router.push("/login");
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
