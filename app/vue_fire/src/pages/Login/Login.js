import axios from "@/commonJs/axios-for-auth.js"; //axiosのインスタンスをインポート
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        login() {
            //axiosでログイン用のインスタンスにアクセスするメソッドを定義
            axios
                .post(
                    //エンドポイントのURLがログイン用のものを使う
                    "/accounts:signInWithPassword?key=AIzaSyCi34xLHR-Gql4lmLD4UkNrbrXOf58oSLk",
                    {
                        email: this.email, //送る情報は新規登録と同じ
                        password: this.password,
                        returnSecureToken: true
                    }
                )
                .then(response => {
                    console.log(response); //返ってきたレスポンスをログに表示
                    this.$store.commit('updateIdToken', response.data.idToken);
                    this.$router.push('/');
                });
            this.email = "";
            this.password = "";
        },
        toNewAccountPage() {
            this.$router.push('/register');
        }
    }
};
