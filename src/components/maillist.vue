<template>
  <div class="chatcontent">
    <div class="a" v-for="i in dd">
      <div class="b" v-if="i.nickname!=null">
        <div class="img">
          <img v-bind:src="i.avatar" alt />
          <div class="content">
            <span>{{i.nickname}}</span>
          </div>
        </div>
      </div>
      <div class="b" v-else v-for="j in i">
        <div class="img">
          <img v-bind:src="j.avatar" alt />
          <div class="content">
            <span @click="chat(j)">{{j.nickname}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page">
      <div class="content2">
        <span></span>
      </div>
      <div class="img1">{{dd.length-3}}位联系人</div>
    </div>
  </div>
</template>
    <script>
</script>
    
<script>
export default {
  name: "chatcontent",
  components: {},
  props: ["dd", "page"],
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f7f7f7");
  },
  methods: {
    //                  updata(my){
    //  this.$router.push({path:'/home',query:{MY:my}})},
    chat(j){
      this.$router.push({path:'/home',query:{MY:j}})
    },
  },
  data() {
    return {};
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};
</script>


<style lang="scss">
$bottom-color: #ececec;
.blankline {
  height: 45px;
  width: 100%;
  float: left;
  background: #fff;
}
.grouping {
  background-color: #f7f7f7;
  font-size: 15px;
  min-height: 10px;
  line-height: 26px;
  div {
    margin-left: 6px;
  }
}
.chatcontent {
  width: 100%;
  .img1 {
    background: #fff;
    text-align: center;
    width: 100%;
  }
  .content2 {
    background: #fff;
    width: 100%;
    height: 37.5px;
    overflow: hidden;
    border-bottom: 0.1px solid $bottom-color;
    line-height: 37.5px;
  }
  .a {
    // margin-bottom:12px;
    .b {
      background: #fff;
      width: 100%;
      height: 38.6px;
      .img {
        display: flex;
        height: 38.6px;

        img {
          width: 30px;
          height: 30px;
          margin-top: 4.5px;
          margin-left: 7.5px;
        }
      }
      .content {
        width: 100%;
        height: 39.6px;
        font-size: 15px;
        overflow: hidden;
        margin-left: 2%;
        border-bottom: 0.1px solid $bottom-color;
        line-height: 38.6px;
      }
    }
  }
}
</style>
