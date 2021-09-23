<template>
    <div>
        <div class="login_card">
            <v-card style="background-color:#01A7C2" :elevation="24">
                <v-card-subtitle class="login_card_title">Login</v-card-subtitle>
                <v-card-text>
                    <v-container>
                        <v-row dense>
                            <v-col>
                                <v-text-field
                                    solo
                                    rounded
                                    v-model="email"
                                    label="e-mail"
                                />
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col>
                                <v-text-field
                                    solo
                                    rounded
                                    v-model="password"
                                    label="password"
                                    type="password"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn color="#DD7373" class="white--text" @click="toNewAccountPage" :elevation="6">New Account</v-btn>
                            </v-col>
                            <v-spacer />
                            <v-col style="text-align: right;">
                                <v-btn color="primary" @click="login" :elevation="6">Login</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
        <registerComponent ref="registCom" :disable="registFlag" @registComClose="registComClose" />
    </div>
</template>
<script src="./Login.js"></script>
<style>
.login_card {
    width: 30% !important;
    left: 37% !important;
    top: 35% !important;
    position: absolute !important;
}
.login_card_title{
    text-align: center !important;
    color: white !important;
    font-weight: bold !important;
    font-size: 20px !important;
}
</style>