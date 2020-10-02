$(document).ready(function(){
    var imgItems = $('.slider li').length
    var imgpos =1;
     for(i = 1 ; i <= imgItems ; i++){
       $('.page').append('<li><span class="fa fa-circle"></span></li>');
     }

$('.slider li').hide();
$('.slider li:first').show();
$('.page li:first').css({'color':'#CD6E2E'});

$('.page li').click(page);
$('.right span').click(nextslider);
$('.left span').click(prevslider);

setInterval(function(){
    nextslider();

},4000);

function page (){
    var pagepos= $(this).index() +1 ; 
   

    $('.slider li').hide();
    $('.slider li:nth-child('+ pagepos +')').fadeIn();

    $('.page li').css({'color':'#858585'});
    $(this).css({'color':'#CD6E2E'});

    imgpos = pagepos;
}

    function nextslider(){
        if( imgpos >= imgItems){imgpos = 1;}
        else{imgpos++;}
            

    $('.page li').css({'color':'#858585'});
    $('.page li:nth-child('+ imgpos +')').css({'color':'#CD6E2E'});

    $('.slider li').hide();
    $('.slider li:nth-child('+ imgpos  +')').fadeIn();


}
function prevslider(){
   if( imgpos <= 1){imgpos = imgItems}
   else{imgpos--;}
       
$('.page li').css({'color':'#858585'});
$('.page li:nth-child('+ imgpos +')').css({'color':'#CD6E2E'});

$('.slider li').hide();
$('.slider li:nth-child('+ imgpos  +')').fadeIn();
}
$('.menu ul li ').hover(function(){
    $(this).find('ul').slideDown('slow');
      },function(){
   $(this).find('ul').slideUp('slow');

   
});
});
var products =[
    {
        img:src="../img/a31.jpg",
        title:"a31گلکسی سامسونگ",
        price:"6,730,000تومان",
    },
    {
        img:src="../img/ipad.jpg",
        title:"آیپد نسل هفتم ",
        price:"16,600,000تومان",
    },
    {
        img:src="../img/handz3.jpg",
        title:"هندزفری بیبوشی",
        price:"95,800تومان",
    },
    {
        img:src="../img/saat2.jpg",
        title:"ساعت هوشمند",
        price:"5,999,000تومان",
    },
    {
        img:src="../img/redmiii.jpg",
        title:"8Aردمی شیایومی",
        price:"4,549,000تومان",
    },
    {
        img:src="../img/handz5.jpg",
        title:"هندزفری بلوتوث بی سیم",
        price:"182,700تومان",
    },
    {
        img:src="../img/tabs7.jpg",
        title:"تبلت سامسونگ",
        price:"19,999,000تومان",
    },
    {
        img:src="../img/saatt.jpg",
        title:"ساعت هوشمند مدیسان",
        price:"225,000تومان",
    },
    {
        img:src="../img/a50.jpg",
        title:"A50گلکسی سامسونگ",
        price:"8,150,000تومان",
    },
    {
        img:src="../img/ipad1.jpg",
        title:"تبلت اپل ظرفیت265",
        price:"26,538,200تومان",
    },
    {
        img:src="../img/saat3.jpg",
        title:"ساعت هوشمند اپل واچ",
        price:"12,199,000تومان",
    },
    {
        img:src="../img/handz4.jpg",
        title:"هندزفری ریسیدین",
        price:"98,800تومان",
    },
];
var lists=document.querySelector('.products');
for( var i = 0; i <= products.length; i++){

    var div=document.createElement('div');
    var img=document.createElement('img');
    var pTag=document.createElement('p');
    var h2Tag=document.createElement('h2');
    img.className="imgTag";


    img.setAttribute('src',products[i].img);
    pTag.innerHTML=products[i].price;
    h2Tag.innerHTML=products[i].title;

    div.appendChild(img);
    div.appendChild(h2Tag);
    div.appendChild(pTag);
    lists.appendChild(div);
};
