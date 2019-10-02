window.onload = init;
function init(){
  attr();
}
function attr(){
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