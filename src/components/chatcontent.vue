<template>
   <div  class="chatcontent">
   <div class="di"    v-for="i in qq" @click="t(i)">
           <div class="img">
               <img v-bind:src="i.avatar" alt="" v-if="i.avatar!='#'">
               <img src="../assets/head5.jpg"  alt="" v-else>
           </div>
           <div class="content">
               <div class="timename">
                   <div class="name"><b>{{i.nickname}}</b></div>
                    <div class="time">新</div>
                   <div class="time">{{i.created_at}}</div>
               </div>
               <div class="information"><span>{{i.content}}</span></div>
           </div>
           </div>

       </div>
</template>
    <script>
    </script>
    
<script>
export default {
  name: 'chatcontent',
    components: {
      
    },
  props: ["qq"]
  ,
  
   mounted(){
    
 },
              methods:{
                  t(i){
                             this.$router.push({path:'/home',query:{MY:i}})
                  }
     },
data() {
  return {
    
  }
},
}
</script>
<style lang="scss">

    .chatcontent{
        padding: 10px 0 0 0;
                background:#fff;

.di{
            background:#fff;
          display: flex;
          width: 100%;
           .img{
                width: 50px;
                height:50px;
                padding-top:5px;
                margin-left: 7.5px;
                img{
                width: 50px;
                height:50px;
                }
        }
        .content{
            width: 100%;
            height: 60px;
            font-size: 15px;
            overflow: hidden; 
            margin-left: 18px;
            border-bottom: 0.1px solid #ececec;
            .timename{
                width: 100%;
                height: 25px;
                margin-top:7.5px;
                .name{
                    float: left;
                }
                .time{
                    float: right;
                    opacity:0.3; 
                    margin-right: 5%;
                }
            }
            .information{
                float: left;
                opacity:0.3; 
                width: 85%;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
}
       
    }
</style>
