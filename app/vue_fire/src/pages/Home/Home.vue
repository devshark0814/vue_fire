<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer" class="navi">
        </v-navigation-drawer>

        <v-app-bar app style="background-color: #007090;">
            <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer">
            </v-app-bar-nav-icon>
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
};
</script>
<style>
.navi {
    background: linear-gradient(to bottom, rgba(2,0,36,1) 0%, rgba(0,112,144,0.9192051820728291) 33%, rgba(255,255,255,1) 98%) !important;
}
</style>