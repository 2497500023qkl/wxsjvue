<template>
        <div class="topfoor">
            <div class="text">{{n}}</div>
            <div class="img">
                <img src="../assets/query.png" alt="" class="query">
                <img src="../assets/more.png" alt="" class="more">
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
  props: ['n']
  ,
   mounted(){
 },
              methods:{
      //                  updata(my){
      //  this.$router.push({path:'/home',query:{MY:my}})},

     },

}
</script>
<style lang="scss">
$bottom-color:#ececec;
.topfoor{
    position: fixed;
    width: 100%;
    font-size: 18px;
    padding-top: 4.5px;
    height: 33px;
    top: 0px;
    background-color: $bottom-color;
    .text{
        float: left;
        margin-left: 7.5px;
    }
    .img{
        float: right;
        padding-top: 4.5px;
        img{
            width: 18px;
            height: 18px;
        }
        .query{
            margin-right: 18px ;
        }
        .more{
            margin-right: 2px;
        }
    }
}
</style>
