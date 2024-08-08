let MenuBool = ["false", "false", "false", "false"];

let MenuId = ["#Salats_Desc", "#ColdDrink_Desc", "#HotDrink_Desc", "#Diner_Desc"];

let ButtonSelect = ["span.Salats_Button", "span.ColdDrink_Button", "span.HotDrink_Button", "span.Diner_Button"];

let ButtonText = ["SAŁATKI", "NAPOJE ZIMNE", "NAPOJE GORĄCE", "ZESTAWY OBIADOWE"];

const MButtonCount = 4;

let MenuVisible = false;

let ShowLink = false;


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

    if(ItemText == 'Kontakt')
    {

        El=document.getElementById("footer");

        h = parseInt($('#footer').css('height').slice(0,-2),10); 


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
    else if(ItemText=='Pizza')
    {
        window.location.href = "Pizza.html";
    }
    else if(ItemText=='Galery')
    {
        window.location.href = "Galery.html";
    }

}

/*

               Telefon link events


*/

function TelLinkEnt(EV)
{
    $(this).css("color", "rgb(250, 1, 42)");
    EV.stopPropagation();

}


function TelLinkLeave(EV)
{
    $(this).css("color", "rgb(109, 9, 241)");
    EV.stopPropagation();
}

function FooterTelLinkLeave(EV)
{
    $(this).css("color", "rgb(203, 192, 177)");
    EV.stopPropagation();
}

/*

               Google link events


*/

function GoogleLinkEnt(EV)
{
    $(this).css("color", "rgb(250, 1, 42)");
    EV.stopPropagation();

}


function GoogleLinkLeave(EV)
{
    $(this).css("color", "rgb(210, 183, 146)");
    EV.stopPropagation();
}



