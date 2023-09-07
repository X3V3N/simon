var point=0
var pattern=[]
var answer=[]
var i=0

function update()
{
    var n=Math.floor(Math.random() * 4) + 1;
    var id=n.toString();
    const targetElement = document.getElementById(id);
    const originalBackgroundColor = targetElement.style.backgroundColor;

    function changeBackgroundColor() {
        if(n===1)
        {
            targetElement.style.backgroundColor = 'red';
        }
        else if(n===2)
        {
            targetElement.style.backgroundColor = 'blue';
        }
        else if(n===3)
        {
            targetElement.style.backgroundColor = 'green';
        }
        else
        {
            targetElement.style.backgroundColor = 'yellow';
        }
        setTimeout(() => {
          targetElement.style.backgroundColor = originalBackgroundColor;
        }, 1500);
      }
      changeBackgroundColor();

    pattern.push(n)
    console.log(pattern)
    answer=[]
}
update()
function addCol(parameter) {
    answer.push(parameter)
    console.log(answer)
    if(answer[i]!==pattern[i])
    {
        gameOver(point)
    }
    i+=1
    if(answer.length==pattern.length) {
        point+=10
        var p=point.toString();
        var sc = document.getElementById("Score");
        sc.innerHTML = p;

        update()
        i=0
    }
}
function gameOver(point)
{
    var sc = document.getElementById("Score");
    sc.innerHTML = 0;
    alert("Game Over!!! Your Final Points is "+point)
    alert("Please Reload The Page To Play Again")
}
