let MenuVisible = false;
let LoadImgTimeCount = 0;
ImgLoaded = false;
let TimeImgLoad;
let namePoint = ". . . . . . . . . . . . . . . . . . . . . . . . . . . .";
let footerSize = 150;
let TableCount = 0;
DivTop = 0;


/*

               Top Menu  Events


*/

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


function ScrollWindow(SY)
{
    let prevSY;

    if(window.scrollY < SY)
    {
        prevSY=window.scrollY;

        if(SY - window.scrollY > 200)
            window.scrollBy(0,200);
        else 
            window.scrollBy(0,SY-window.scrollY);

          //if(window.scrollY < SY && window.scrollY != prevSY)
            if(window.scrollY != prevSY)
                TimeWindowScroll = setTimeout(ScrollWindow, 50, Y);

    }
   
}


function MenuItemMouseClick(ItemText)
{
    let El;
    let h;
    let i;

    if(ItemText == 'Kontakt')
    {

        El=document.getElementById("footer");

        h = parseInt($('#footer').css('height').slice(0,-2),10); 

        i= window.scrollY;

        Y = El.offsetTop + h;

        ScrollWindow(Y);

    }
    else if(ItemText=='HomePage')
    {
        window.location.href = "index.html";
    }
    else if(ItemText=='Prom')
    {
        window.location.href = "Prom.html";
    }
    else if(ItemText=='ZestOb')
    {
        window.location.href = "Diner.html";
    }

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


/*

             Load image events


*/


function ImgLoad()
{
    ImgLoaded = true;
}

function WaitForImg(){

    if(ImgLoaded == true)
    {
        $('#Text_Header').html("Najlepszą pizzę<br>zjesz u nas");
        $('#Text_Header').fadeIn(1000).css("color", "rgb(239, 103, 6)");
    }
    else 
    {
        if(LoadImgTimeCount>=3)
        {
            LoadImgTimeCount = 0;

            $('#Text_Header').html("Najlepszą pizzę<br>zjesz u nas");
            $('#Text_Header').fadeIn(1000).css("color", "rgb(239, 103, 6)");
        }
        else
        {
            LoadImgTimeCount++;

            TimeImgLoad = window.setTimeout(WaitForImg,1000);
        }
    }
}

/*

           Body resize


*/

function BodyResize()
{
    let i;
    let DivId="";
    let TableId="";
    let sizeY;
    let sizeX;

    sizeX=window.innerWidth;

    if(sizeX > 1000)
        DivTop = 133;
    else if(sizeX > 800)
        DivTop = 122;
    else if(sizeX > 480)
    {
        DivTop = 102;
        footerSize = 80;
    }
    else
    {
        DivTop = 100;
        footerSize = 50;
    }

    $('div.PizzaMenu').css('top',DivTop.toString()+'%');

    for(i=0; i< TableCount; i++)
    {
        DivId='#div'+(i+1).toString();
        TableId='#table'+(i+1).toString();
        $(TableId).css('visibility', 'visible');

        sizeY = parseInt(($(TableId).css("height")).slice(0,-2),10);
        sizeY += parseInt(($(TableId).css("top")).slice(0,-2),10);
        sizeY += footerSize;
        $(DivId).css('height', sizeY.toString()+'px');


    }

}




function LoadTables()
{

    let i;
    let AppStr = "";
    let sizeY

    i=0;
    let index=1;
    let DivId;
    let TableId;
    let Count = 0;

    PizzaTable.forEach((TItem)=>{

        
        if(i==0)
        {
            DivId = "div" + index.toString();
            TableId = "table" + index.toString();

            // if(Count==0)
            //     AppStr = "<div  style='top : " + DivTop.toString() +"%' class = 'PizzaMenu' id = '" + DivId + "'> <img class='PizzaMenu' src = 'Bmp/Body/TableFrame.jpg'>";
            // else
            AppStr = "<div class = 'PizzaMenu' id = '" + DivId + "'> <img class='PizzaMenu' src = 'Bmp/Body/TableFrame.jpg'>";

            AppStr += "<span class = 'MenuHeader'>Nasze  Menu</span>";

            AppStr += "<table style = 'visibility : hidden '  cellspacing = '0px' class = 'MenuP' id = '" + TableId + "'> </table>";

            $('div.main').append(AppStr);

            index++;

            TableCount++;

            $('div.PizzaMenu').css('top',DivTop.toString()+'%');

        }

            // if(i==0)
            //     AppStr ="<tr><td class = 'Stopka' colspan = '5'>Nasze Menu</td></tr>";
            // else 
            //     AppStr="";

        AppStr ="<tr><td class = 'Stopka' colspan = '5'>* * * * *</td></tr>";
        AppStr += " <tr> <td class = 'Name'>"; 
        AppStr += "<div>" + TItem[0] + namePoint + "</div> </td> <td class='Rozmiar' style='border-right : 2px solid white'> 24cm</td>";
        AppStr += "<td class='Rozmiar' style='border-right : 2px solid white'> 30cm</td> <td class='Rozmiar' style='border-right : 2px solid white'> 40cm</td> <td class='Rozmiar'> 50cm</td> </tr>";

        AppStr += " <tr> <td class = 'Opis' rowspan = '2'>" + TItem[1] + "</td>";
         AppStr += "<td class='Cena' style='border-right : 2px solid white'>" +TItem[2] +"</td>";
        AppStr += "<td class='Cena' style='border-right : 2px solid white'>" +TItem[3] +"</td>";
        AppStr += "<td class='Cena' style='border-right : 2px solid white'>" +TItem[4] +"</td>";
        AppStr += "<td class='Cena'>" +TItem[5] +"</td>";

        AppStr += " <tr><td class = 'Cena1'>&nbsp</td> <td class = 'Cena1'>&nbsp</td> <td class = 'Cena1'>&nbsp</td> <td class = 'Cena1'>&nbsp</td> </tr> "
            
        $('#'+TableId).append(AppStr);
        i++;
        Count++;

        if(i==5 || Count == PizzaTable.length)
        {  
            sizeY = parseInt(($('#'+TableId).css("height")).slice(0,-2),10);
            sizeY += parseInt(($('#'+TableId).css("top")).slice(0,-2),10);
            sizeY += footerSize;

           $('#'+DivId).css('height', sizeY.toString()+'px');

            i=0;
        }
        
    });

 
}

function Load()
{
    TimeImgLoad = window.setTimeout(WaitForImg,1500);

    //  LoadTables();
}

document.onload = Load();

function BodyTimeOut()
{

    BodyResize();

}


$(document).ready(() =>{

    let sizeX;

    sizeX=window.innerWidth;

    if(sizeX > 1000)
        DivTop = 133;
    else if(sizeX > 800)
        DivTop = 122;
    else if(sizeX > 480)
        DivTop = 102;
    else
        DivTop = 100;
  


    LoadTables();


    window.setTimeout(BodyTimeOut,1500);
    

    // sizeY = parseInt(($('table.MenuP').css("height")).slice(0,-2),10);
    // sizeY += parseInt(($('table.MenuP').css("top")).slice(0,-2),10);
    // sizeY += 290;
    // $('div.PizzaMenu').css('height', sizeY.toString()+'px');

});