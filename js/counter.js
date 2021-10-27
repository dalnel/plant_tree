var now;
async function g() {
  let b;
  await $.get('https://sheets.googleapis.com/v4/spreadsheets/1KyWaif2kgtYdAaq19NeCSCaBLw9lFwBxeU1c4PjSZFc/values/工作表1?alt=json&key=AIzaSyB2THJcAZdxTm50s8QO7-nfOCmE0fe_fq0',
    function (data) {
      let a = parseInt(data.values[0][3], 10);
      b = a;
    });
  //console.log(b);

  let gold, red, green, temp;
  temp = b;
  if (temp >= 100) {
    gold = parseInt(temp / 100);
    temp = temp - (gold * 100);
  }
  else{
    gold = 0;
  }

  if (temp >= 10 & temp < 100) {
    red = parseInt(temp / 10);
    temp = temp - (red * 10);
  }
  green = temp;

  return new Promise(function (resolve) {
    let array = [b, gold, red, green]
    resolve(array);
  })
}


function farm() {
    let pro = g(); 
    pro.then(function (re) {
      let a = re[1] + re[2] + re[3];
      console.log("all:" + a);
      counter(re[0]);
      tree(a);
    })
  }
  


 function counter(counter) {
  $('.counter').each(function() {
    var $this = $(this),
        countTo = counter;
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {  
      duration: 1000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
  
  });

  }

  function tree(a){
    $('.tree').html("");
    let arrary = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    for(let i = 1; i <= a; i++)
    {
	    var x = Math.floor(Math.random()*2)+2; //init +1
      var y = Math.floor(Math.random() * arrary.length);
	    var back = `<div id="t_${arrary[y]}" class="tree_item" >
					        <img class="tree_pitcher" src="./img/tree${x}.png">
				          </div>`;
	    $('.tree').append(back);
      arrary.splice(y, 1);
	    console.log(y); 
    }
  }

  $( document ).ready(function(){
      farm();
  })
 setInterval(farm, 30000); 