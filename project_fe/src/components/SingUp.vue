<template>
  
    
        <div class="register">
            <img class="logo" src="../assets/images/logo.png">
            <h1>Sign Up</h1>
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password">
            <button v-on:click="singUp">Sing Up</button>
      
        </div>
    </template>
        <script>
        import axios from 'axios';
        export default {
            name : 'SingUp',
            data()
            {
                return{
                    name:'',
                    email:'',
                    password:''
                }
            },
            methods:{
               async singUp(){
                    let result = await axios.post("http://localhost:3000/user",{
                       email: this.email,
                       password:this.password,
                       name:this.name
                    });
                    console.warn(result);
                    if(result.status==201)
                    {
                        alert("sing-uo done")
                    }

                }
            }

        }
        </script>
      <style scoped >
      .logo{ 
      width:100px;
      height: 100px;
       }
      .register input {
      width: 300px;
      height: 40px;
      padding-left: 20px;
      display: block;
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;
      border: 1px solid skyblue;
      }
      .register button {
      width: 320px;
      height: 40px;
      border: 1px solid skyblue;
      background: skyblue;
      color: #fff;
      cursor: pointer;
      }
      .register h1 {
        text-align: center;
      }
      .register img{
       margin-left: 100px;
      }
      .register{
       margin-left: 40%;
      }
      </style>



