

// 1.   id 返还值  函数


     function $(id){
      return document.getElementById(id);
     }
    // 2. 非行间元素获取  函数（对象，属性）
   function getStyle(obj,sName){
     return obj.currentStyle? obj.currentStyle[sName]:getComputedStyle(obj,false)[sName]   
   }

    // 3. 运动函数 （目标点，对象，属性，数值）
  function move(target,obj,sName,num){
     var speed=0;
     var timer=null;
     clearInterval(obj.timer)
     obj.timer=setInterval( function (){
     var cutt= parseInt(getStyle(obj,sName));
     speed=(target-cutt)/num;
     speed=speed>0? Math.ceil(speed):Math.floor(speed);
     document.title=speed
     if (cutt==target) {
       clearInterval(obj.timer)
     }else{
        obj.style[sName]=cutt+speed+'px';      
     }

     },26)

  }
  

  //4.  class Name 获取 函数( 对象，class名字)

    //var classN=getClass(obj,'classN')

   function getClass (obj,classN){
    if (obj.getElementsClassName){
        return  obj.getElementsClassName(classN);
    }else{
      var all=document.getElementsByTagName('*');
      var el=[];
      for(var a=0;a<all.length;a++){ 
         if(all[a].className ==classN){
            el.push(all[a]);
         }
      }
      return el
    }

   }


  //5.  document 获取方式 第一个子节点

   function firstC(obj){
        if (obj.firstElementChild) {
          return obj.firstElementChild;
        }else{
          return obj.firstChild;
        }

   }
 // 6.    document 获取方式 最后一个子节点


 function lastC(obj){
       if(obj.lastElementChild){
          return   obj.lastElementChild
       }else{
          return  obj.lastChild;
       }

 }


 //7.    document 获取方式 上一个子节点

 function  previousSibling (obj){
      if(obj.previousElementSibling){
         return obj.previousElementSibling;
      }else{
        return obj.previousSibling;
      }
 }



 // // 8.    document 获取方式 下一个子节点


   function nextSibling (obj){
       if(obj.nextElementsibling){
         return obj.nextElementSibling;
       }else{
         return obj.nextSibling;
       }

   }

 //  // 9. 获取兄弟节点下一个 有用标签 （对象 标签名）
              //nextS(obj,'tagName')
              
     function nextS (obj,tagName){
      while(true){
         if(obj.nextSibling.nodeName == tagName.toUpperCase()){
           return obj.nextSibling;
         }else{
          obj=obj.nextSibling;
         }

      }
    }

 //  //10. 获取兄弟节点上一个 有用标签
    function  previousS (obj,tagName){
      while(true){
         if(obj.previousSibling.nodeName == tagName.toUpperCase()){
           return obj.previousSibling;
         }else{
          obj=obj.previousSibling;
         }

      }
    }


 // 11  绑定事件 点击/   兼容 
        //对象  点击  函数事件  false/true（反转 
       // 父 级 向 子级传递）
 function add(obj,_click,fun,bl){
  if(obj.addEventListener){
    obj.addEventListener(_click,fun,bl)
  }else{

  obj.attachEvent('on'+_click,fun)
    }
  }



 //12 兼容   绑定事件
       function add(obj,_click,fun,bl){
          if(obj.addEventListener){
            obj.addEventListener(_click,fun,bl)
          }else{
            obj.attachEvent('on'+_click,fun)
          }
       }