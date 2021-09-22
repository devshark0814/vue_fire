import axios from "@/commonJs/axios-for-auth.js"; //axiosのインスタンスをインポート
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        register() {
            //axiosでapiを叩くメソッドを定義
            axios
                .post("/accounts:signUp?key=AIzaSyCi34xLHR-Gql4lmLD4UkNrbrXOf58oSLk", {
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true
                })
                .then(response => {
                    console.log(response); //返ってきたレスポンスをログに表示
                    this.$store.commit('updateIdToken', response.data.idToken);
                    this.$router.push('/');
                });
            this.email = "";
            this.password = "";
        }
    }
};
