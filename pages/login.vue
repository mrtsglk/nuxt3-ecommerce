<template>
    <div>
      <div class="title">
        <h2>Üye Girişi</h2>
      </div>
      <div class="container form mx-auto login-box bg-gray-900">
        <label for="uname"><b>Kullanıcı Adı</b></label>
        <input
          v-model="user.username"
          type="text"
          class="input"
          placeholder="Kullanıcı Adı"
          name="uname"
          required
        />
  
        <label for="psw"><b>Şifre</b></label>
        <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Şifreniz"
          name="psw"
          required
        />
  
        <button @click.prevent="login" class="button">Giriş Yap</button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  
  const { authenticateUser } = useAuthStore();
  
  const { authenticated } = storeToRefs(useAuthStore());
  
  const user = ref({
    username: 'kminchelle',
    password: '0lelplR',
  });
  const router = useRouter();
  
  const login = async () => {
    await authenticateUser(user.value);
    
    if (authenticated) {
      router.push('/');
    }
  };
  </script>
  <style lang="scss">
  .title {
    display: flex;
    justify-content: center;
  }
  .container {
    padding: 16px;
  }
  .form {
    border: 3px solid #f1f1f1;
    border-radius: 10px;
    .input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    .button {
      background-color: #04aa6d;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
    }
  
    .button:hover {
      opacity: 0.8;
    }
    .cancelbtn {
      width: auto;
      padding: 10px 18px;
      background-color: #f44336;
    }
  
    span.psw {
      float: right;
      padding-top: 16px;
    }
  
    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
      span.psw {
        display: block;
        float: none;
      }
      .cancelbtn {
        width: 100%;
      }
    }
  }
  </style>