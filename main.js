canvas = document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car2.jpg";
car2_x = 10;
car2_y = 10;

background_img = "racing.jpg";

function add()
{
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload= uploacar1;
    car1_imgTag.src= car1_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed)

    if(keyPressed == "38")
    {
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed == "40")
    {
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed == "37")
    {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == "39")
    {
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed == "87")
    {
        car2_up();
        console.log("key w");
    }

    if(keyPressed == "88")
    {
        car2_down();
        console.log("key x");
    }

    if(keyPressed == "89")
    {
        car2_left();
        console.log("key y");
    }

    if(keyPressed == "90")
    {
        car2_right();
        console.log("key z");
    }
}

function car1_up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y <=500)
    {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x >= 0)
    {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if(car1_x <=500)
    {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}