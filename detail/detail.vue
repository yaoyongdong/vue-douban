<template>
  <!-- 电影详情开始 -->
  <div class="detail" v-if="iscreated">
    <h1>{{data.title}}</h1>
    <div class="dt-info">
      <div class="dti-i"><img :src="data.images.large" alt=""></div>
      <div class="dti-w">
        <p>
          <strong>导演：</strong>
          <span v-for="(v,k) in data.directors" :key="v.id">{{v.name}}{{data.directors.length==(k+1)?'':'、'}}</span>
        </p>
        <p>
          <strong>主演：</strong>
          <span v-for="(v,k) in data.casts" :key="v.id">{{v.name}}{{data.casts.length==(k+1)?'':'、'}}</span>
        </p>
        <p><strong>类型：</strong>{{data.genres.join('、')}}</p>
        <p><strong>国家：</strong>{{data.countries.join('、')}}</p>
        <p><strong>评分：</strong>{{data.rating.average}}</p>
        <p><strong>时间：</strong>{{data.year}}</p>
        <p><strong>又名：</strong>{{data.aka.join('、')}}</p>
      </div>
    </div>
    <h3>剧情简介:</h3>
    <p style="color:#676767">{{data.summary}}</p>
  </div>
  <div v-else></div>
  <!-- 电影详情结束 -->
</template>
<script>
  export default {
    data() {
      return {
        data: "",
        iscreated: false
      }
    },
    // beforeRouteEnter(to, from, next) {  
    //   next(vm => {
    //     var _this = vm;
    //     //展示遮罩层
    //     // _this.$store.commit('markOff');
    //     var url = "https://api.douban.com/v2/movie/subject/" + _this.$route.params.id;
    //     _this.jsonp(url, {}, function(res) {
    //       _this.data = res;
    //       //隐藏遮罩层
    //       _this.$store.commit('markOn');
    //       // console.log(_this.$store.state)
    //       console.log(_this.data);
    //     })
    //   });
    // },
    created() {
      this.render();
    },
    methods: {
      render: function() {
        var _this = this;
        //展示遮罩层
        _this.$store.commit('markOff');
        var url = "https://api.douban.com/v2/movie/subject/" + _this.$route.params.id;
        _this.jsonp(url, {}, function(res) {
          _this.iscreated = true;
          _this.data = res;
          //隐藏遮罩层
          _this.$store.commit('markOn');
          // console.log(_this.$store.state)
          console.log(_this.data);
        })
      }
    }
  }
</script>
