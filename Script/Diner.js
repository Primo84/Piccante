let MenuBool = ["false", "false", "false", "false"];

let DivTable = ["div.Salats", "div.ColdDrink", "div.HotDrink", "div.Diner"]

let MenuId = ["#Salats_Desc", "#ColdDrink_Desc", "#HotDrink_Desc", "#Diner_Desc"];

let ButtonSelect = ["span.Salats_Button", "span.ColdDrink_Button", "span.HotDrink_Button", "span.Diner_Button"];

let ButtonText = ["SAŁATKI", "NAPOJE ZIMNE", "NAPOJE GORĄCE", "ZESTAWY OBIADOWE"];

const MButtonCount = 4;

let MenuVisible = false;

let DivHeight = 0;

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
    

}


function BodyRezise()
{
    let size;
    let SizeY;
    let i;
    let isMenu;
    let Y;
    let H;

    sizeY = window.innerWidth;

    if(sizeY >= 1000)
        DivHeight = 600;
    else if(sizeY >= 600)
        DivHeight = 500;
    else if(sizeY >= 480)
        DivHeight = 400;
    else DivHeight = 350;

    isMenu = false;

    for(i=0; i< MButtonCount ; i++)
    {
        if(MenuBool[i] == "true")
            {
                isMenu = true;

                H = parseInt($(MenuId[i]).css('height').slice(0,-2),10) 
                Y = parseInt($(DivTable[i]).css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
            
                Y += H + 50;

                H= $('div.BodyText1').css("height");

                $('div.BodyText1').css("height", (Y).toString()+"px");

            }
    }

    if(!isMenu)
    {
        Y = parseInt($(DivTable[i]).css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
        Y += 50;
        $('div.BodyText1').css('height', Y.toString() + 'px');
    }


    size = parseInt($('#Salats_Desc').css('height').slice(0,-2), 10);
   // size=(Number($('#MButton_ItemC').css('height').slice(0,-2))+20) * SalatTable.length * 2;
    size += 100;

    $('div.Salats').css('height',size.toString() + 'px');

    size = parseInt($('#ColdDrink_Desc').css('height').slice(0,-2), 10);
  //  size=(Number($('#MButton_ItemC').css('height').slice(0,-2))+10) * ColdDrinkTable.length;

    size += 100;

    $('div.ColdDrink').css('height',size.toString() + 'px');

    size = parseInt($('#HotDrink_Desc').css('height').slice(0,-2), 10);    
 //   size=(Number($('#MButton_ItemC').css('height').slice(0,-2))+10) * HotDrinkTable.length;
    size += 100;

    $('div.HotDrink').css('height',size.toString() + 'px');

    size = parseInt($('#Diner_Desc').css('height').slice(0,-2), 10);
 //   size=(Number($('#MButton_ItemC').css('height').slice(0,-2))+10) * DinerTable.length;
    size += 100;
        
    $('div.Diner').css('height',size.toString() + 'px');

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

                Doiners menu and description functions


*/


function ShowHide_Menu(Class_N, Buton_Selector, Button_Text, index)
{
    let El;
    let str;
    let i;
    let H;
    let Y;

  //  $('div.BodyText1').css("height", DivHeight.toString()+"px");

    for(i=0; i < MButtonCount; i++)
    {
        if(i != index)
        {
            if(MenuBool[i] == "true")
            {
               // $(DivTable[i]).css('height', '0px');
                $(MenuId[i]).css('top','-110%');

                MenuBool[i] = "false";

                $(ButtonSelect[i]).html(ButtonText[i] + '<sub><b>&#187</b></sub>');

                break;
            }  
        }
    }

    El= document.getElementById(Class_N);

    if(MenuBool[index]=="false")
    {
        H = parseInt($(MenuId[index]).css('height').slice(0,-2),10) 
        Y = parseInt($(DivTable[index]).css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
    
        Y += H + 50;
    
        H = parseInt($('div.BodyText1').css("height").slice(0,-2),10);

         $('div.BodyText1').css("height", (Y).toString()+"px");
   

        El.style.top = "0px";
        MenuBool[index]="true";
        $(Buton_Selector).html(Button_Text + '<sub><b>&#171</b></sub>');

    }else
    {
        Y = parseInt($(DivTable[index]).css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
    
        Y += 50;
        
        $('div.BodyText1').css("height", (Y).toString()+"px");
        
        El.style.top = "-110%";
        MenuBool[index]="false";
        $(Buton_Selector).html(Button_Text + '<sub><b>&#187</b></sub>');

    }
    $(Buton_Selector).css('text-decoration','none');

}

function MButtMouseEnt(Buton_Selector)
{
    $(Buton_Selector).css('text-decoration','underline');
}

function MButtMouseLeave(Buton_Selector)
{
    $(Buton_Selector).css('text-decoration','none');
}

/*

                Ustawienia tabel


*/


function LoadTables()              
{
    let i,size;
    let f;


// **************************************************Menu wysuwane sałatki***************************************

    for(i=0; i<SalatTable.length; i++)
    {


       $('#Salats_Desc').append('<tr><td id = "MButton_ItemL">' + SalatTable[i][0] + '</td> <td id = "MButton_ItemR">' + SalatTable[i][2].toFixed(2) + '</td></tr>');

        $('#Salats_Desc').append('<tr><td id = "MButton_ItemC" colspan="3">' + SalatTable[i][1] + '</td></tr>');
    }

    size = parseInt($('#Salats_Desc').css('height').slice(0,-2), 10);

    size += 100;

    $('div.Salats').css('height',size.toString() + 'px');

    // *****************************************Menu wysuwane napoje zimne ***************************************************

    for(i=0; i<ColdDrinkTable.length; i++)
    {


       $('#ColdDrink_Desc').append('<tr><td id = "MButton_ItemL">' + ColdDrinkTable[i][0] + '</td> <td id = "MButton_ItemR">' + ColdDrinkTable[i][1].toFixed(2) + '</td></tr>');

    }

    size = parseInt($('#ColdDrink_Desc').css('height').slice(0,-2), 10);

    size += 100;

    $('div.ColdDrink').css('height',size.toString() + 'px');


    // **********************************************Menu wysuwane napoje gorące*************************************


    for(i=0; i<HotDrinkTable.length; i++)
    {

        $('#HotDrink_Desc').append('<tr><td id = "MButton_ItemL">' + HotDrinkTable[i][0] + '</td> <td id = "MButton_ItemR">' + HotDrinkTable[i][1].toFixed(2) + '</td></tr>');

    }

       size = parseInt($('#HotDrink_Desc').css('height').slice(0,-2), 10);

       size += 100;

        $('div.HotDrink').css('height',size.toString() + 'px');
    

    // **********************************************Menu wysuwane zestawy obiadowe*************************************


    for(i=0; i<DinerTable.length; i++)
    {

        $('#Diner_Desc').append('<tr><td id = "MButton_ItemL">' + DinerTable[i][0] + '</td> <td id = "MButton_ItemR">' + DinerTable[i][1].toFixed(2) + '</td></tr>');

    }

        size = parseInt($('#Diner_Desc').css('height').slice(0,-2), 10);

        size += 100;
    

        $('div.Diner').css('height',size.toString() + 'px');

};


$(document).ready(()=> 
{
    LoadTables();

    DivHeight = parseInt($('div.BodyText1').css("height").slice(0,-2),10);

});