function BodyRezise()
{
    let i;
    let isMenu;
    let Y;
    let H;

    isMenu = false;

    for(i=0; i< MButtonCount ; i++)
    {
        if(MenuBool[i] == "true")
        {
            isMenu = true;

            H = parseInt($(MenuId[i]).css('height').slice(0,-2),10) 
            $('div.Meals').css('height', (H+50).toString() +'px');
            Y = parseInt($('div.Meals').css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
            
             H += Y + 50;

            $('div.BodyText1').css("height", (H).toString()+"px");
        }
        else
        {
            Y = $(MenuId[i]).css('height').slice(0,-2);
                 
            Y =  0 - Y - 100; 
    
            $(MenuId[i]).css('top', Y.toString() + 'px');

        }
    }

    if(!isMenu)
    {
        Y = parseInt($('div.Meals').css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
        
        Y+=100;

        $('div.BodyText1').css('height', Y.toString()  + 'px');
      //  $('div.BodyText1').css('height', DivHeight.toString() + 'px');
    }

    LinkResize();

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

                Diners menu and description functions


*/


function ShowHide_Menu(Class_N, Buton_Selector, Button_Text, index)
{
    let El;
    let str;
    let i;
    let H;
    let Y;

    for(i=0; i < MButtonCount; i++)
    {
        if(i != index)
        {
            if(MenuBool[i] == "true")
            {
                Y = $(MenuId[i]).css('height').slice(0,-2);
                 
                Y =  0 - Y - 100;  

                $(MenuId[i]).css('top', Y.toString()+ 'px');

                $(MenuId[i]).hide();

                 MenuBool[i] = "false";

                $(ButtonSelect[i]).html(ButtonText[i] + '<sub><b>&#187</b></sub>');

                 break;
            }  
        }
    }

    El= document.getElementById(Class_N);

    if(MenuBool[index]=="false")
    {

        $(MenuId[index]).show();

        H = parseInt($(MenuId[index]).css('height').slice(0,-2),10) 

        $('div.Meals').css('height', H.toString() + 'px');

        Y = parseInt($('div.Meals').css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
    
        H += Y + 50;

   
        $('div.BodyText1').css("height", (H).toString()+"px");

        El.style.top = "0px";
        MenuBool[index]="true";
       $(Buton_Selector).html(Button_Text + '<sub><b>&#171</b></sub>');

    }else
    {

        Y = $(MenuId[index]).css('height').slice(0,-2);
                 
        Y =  0 - Y - 100; 

        $(MenuId[index]).css('top', Y.toString() + 'px');

    //    $(MenuId[index]).hide();

        MenuBool[index]="false";
        $(Buton_Selector).html(Button_Text + '<sub><b>&#187</b></sub>');


        $('div.Meals').css('height', '0px');
        
        Y = parseInt($('div.Meals').css('top').slice(0,-2),10) + parseInt($('div.Menu').css('top').slice(0,-2),10);
        
        Y+=100;

        $('div.BodyText1').css('height', Y.toString()  + 'px');


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
    let i;
    let Y;

// **************************************************Menu wysuwane sa�atki***************************************

    for(i=0; i<SalatTable.length; i++)
    {


       $('#Salats_Desc').append('<tr><td id = "MButton_ItemL">' + SalatTable[i][0] + '</td> <td id = "MButton_ItemR">' + SalatTable[i][2].toFixed(2) + '</td></tr>');

        $('#Salats_Desc').append('<tr><td id = "MButton_ItemC" colspan="3">' + SalatTable[i][1] + '</td></tr>');
    }

        Y = $('#Salats_Desc').css('height').slice(0,-2);
                 
        Y =  0 - Y - 100; 

        $('#Salats_Desc').css('top', Y.toString() + 'px').hide();

    // *****************************************Menu wysuwane napoje zimne ***************************************************

    for(i=0; i<ColdDrinkTable.length; i++)
    {


       $('#ColdDrink_Desc').append('<tr><td id = "MButton_ItemL">' + ColdDrinkTable[i][0] + '</td> <td id = "MButton_ItemR">' + ColdDrinkTable[i][1].toFixed(2) + '</td></tr>');
    
    }

        Y = $('#ColdDrink_Desc').css('height').slice(0,-2);
                 
        Y =  0 - Y - 100; 

        $('#ColdDrink_Desc').css('top', Y.toString() + 'px').hide();

    // **********************************************Menu wysuwane napoje gor�ce*************************************


    for(i=0; i<HotDrinkTable.length; i++)
    {

        $('#HotDrink_Desc').append('<tr><td id = "MButton_ItemL">' + HotDrinkTable[i][0] + '</td> <td id = "MButton_ItemR">' + HotDrinkTable[i][1].toFixed(2) + '</td></tr>');   
   
    }

        Y = $('#HotDrink_Desc').css('height').slice(0,-2);
                    
        Y =  0 - Y - 100; 

        $('#HotDrink_Desc').css('top', Y.toString() + 'px').hide();

    // **********************************************Menu wysuwane zestawy obiadowe*************************************


    for(i=0; i<DinerTable.length; i++)
    {

        $('#Diner_Desc').append('<tr><td id = "MButton_ItemL">' + DinerTable[i][0] + '</td> <td id = "MButton_ItemR">' + DinerTable[i][1].toFixed(2) + '</td></tr>');
     
    }

        Y = $('#Diner_Desc').css('height').slice(0,-2);
                    
        Y =  0 - Y - 100; 

        $('#Diner_Desc').css('top', Y.toString() + 'px').hide();

};

/*

             Linker position mouse cilck and resize event


*/

function LinkerClick()
{
    window.open("https://www.pyszne.pl/menu/pizzeria-piccante-opole",parent);
}

function LinkResize()
{
    let ImgY;
    let TextY;
    let DivSizeY;
    let SizeY;

    if(!ShowLink)
    {
        $('.pyszne_pl').show();
        ShowLink = true;
    }

    $('span.pyszne_pl').css('left', '0px');
    $('img.pyszne_pl').css('left', '0px');

    DivSizeY=parseInt(($('div.Text2').css('width')).slice(0,-2),10);

    SizeY=parseInt(($('span.pyszne_pl').css('width')).slice(0,-2),10);

    TextY = DivSizeY - SizeY - 25;
    $('span.pyszne_pl').css('left', TextY.toString() + 'px');

    SizeY=parseInt(($('img.pyszne_pl').css('width')).slice(0,-2),10);

    ImgY = TextY - SizeY - 5;
    $('img.pyszne_pl').css('left', ImgY.toString() + 'px');

}



$(document).ready(()=> 
{
    LoadTables();

    $('div.Text2 a').hover(TelLinkEnt, TelLinkLeave);

    $('a.Tel').hover(TelLinkEnt, FooterTelLinkLeave);
    $('a.Kom').hover(TelLinkEnt, FooterTelLinkLeave);

    $('a.LinkGoogle').hover(GoogleLinkEnt, GoogleLinkLeave);

    $('.pyszne_pl').click(LinkerClick);

    $('.pyszne_pl').hide();

    ShowLink = false;

    window.setTimeout(LinkResize,1500);

});