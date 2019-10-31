<template>
        <div class="navigation">
        <div class="wechat" @click="t('1',p)"><span class="wechat2" v-if="p==1"><img src="../assets/wechat2.png" alt="">微信</span><span v-else><img src="../assets/wechat.png" alt="">微信</span></div>
        <div class="maillist" @click="t('2',p)"><span class="wechat2" v-if="p==2"><img src="../assets/maillist2.png" alt="">通讯录</span><span v-else><img src="../assets/maillist.png" alt="">通讯录</span></div>
        <div class="find" @click="t('3',p)"><span class="wechat2" v-if="p==3"><img src="../assets/find2.png" alt="">发现</span><span v-else><img src="../assets/find.png" alt="">发现</span></div>
        <div class="i" @click="t('4',p)"><span class="wechat2" v-if="p==4"><img src="../assets/i2.png" alt="">我</span><span v-else><img src="../assets/i.png" alt="">我</span></div>
        </div>
</template>
    <script>
    </script>
    
<script>
export default {
  name: 'chatcontent',
    components: {
    },
  props: ['p']
  ,
   mounted(){
 },
              methods:{
                       t(i,q){
                           if(i=='1'&&q!=1){
       this.$router.push('/')

                           }else if(i=='2'&&q!=2){
       this.$router.push('/maillist')
                           }else if(i=='3'&&q!=3){
                                      this.$router.push('/find')
                           }else if(i=='4'&&q!=4){
                                      this.$router.push('/i')
                           }
       },

     },
data() {
    return {
    }
},
}
</script>
<style lang="scss">
$bottom-color:#ececec;
.navigation{
    width:100%;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: $bottom-color;
    padding-top: 4px;
    div{
        float: left;
        width: 25%;
        height: 37.5px;
        font-size: 9px;
        span{
                    text-align: center;
                    display: flex;
                     flex-direction: column;
        }
        img{
            width: 20px;
            height: 20px;
        }
    }
    .wechat2{
        color: green;
    }
}
</style>
