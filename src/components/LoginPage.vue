<template>
  <v-container fluid>
      <v-row>
          <v-col cols="12" class="text-center my-5">
              <h1 class="display-1">로그인 페이지</h1>
          </v-col>
      </v-row>
      <v-row>
          <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
              <form @submit.prevent="fnDoLogin">
                  <v-text-field name="Email" label="이메일" type="email" v-model="email" required></v-text-field>
                  <v-text-field name="Password" label="비밀번호" type="password" v-model="password" required></v-text-field>
                  <v-btn type="submit" v-if="!fnGetLoading" color="orange" dark>로그인</v-btn>
                  <v-progress-circular
                  v-if="fnGetLoading"
                  indeterminate
                  :width="7"
                  :size="70"
                  color="grey lighten-1"
                  >
                  </v-progress-circular>
                  <v-alert class="mt-3" type="error" dismissible v-model="alert">{{fnGetErrMsg}}</v-alert>
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
            email:'',
            password:''
        }
    },
    computed:{
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage;
        },
        fnGetLoading(){
            return this.$store.getters.fnGetLoading;
        }
    },
    methods:{
        fnDoLogin(){
            this.$store.dispatch('fnDoLogin',{
                email:this.email,
                password:this.password
            })
        }
    },
    watch:{
        fnGetErrMsg(msg){
            if(msg) this.alert = true;
        },
        alert(value){
            if(value==false) this.$store.commit('fnSetErrorMessage','')
        }
    }
}
</script>

<style>

</style>