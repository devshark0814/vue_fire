<template>
    <v-card class="login_card">
        <v-card-text class="login_card_text">
            <v-container>
                <v-row>
                    <v-col>
                        <span class="black--text">メールアドレス</span>
                    </v-col>
                    <v-col>
                        <v-text-field
                            solo
                            v-model="email"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <span class="black--text">パスワード</span>
                    </v-col>
                    <v-col>
                        <v-text-field
                            solo
                            v-model="password"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn color="primary" @click="login">ログイン</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script src="./Login.js"></script>
<style>
    .login_card {
        margin: 0 !important;
        padding: 0 !important;
        position: relative !important;
        min-width: 600px !important;
        min-height: 400px !important;
        background-color: bisque !important;
    }
    .login_card_text {
        margin: -200px 0 0 -300px !important;
        position: absolute !important;
        top: 100% !important;
        left: 50% !important;
        width: 600px !important;
        height: 400px !important;
        background-color: aqua !important;
    }
</style>