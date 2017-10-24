<template>
  <router-view></router-view>
</template>

<style>
  html{height: 100%}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,button,textarea,p,blockquote,th,td{margin:0;padding:0;}
  dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,button,textarea,p,blockquote,th,td,span{font-family:"微软雅黑";}
  body{font:12px/1 Tahoma,Helvetica,Arial,"\5b8b\4f53",sans-serif;}
  img{border:none;}
  em,strong{font-style:normal;font-weight:normal;}
  li{list-style:none;}
  table {border-collapse:collapse;border-spacing:0;}
  h1{font-size:18px;font-family:"微软雅黑";}
  h2{font-size:16px;font-family:"微软雅黑";}
  h3{font-size:14px;font-family:"微软雅黑";}
  h4, h5, h6{font-size:100%;font-family:"微软雅黑";}
  q:before,q:after{content:'';}/* 消除q前后的内容 */
  button,input,select,textarea{font-size:100%;}/* 使得表单元素在 ie 下能继承字体大小 */
  input,button,textarea,select,optgroup,option{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;}
  address,cite,dfn,em,var,i{font-style:normal;color:inherit;line-height:inherit;} /* 将斜体扶正 */
  /*link */
  a{text-decoration:none;font-family:"微软雅黑";color:inherit;-webkit-tap-highlight-color: rgba(0,0,0,0);}
  a:hover{text-decoration:none;}
  input,button,textarea,select{outline:none;}/*清除元素轮廓*/
  input:-webkit-autofill{-webkit-box-shadow: 0 0 0 400px #fff inset;}
  body{
    background-color: #efeff4;
  }

  .m-hd{
    display: flex;
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    color: #000;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 1px 6px #ccc;
  }
  .m-hd .fa{
    width: 50px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
  }
  .m-hd .u-tt{
    display: flex;
    flex: 1;
    padding-right: 50px;
    justify-content: center;
    box-sizing: border-box;
  }
</style>

<script>
  export default {
    data() {
      return {
        Classmove: 'classmove0',
        show: true
      };
    },
    methods: {

    }
  }
</script>
