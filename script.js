window.onload = init;
function init(){
  // 
   //;
  attr();
}
function attr(){
    var element = document.querySelectorAll('.tabs .tab-links a');
  /*  var currentAttrValue = element.getAttribute('href');
    console.log(currentAttrValue);*/
    for(var i=0;i<element.length;i++){
        element[i].addEventListener('click', function(e){
            e.preventDefault();
            var currentAttrValue = this.getAttribute('href');
           // console.log(currentAttrValue);
           var ele = document.querySelector('.tabs ' + currentAttrValue);
          /* var previous = ele.previousSibling;
           var next = ele.nextSibling;
           console.log(previous);
           console.log(next);
           ele.classList.add('active');*/
           console.log(ele.previousSibling);

         //  element[i].parentElement.classList.add('active');
        })
        
    }
    
}