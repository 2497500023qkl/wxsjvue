<template>
    <div class="newsblock1" id="la">
        <home v-bind:data='add' />
                    <div class="blankline1"></div>
                        <div class="chatblock1">
        <img src="../assets/voice.png" alt=""  class="voice">
        <div><input type="text" class="inputbox" v-model:value="ac"></div>
        <img src="../assets/emoticon.png" alt="" class="emoticon">
        <img src="../assets/more2.png" alt="" class="more" @click="insert()">
    </div>
            <div class="topfoor1">
                    <img src="../assets/arrow2.png" alt="" class="arrow2" @click="cc()">
                    <div class="text">未来的CTO（24）</div>
                    <img src="../assets/more.png" alt="" class="more">
            </div>
    </div>

</template>
<script>
                import home from '@/components/home1.vue'
                 import axios from 'axios'
                import Vue from 'vue';
import { List } from 'vant';
export default {
            components: {
home
        },
mounted() {
  document.querySelector('body').setAttribute('style', 'background-color:#ececec')
  this.j=this.$route.query.MY;
  this.chat();
  this.upda();
  this.d=setInterval(this.cchat,5000);
  console.log(this.j)
},
updated(){
let ele =document.getElementById('la');
ele.scrollTop=ele.scrollHeight;
},
methods: {
    cc(){
        clearInterval(this.d)
        this.$router.push('/')
    },
chat(){
                        axios({
                            method:'post',
                            url:'http://127.0.0.1:8084/select/chat',
                            params: {
                                token:localStorage.getItem("token"),
                                username:this.j.username,
                                f:this.f++,
                            },
                            responseType: "json",
                    transformResponse:  (data) =>{
                        console.log(data)
                        if(this.add!=null){
                             for(var i=0; i<this.add.object.length;i++){
                            this.add.object=data.object.push(this.add.object[i]);
                        }    
                        }else{
                              this.add=data;
                        }
                       
                    },
                        })
},
upda(){
                        axios({
                            method:'post',
                            url:'http://127.0.0.1:8084/updata/chat',
                            params: {
                                token:localStorage.getItem("token"),
                                username:this.j.username,
                            },
                            responseType: "json",
                    transformResponse:  (data) =>{
                    },
                        })
},
cchat(){
axios({
                            method:'post',
                            url:'http://127.0.0.1:8084/select/nfchat',
                            params: {
                                token:localStorage.getItem("token"),
                                friend_id:this.j.id,
                            },
                            responseType: "json",
                    transformResponse:  (data) =>{
                        for(var i=0; i<data.object.length;i++){
                                this.add.object.push(data.object[i]);
                        }
                        this.upda();
                    },
                        })
},
insert(){
    if(this.ac==""){
                            return;
     }
    axios({
                            method:'post',
                            url:'http://127.0.0.1:8084/insert/chat',
                            params: {
                                token:localStorage.getItem("token"),
                                username:this.j.username,
                                content:this.ac
                            },
                            responseType: "json",
                    transformResponse:  (data) =>{
                        this.ac="";
                        this.chat();
                    },
                        })
},
        },
data() {
    return {
        j:null,
        add:null,
        ac:"",
        d:null,
        f:0,
    }
},
beforeDestroy() {
  document.querySelector('body').removeAttribute('style')
}
}
</script>
<style lang="scss" >
$bottom-color:#f7f7f7;
*{
    margin:0 auto;
    padding:0 auto;
}
.chatblock1{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: $bottom-color;
    padding-top: 5px;
    display: flex;
    img{
        width: 30px;
        height: 30px;
        margin: 6px;
    }
    div{
        flex-grow:1;
        .inputbox{
            width: 100%;
            margin-top: 4px;
            height: 30px;
            font-size: 20px;
            border: 0;
        }
    }
}
.topfoor1{
    position: fixed;
    width: 100%;
    font-size: 20px;
    line-height:0px;
    height: 50px;
    top: 0px;
    background-color: $bottom-color;
    .arrow2{
        float: left;
        width: 30px;
        margin-top: 15px;
        margin-right: 20px;
        margin-left: 10px;
    }
    .more{
        float: right;
        width: 30px;
        margin-top: 15px;
        margin-right: 10px;
    }
    .text{
        float: left;
        margin-top:30px ;
    }
}
.newsblock1::-webkit-scrollbar {
        display: none;
    }
.newsblock1{
    background-color: #ececec; 
    margin-top: 60px;
    display: flex;
    overflow: auto;
    height: calc(100vh - 95px);
    flex-direction:column;
    .date{
        width: 100%;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        color:rgb(173, 165, 165);
        font-size: 15px;
    }
    .news{
        width: 100%;
        margin-bottom: 5px;
        .headportrait{
            float: left;
            margin-left: 5px;
            img{
                width: 60px;
                height: 60px;
            }
        }
        .chatcontent1{
            max-width: calc(100%  -  160px);
            padding-left: 20px;
            position: relative;
                                background-color: #ececec; 
            .username{
                margin-bottom: 5px;
                font-size: 20px;
            }
            .information{
                min-width: 10px;
                display: inline-block;
                word-break:break-all;
                padding-top: 5px;
                border-radius:5px;
                border: 1px solid #fff;
                padding-bottom: 5px;
                padding-left: 5px;
                padding-right: 5px;
                background-color: #fff;
                min-width: 10px;
                   font-size: 15px;
                span{
                    display: block;
                    margin: 5px 10px;
                }
            }
            .location{
                position: absolute;
                top: 40px;
                left: 0px;
                width:0;
                height:0;
                border: 10px solid;
                border-color:transparent #fff transparent transparent;
            }
        }
    }
    .news1{
             width: 100%;
        margin-bottom: 5px;
        .headportrait{
            float: right;
            margin-left: 5px;
            img{
                width: 60px;
                height: 60px;
            }
        }
        .chatcontent1{
            max-width: calc(100%  -  160px);
            padding-right: 20px;
            position: relative;
                        float: right;
                                background-color: #ececec; 
            .username{
                                text-align: right;
                margin-bottom: 5px;
                font-size: 20px;
            }
            .information{
                min-width: 10px;
                display: inline-block;
                word-break:break-all;
                padding-top: 5px;
                border-radius:5px;
                border: 1px solid #fff;
                padding-bottom: 5px;
                padding-left: 5px;
                padding-right: 5px;
                background-color: #fff;
                min-width: 10px;
                   font-size: 15px;
                span{
                    display: block;
                    margin: 5px 10px;
                }
            }
            .location{
                position: absolute;
                top: 45px;
                right: 0px;
                width:0;
                height:0;
                border: 10px solid;
                border-color:transparent transparent transparent #fff;
            }
        }
    }
}
.blankline1{
    height: 50px;
    width: 100%;
    float: left;
}
</style>