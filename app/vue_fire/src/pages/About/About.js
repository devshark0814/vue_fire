export default {
    methods: {
        logout() {
            this.$store.commit("updateIdToken", null);
            this.$router.push("/login");
        }
    }
};
