for(let i = 1; i <= 25; i++)
{
	var x = Math.floor(Math.random()*2)+2;
	var back = `<div id="t_${i}" class="tree_item" >
					<img class="tree_pitcher" src="./img/tree${x}.png">
				</div>`;
	$('.tree').append(back);
	console.log(i);
}

var img = document.getElementById('ground');
var width = img.clientWidth;
var high = img.clientHeight;
/*console.log(width);
console.log(high);*/


/*var elem = document.getElementById('t_1');
var position = getPosition(elem);
let Px = position.x;
console.log("座標: " + position.x + ', ' + position.y);

function getPosition (element) {
	var x = 0;
	var y = 0;
	// 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
	while ( element ) {
	  x += element.offsetLeft - element.scrollLeft + element.clientLeft;
	  y += element.offsetTop - element.scrollLeft + element.clientTop;
	  element = element.offsetParent;
	}
  
	return { x: x, y: y };
  }*/

//document.getElementById('t_1').style.left = `${ (width / 800) * 40}%`;
//document.getElementById('t_1').style.top = `${5 * (width / 428)}% `
