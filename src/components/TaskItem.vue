<template>
  <div id="taskItem">
    
    <div id="slide">
    </div>
    
    <div id="body">
      <div id="head">
        <div id="left">
          
          <div id="checkbox">
             <!--{{isCheck}}-->
          </div>
          
          <div id="name">
            taskName <!--{{taskName}}-->
          </div>
        
        </div>
        
        <div id="avatar">
         <!-- <img v-bind:src="avatarUrl"/>-->
        </div>
      
      </div>
      
      <div id="mainbody">
        <div id="time">
          4月28日 截止 <!--{{deadline}}-->
        </div>
        
        <div id="repetition"> <!--v-if="this.props.isrepeat"-->
          工作日 重复 <!--{{repeatTime}}-->
        </div>
        
        <div id="subtask"> <!--v-if="isSubTask"-->
          <div id="subtaskicon">
            
          </div>
          <div id="subtasknum">
            0/2 <!--{{subTask}}-->
          </div>
        
        </div>
        
        <div id="alert"> <!--v-if="this.props.isalert"-->
          
        </div>
        
        <div id="relevance"> <!--v-if="this.props.isrelevant"-->
          
        </div>
        
        <div id="praise">
          <div id="praiseicon"> <!--{{isPraise}}--></div>
          <div id="praisenum">7<!--{{praiseNum}}--></div>
        </div>
      
      </div>
    
    </div>
  
  </div>


</template>

<script>
  export default {}
//    data: function () {
//      return {
//        taskName: this.props.taskname,
//        avatarUrl: this.props.avatarurl,
//        deadline: this.props.month + '月' + this.props.day + '日 截止',
//        repeatTime: this.props.repeattime,
//        subTask: this.props.subtaskfinish + '/' + this.props.subtasknum,
//        praiseNum: this.props.praisenum
  // }
//    }
//    computed: {
//      isCheck: function () {
//        if (this.props.ischeck) {
//          return ''
//        } else return ''
//      },
//      isSubTask: function () {
//        return (this.props.subtasknum > 0.9)
//      },
//      isPraise: function () {
//        if (this.props.ispraise) {
//          return ''
//        } else return ''
//  }
//  }
</script>

<style>
  #taskItem {
    display: flex;
    width: 543.2px;
    
  }
  
  #slide {
    display: flex;
    width: 9.8px;
    flex-direction: row;
    background-color: #FF4949;
  }
  
  #body {
    display: flex;
    flex-direction: column;
    width: 533.4px;
  }
  
  #head {
    display: flex;
    flex-direction: row;
    height: 80px;
    border-radius: 0 10px 0 0;
    background-color: #FFFFFF;
  }
  
  #left {
    display: flex;
    flex-direction: row;
  }
  
  #checkbox {
    display: flex;
    flex-direction: row;
    margin-left: 24.2px;
    margin-top: 17px;
    font-size: 48px;
    font-family: iconfont;
  }
  
  #name {
    display: flex;
    flex-direction: row;
    margin-left: 9.8px;
    font-size: 32px;
    font-family: "苹方 常规";
    line-height: 96px;
    color: #565656;
  }
  
  #avatar {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 20.4px;
    
    width: 48px;
    height: 48px;
    margin-top: auto;
    margin-bottom: 16px;
    border-radius: 24px;
    
    border: 1px solid #979797;
  }
  
  #mainbody {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    background-color: #3E5568;
    padding: 10px 55px 20px 55px;
    border-radius: 0 0 10px 0;
  }
  
  #time {
    display: flex;
    flex-direction: row;
    height: 40px;
    background-color: #E7F1F0;
    font-size: 28px;
    font-family: "苹方 常规";
    color: #3E5568;
    border-radius: 20px;
    padding: 0 18px 0 18px;
    letter-spacing: 0;
    text-align: center;
    margin-left: 15px;
    margin-top: 10px;
  }
  
  #repetition {
    display: flex;
    flex-direction: row;
    height: 40px;
    background-color: #E7F1F0;
    font-size: 28px;
    font-family: "苹方 常规";
    color: #3E5568;
    border-radius: 20px;
    padding: 0 18px 0 18px;
    letter-spacing: 0;
    text-align: center;
    margin-left: 15px;
    margin-top: 10px;
  }
  
  #subtask {
    display: flex;
    flex-direction: row;
    height: 40px;
    color: #F8F8F8;
    margin-left: 15px;
    margin-top: 10px;
  }
  
  #subtaskicon {
    font-family: iconfont;
    font-size: 32px;
  }
  
  #subtasknum {
    font-size: 28px;
  }
  
  #alert {
    display: flex;
    flex-direction: row;
    height: 40px;
    color: #F8F8F8;
    margin-left: 15px;
    margin-top: 10px;
    font-family: iconfont;
    font-size: 32px;
  }
  
  #relevance {
    display: flex;
    flex-direction: row;
    height: 40px;
    color: #F8F8F8;
    margin-left: 15px;
    margin-top: 10px;
    font-family: iconfont;
    font-size: 32px;
  }
  
  #praise {
    display: flex;
    flex-direction: row;
    height: 40px;
    color: #F8F8F8;
    margin-left: 15px;
    margin-top: 10px;
  }
  
  #praiseicon {
    font-family: iconfont;
    font-size: 32px;
  }
  
  #praisenum {
    font-size: 28px;
  }

</style>
