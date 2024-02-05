let intervals=100;
let IntervalId;
let TimeId;
let TIndex=0;
let L_position=100;
let licz=95;
let MenuVisible = false;
let ImgLoade = false;
let TimeImgLoad;


const Logo_T = ["Text_P", "Text_i", "Text_c1", "Text_c2", "Text_a", "Text_n", "Text_t", "Text_e"];



/*

                Animation in loading


*/

function LogoAnim()
{

    L_position-=5;

     document.getElementById(Logo_T[TIndex]).style.left = L_position.toString() + "%";

     intervals-=5;

     if(intervals<=0)
    {
        if(TIndex == 0)
            // document.getElementById(Logo_T[TIndex]).style.left = TIndex.toString() + "%";
            document.getElementById(Logo_T[TIndex]).style.left = "1%";
        else 
        {
            document.getElementById(Logo_T[TIndex]).style.left = "0px";
          //  document.getElementById(Logo_T[TIndex]).style.left =  TPos.toString() + "%";
         //   TPos += 3;
        }
        
         TIndex++;
         intervals= licz;
         licz-=5;

         L_position = 100;

        // if(TIndex==1)
         //   L_position +=5;
       // else
          //   L_position=intervals-10;
        
    }

    if(TIndex==8)
    {
        document.getElementById("Text_Header").style.visibility = "visible";
        document.getElementById("Text_Header").style.color = "rgb(179, 115, 31)";

        clearTimeout(IntervalId);
    }
}




function MenuMouseEnt()
{
   $('div.MainMenuButton span').css("background-color", "rgb(179, 115, 31)");
}

function MenuMouseLeave()
{
    $('div.MainMenuButton span').css("background-color", "rgb(243, 241, 235)");
}

function MenuItemMouseEnt(Item)
{

   $(Item).css("color", "rgb(179, 115, 31)");
}

function MenuItemMouseLeave(Item)
{
    $(Item).css("color", "rgb(243, 241, 235)");
}


function ShowHideMenu()
{
    let trans ="";
    let y = 0;
    let h = "";

    trans = $('div.MainMenuButton').css("height");

    h = parseInt(trans.slice(0,-2),10);

    y = h * 0.14;

    trans=""

    trans = $('span.MainMenuButt1').css("height");

    h = parseFloat(trans.slice(0,-2));

    y  += h;

    trans = "translate(0px,-" + y.toFixed(2) + "px)";

    if(MenuVisible == false)
    {
        $('table.MainMenuTable').css({'left' : '0px', 'top' : '0px'});

        $('span.MainMenuButt3').hide();

         $('span.MainMenuButt1').css("top", y.toString() + "px");

        $('span.MainMenuButt2').css("transform", "rotate(45deg)");


        $('span.MainMenuButt1').css("transform",  "rotate(-45deg) ");


        MenuVisible = true;

    }
    else
    {
        $('table.MainMenuTable').css({'left' : '110%', 'top' : '-110%'});

        $('span.MainMenuButt3').show();

        $('span.MainMenuButt1').css("top", "0px");

        $('span.MainMenuButt2').css("transform", "rotate(0deg)");


        $('span.MainMenuButt1').css("transform",  "rotate(0deg)");

        MenuVisible = false;

    }

}



function LoadTables()              
{


};

function ImgLoad()
{
    ImgLoaded = true;
}

function WaitForImg(){

    if(ImgLoaded == true)
    {
        $('#Text_Header').html("Najlepszą pizzę<br>zjesz u nas")
        IntervalId = window.setInterval(LogoAnim,20);
    }
    else 
        TimeImgLoad = window.setTimeout(WaitForImg,1000);
}

$(document).ready(()=> 
{
    TimeImgLoad = window.setTimeout(WaitForImg,1000);

  //  LoadTables();
});
