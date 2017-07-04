<template>
  <!-- 顶部导航栏开始 -->
  <div class="top">
    <div class="header">
      <a href="#/"><img src="./../assets/img/logo.png" alt=""></a>
      <div class="search">
        <input class="my-input" type="text" placeholder="电影搜索" v-model="searchtext">
        <button @click="search">搜索</button>
      </div>
    </div>
    <nav class="nav">
      <ul>
        <!--li中添加 active 类样式，显示焦点状态。-->
        <li class="active"><a href="#/">首页</a></li>
        <li><a href="#/in_theaters">正在热映</a></li>
        <li><a href="#/coming_soon">即将上映</a></li>
        <li><a href="#/top250">Top250</a></li>
      </ul>
    </nav>
  </div>
  <!-- 顶部导航栏结束 -->
</template>
<script >
  export default {
    data(){
      return {
        searchtext:''
      }
    },
    methods:{
      search:function(){
        this.$router.push('/search?q='+this.searchtext);
        // console.log(this.$route);
      }
    },
    watch:{
      //监听路由的变化
      '$route':function(){
        //获取到所有a标签
        var links= document.querySelectorAll('.nav a');
        for(var i=0;i<links.length;i++){
          //获取到a标签的href属性，对获取的值做一定的处理 得到'/','/coming_soon'这样的数据
          //与$route.path的值作比较
          var href=links[i].href.split('#')[1];
           if(href==this.$route.path){
             //排他
             for(var j=0;j<links.length;j++){
               links[j].parentNode.classList.remove('active');
             }
             //给对应的li标签添加active的属性
             links[i].parentNode.classList.add('active');
           }
        }
      }
    }
  }


</script>


