       <template>
       <div class="c" v-if="data!=null">
       <div class="a1" v-for="i in  data.object">
               <div class="date">{{i.created_at}}</div>
        <div class="news" v-if="i.user_id!=data.tips">
            <div class="headportrait"><img v-bind:src="i.img" alt=""></div>
            <div class="chatcontent1">
                <div class="location"></div>
                <div class="information">
                    <span>{{i.content}}</span>
                </div>
            </div>
        </div>
                <div class="news1" v-else>
            <div class="headportrait"><img v-bind:src="i.img" alt=""></div>
            <div class="chatcontent1">
                <div class="location"></div>
                <div class="information">
                    <span>{{i.content}}</span>
                </div>
            </div>
        </div>
        </div>
        </div>
    </template>
    <script>
export default {
    components: {
    },
  props: ['data']
  ,
   mounted(){
       console.log(this.data);
 },
    methods:{
     },
data() {
    return {
    }
},
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
            margin-top: 8px;
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
.c{
    width:100%;
    background-color: #ececec; 
    display: flex;
    flex-direction:column;
.a1{
    display: flex;
        flex-direction:column;
    width:100%;
    margin:0;
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
            .information{
                min-width: 10px;
                display: inline-block;
                word-break:break-all;
                margin: 10px 0 0 0;
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
                top: 20px;
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
            .information{
                min-width: 10px;
                display: inline-block;
                word-break:break-all;
                margin:10px 0 0 0 ;
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
                top: 25px;
                right: 0px;
                width:0;
                height:0;
                border: 10px solid;
                border-color:transparent transparent transparent #fff;
            }
        }
    }
}
}
.blankline{
    height: 50px;
    width: 100%;
    float: left;
}
</style>