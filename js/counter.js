var now;
async function g() {
  let b;
  await $.get('https://sheets.googleapis.com/v4/spreadsheets/1KyWaif2kgtYdAaq19NeCSCaBLw9lFwBxeU1c4PjSZFc/values/工作表1?alt=json&key=AIzaSyB2THJcAZdxTm50s8QO7-nfOCmE0fe_fq0',
    function (data) {
      let a = parseInt(data.values[0][3], 10);
      b = a;
    });
  console.log(b);

  let gold, red, green, temp;
  temp = b;
  if (temp >= 100) {
    gold = parseInt(temp / 100);
    temp = temp - (gold * 100);
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
        counter(re[0]); 
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
 


  $( document ).ready(function(){
      farm();
  })
 setInterval(farm, 5000); 