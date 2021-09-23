<template>
    <v-app>
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
                <router-view :key="$route.path"/>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data() {
        return{
            drawer: true,
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