<template>
  <div class="container">
    <!--电影列表开始-->
    <div class="list">
      <ul>
        <li v-for="v in msg" :key="v.id">
          <a href="javascript:;" @click="$router.push('/details/'+v.id)">
            <!-- 浏览器解析 src 的时机要比 angular 解析表达式的时机要早！
                因此，浏览器会把 {{ movie.images.large }} 当作图片的路径来请求
               -->
            <img :src="v.images.large" alt="">
          </a>
          <div class="meta">
            <h4><span>{{v.title}}</span><em>{{v.rating.average}}分</em></h4>
            <div class="otherinfo">类型:<span v-for="v in v.genres" :key="v.id">{{v}}</span></div>
          </div>
        </li>
      </ul>
      <div class="paging">
        <label>总共：{{total}}条记录,第{{page}}/{{totalPage}}页;</label>
        <!-- 加上disable类样式，表示按钮禁用状态 -->
        <button class="prev" :class="{disable:page<=1}" @click="goPage(page-1)">上一页</button>
        <button class="next" :class="{disable:page>=totalPage}" @click="goPage((page-0)+1)">下一页</button>
      </div>
    </div>
    <!--电影列表结束-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: '',
        page:'',
        totalPage:'',
        total:'',
        pagesize:5,
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData: function() {
        var url = "https://api.douban.com/v2/movie"+this.$route.path;
        //打印出$route ,查看路由信息？后面的信息在$route.query中
        // console.log(this.$route)
        var _this=this;
        _this.$store.commit('markOff');
         _this.page=_this.$route.query.page || 1;
        var params = {
          count: _this.pagesize,
          start: (_this.page-1)*_this.pagesize,
          q:_this.$route.query.q
        };
        this.jsonp(url, params, function(res) {
          _this.msg = res.subjects;
          _this.page=_this.$route.query.page||1;
          _this.totalPage=Math.ceil(res.total/5); 
          _this.total=res.total;
          _this.$store.commit('markOn');
          // console.log(res);
        })
      },
      goPage:function(n){
        if(n<1||n>this.totalPage){
          return false;
        }
        var _this=this;
        this.page=n;
        this.$router.push(this.$route.path+'?page='+this.page+'&q='+this.$route.query.q);
      }
    },
    //监控路由，改变路由加载组件
    watch:{
      '$route':function(){
        this.$store.commit('markOff');
        this.getData();
      }
    }
  }
</script>
