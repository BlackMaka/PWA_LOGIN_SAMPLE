<template>
  <v-container fluid>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">회원가입 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <form @submit.prevent="fnRegisterUser">
                    <v-text-field name="Email" label="이메일" type="email" v-model="email" required></v-text-field>
                    <v-text-field name="Password" label="비번" type="password" v-model="password" required></v-text-field>
                    <v-text-field
                        name="ConfirmPassword"
                        label="비번 확인"
                        type="password"
                        v-model="confirmPassword"
                        required
                        :rules="[fnComparePassword]"
                    >
                    </v-text-field>
                    <v-btn type="submit" v-if="!fnGetLoading" color="orange" dark>회원가입</v-btn>
                    <v-progress-circular
                        v-if="fnGetLoading"
                        indeterminate
                        :width="7"
                        :size="70"
                        color="grey lighten-1"
                    >
                    </v-progress-circular>
                </form>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            alert:false,
            email:"",
            password:"",
            confirmPassword:""
        }
    },
    computed:{
        fnComparePassword(){
            if(this.password == this.confirmPassword) return true;
            else return "비밀번호가 일치하지 않습니다."
        },
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage;
        },
        fnGetLoading(){
            return this.$store.getters.fnGetLoading;
        }
    },
    methods:{
        fnRegisterUser(){
            if(this.fnComparePassword == true){
                this.$store.dispatch('fnRegisterUser',{
                    email:this.email,
                    password:this.password
                })
            }
        }
    },
    watch:{
        fnGetErrMsg(msg){
            if(msg) this.alert = true;
        },
        alert(value){
            if(value == false) this.$store.commit('fnSetErrorMessage', "");
        }
    }
}
</script>

<style>

</style>