window.onload = init;
function init(){
  tabattr();
  faqAttr();
}
function tabattr(){
    var element = document.querySelectorAll('.tabs .tab-links a');

    for(var i=0;i<element.length;i++){
      /* binding event listeners to links */
        element[i].addEventListener('click', function(e){
          e.preventDefault();
          /* removing active class from links */
          var listElement = document.querySelector('.tabs .tab-links li');
          var listChilds = listElement.parentNode.children;
          for(var i=0;i<listChilds.length;i++){
            listChilds[i].classList.remove('active');
          }
          /* adding active class to only one which clicked */
          this.parentNode.classList.add('active');
          /* displaying tabs */
          var currentAttrValue = this.getAttribute('href');
          var ele = document.querySelector('.tabs ' + currentAttrValue);
          var childs = ele.parentNode.children;
          for(var i=0;i<childs.length;i++){
            childs[i].classList.remove('active');
          }
          ele.classList.add('active');
        })
        
    }
    
}

function faqAttr() {
  let element = document.querySelectorAll('.faq-sec .question-sec ul .list a');
  //binding events to question attr
  for(var i=0;i<element.length;i++){
    element[i].addEventListener('click', function(e){
      e.preventDefault();
      //displaying answers on click
      let currentAttrValue = this.getAttribute('href');
      let paraElement = document.querySelector(currentAttrValue);
      paraElement.classList.toggle('active');
      //changing icons 
     let iconElement = this.parentNode.children;
     for(var i=0;i<iconElement.length;i++){
       iconElement[i].classList.toggle('active');
       
     }
     //changing list element border
     let listElement = this.parentNode;
     listElement.classList.toggle('active');
    })
  }
}