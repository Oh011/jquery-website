
/// <reference types="jquery"/>


let num_remaning=$("#num-remain");
let initial=100;
num_remaning.html(initial);




let toggles=$(".toggle");
let inners=$('.inner');



let event_date = new Date("03/25/2027");

let days_div=$("#days");
let hours_div=$("#hours");
let minutes_div=$("#minutes");
let seconds_div=$("#seconds");





function set_up_date(){


    let current_date = new Date();

    let date_difference=event_date-current_date;


    let days=Math.floor(date_difference/(1000*60*60*24))

    let hours=Math.floor((date_difference % (1000*60*60*24))/(1000*60*60))


    let minutes=Math.floor( date_difference % (1000 * 60 * 60) / (1000 * 60))


    let seconds=Math.floor(date_difference % (1000 *60)/(1000))



    days_div.html('-' + days + ' D');
    hours_div.html(hours + ' h');
    minutes_div.html(minutes + ' m');
    seconds_div.html(seconds + ' s');


}



function update_date(){

    setInterval(() => {

        let current_date = new Date();
    
        let diff=event_date-current_date;
    
    
        let days=Math.floor(diff/(1000*60*60*24))
    
        let hours=Math.floor((diff % (1000*60*60*24))/(1000*60*60))
    
    
        let minutes=Math.floor( diff % (1000 * 60 * 60) / (1000 * 60))
    
    
        let seconds=Math.floor(diff % (1000 *60)/(1000))
    
        days_div.html('-' + days + ' D');
        hours_div.html(hours + ' h');
        minutes_div.html(minutes + ' m');
        seconds_div.html(seconds + ' s');
    
    
    
        
    }, 1000);

}





function open_slider(){

    toggles.on('click',function(){
    
    
        let next=$(".inner").index($(this).next())
     
    

    
        
        inners.not(`.inner:eq(${next})`).slideUp(500)
        $(this).next().slideToggle(500)
       
        
    })
}




function open_nav(){

    $(".openNav").click(function(){
    
    
    
    
    
        $('.side-bar').animate({'width':"250px"},500)
        $('#home-content').animate({'margin-left': '250px'},500)
    
    })
    
    
    
    $(".closebtn").click(function(){
    
        $('.side-bar').animate({'width':"0px"},500)
        $('#home-content').animate({'margin-left': '0px'},500)
    
    
    
    })

}



function smooth_scroll(){

    $(".nav-link").click(function(){
    
        console.log($(this).attr('href'));
    
        let offset=$($(this).attr('href')).offset()
        console.log(offset)
    
    
        $('html, body').animate({
            scrollTop: offset.top
        }, 2000);
    })

}




function count_words(){


    $("#message").keydown(function(){
    

        console.log(event)
    
        if(event.key=='Backspace'){
    
            if(initial!=100){
    
                ++initial;
                num_remaning.html(initial);
            }
        }
        
            else if(event.key==' '){

                return;
        
            }
            
    
        else if(initial==0){
    
          num_remaning.html('your available character finished ');
        }
        else{
    
            --initial;
            num_remaning.html(initial);
            
        }
    
    })

}


function main(){

    set_up_date();
    update_date();
    open_nav();
    smooth_scroll();
    open_slider();
    count_words();
    
}

main();


