<template>
  <div class="hero">
    <div class="main container">
      <div class="tag">魔法科技</div>
      <h1 class="title">拍出會動的照片｜<span>LivePhotos 魔法拍立得</span></h1>
      <b-row>
        <b-col lg="7" align-self="center" class="left">
          <ImagePanel class="img-rounded" imageUrl="product_image"/>
        </b-col>
        <b-col lg="5" class="right">
          <p class="target-number">目標＄600,000</p>
          <h3 class="current-achievement">$280,047</h3>
          <div class="progressbar"></div>
          <b-row>
            <b-col cols="6">
              <p>贊助人數</p>
              <h3>1374人</h3>
            </b-col>
            <b-col cols="6">
              <p>募資倒數</p>
              <h3>27天</h3>
            </b-col>
          </b-row>
          <div class="icon-group">
            <div class="icon-info">
              <img src="@/assets/icon_good01.svg" alt="badge icon">
              <p>認證標章</p>
            </div>
            <div class="icon-info">
              <img src="@/assets/icon_good02.svg" alt="like icon">
              <p>品質保證</p>
            </div>
            <div class="icon-info">
              <img src="@/assets/icon_good03.svg" alt="light ball icon">
              <p>原生創意</p>
            </div>
            <div class="icon-info">
              <img src="@/assets/icon_good04.svg" alt="crown icon">
              <p>人氣王</p>
            </div>
          </div>
          <div class="info-card">
            <p>專案募資中！<br>在 <b>2021/06/14 23:59</b> 募資結束前，您都可以贊助我們！</p>
          </div>
          <b-row class="btn-group" no-gutters>
            <b-col cols="12">
              <a href="#donate-form"><Button class="btn-yellow btn-lg mb-2">贊助專案</Button></a>
            </b-col>
            <b-col cols="6" lg="7" class="pr-2">
              <Button class="btn-lg"><b-icon-heart-fill class="icon"></b-icon-heart-fill>追蹤專案</Button>
            </b-col>
            <b-col cols="6" lg="5">
              <Button class="btn-lg"><b-icon-share-fill class="icon"></b-icon-share-fill>分享</Button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Button from '../Button.vue'
import ImagePanel from '../ImagePenal.vue'

export default {
  name: 'Hero',
  components: {
    Button,
    ImagePanel,
  }
}
</script>
<style lang="scss" scoped>
$light: #858377;
$dark: #636057;
$primary: #ffdf65;
$bg--light: #f8f9fa;

.hero{
  background-color: $bg--light;
  padding: 48px 0;
  .title{
    letter-spacing:3px;
    margin-bottom: 24px;
  }
  .tag{
    color:white;
    background-color: $dark;
    font-size:12px;
    font-weight:bold;
    border-radius: 4px;
    width:80px;
    padding:2px 0;
    text-align:center;
    margin-bottom: 4px;
  }
  .right{
    p{
    margin-bottom: 0px;
    line-height:24px;
    font-size:0.875rem;
    }
    h3{
      margin-bottom: 0;
      line-height:56px;
      font-weight:700;
    }
    .progressbar{
      position: relative;
      width:100%;
      height:16px;
      background-color: #eee;
      border-radius: 8px;
      margin-bottom: 20px;
      &::after{
        content:'41%';
        position: absolute;
        width:41%;
        height:16px;
        border-radius: 8px;
        background-color: $primary;
        top:0;
        left:0;
        text-align:center;
        font-size:12px;
      }
    }
    .icon-group{
      display: flex;
      margin-bottom: 16px;
      gap:25px;
        .icon-info{
          display: flex;
          position: relative;
          img{
            display: block;
            width:24px;
            height:24px;
          }
          p{
            display: none;
            position: absolute;
            bottom:32px;
            left:50%;
            transform:translateX(-50%);
            background-color: $dark;
            color:$primary;
            padding: 4px 12px;
            width:88px;
            border-radius: 4px;
            text-align:center;
            &::after{
              content:'';
              display: block;
              width:0;
              height:0;
              border-left:4px solid transparent;
              border-bottom:6px solid $dark;
              border-right:4px solid transparent;
              position: absolute;
              bottom:-6px;
              left:50%;
              transform: translateX(-50%) rotate(180deg) ;
            }
          }
        img:hover{
          cursor: pointer;
          &~p{
            display: block;
          }
          
        }
      }
    }
    .info-card{
      background-color: #fff;
      padding:14px 16px;
      border-radius: 8px;
      border-left:3px solid $primary;
      margin-bottom: 24px;
      p{
        font-size:1rem;
      }
    }
    .btn-group{
      width:100%;
      .icon{
        width:20px;
        height:20px;
      }
      
    }
  }
}
@media(max-width:991px){
  .hero{
    padding-top: 16px;
    padding-bottom:32px;
    .tag{
      margin-bottom: 8px;
    }
    .right{
      .target-number{
        margin-top:16px;
      }
      .icon-group{
        display: flex;
        margin-bottom: 16px;
        gap:20px;
        .icon-info{
          display: flex;
          margin-right: 25px;
          p{
            &::after{
              display: none;
            }
          }
          p{
            display:block;
            position: relative;
            bottom:0px;
            background-color:transparent;
            color:$light;
            padding: 0; 
            width:auto;
          }
        }
      }
      .info-card{
        margin-bottom: 16px;
      }
    }
  }
}

@media(max-width:576px){
  .hero{
    .title{
      font-size:1.5rem;
      letter-spacing: 2.25px;
      line-height:36px;
      span{
        display: block;
        
      }
    }
  }
}
</style>
