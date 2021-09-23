<template>
    <div v-if="disable">
        <div class="login_card">
            <v-card style="background-color:#01A7C2" :elevation="24">
                <v-card-subtitle class="login_card_title">New Account Regist</v-card-subtitle>
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
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn color="#DD7373" class="white--text" @click="toLoginPage" :elevation="6">Back Login</v-btn>
                            </v-col>
                            <v-spacer />
                            <v-col style="text-align: right;">
                                <v-btn color="primary" @click="register" :elevation="6">Regist</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
<script src="./Register.js"></script>
