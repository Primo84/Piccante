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
    else if(ItemText=='ZestOb')
    {
        window.location.href = "Diner.html";
    }
    else if(ItemText=='Pizza')
    {
        window.location.href = "Pizza.html";
    }
    else if(ItemText=='Prom')
    {
        window.location.href = "Prom.html";
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




/*

             Linker position mouse cilck and resize event


*/

function LinkerClick()
{
    window.open("https://www.pyszne.pl/menu/pizzeria-piccante-opole",parent);
}


function BodyResize()
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

    DivSizeY=parseInt(($('div.Prom2').css('width')).slice(0,-2),10);

    SizeY=parseInt(($('span.pyszne_pl').css('width')).slice(0,-2),10);

    TextY = DivSizeY - SizeY - 25;
    $('span.pyszne_pl').css('left', TextY.toString() + 'px');

    SizeY=parseInt(($('img.pyszne_pl').css('width')).slice(0,-2),10);

    ImgY = TextY - SizeY - 5;
    $('img.pyszne_pl').css('left', ImgY.toString() + 'px');

}


$(document).ready(() => {

    $('a.Tel').hover(TelLinkEnt, FooterTelLinkLeave);
    $('a.Kom').hover(TelLinkEnt, FooterTelLinkLeave);

    $('a.LinkGoogle').hover(GoogleLinkEnt, GoogleLinkLeave);

    $('.pyszne_pl').click(LinkerClick);

    $('.pyszne_pl').hide();

    ShowLink = false;

    window.setTimeout(BodyResize,1500);


})
