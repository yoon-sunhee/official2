$(function(){

        $(window).scroll(function(){
                    var winScrollTop = $(window).scrollTop();

                    if(winScrollTop >= 450){
                        $('#offi').addClass('animate__animated animate__fadeInDown');
                    }
                    if(winScrollTop >= 450){
                        $('#offitxt').addClass('animate__animated animate__fadeInDown animate__delay-1s');
                    }            
        }); 
        
        // 버튼 클릭시 
        $(".ontop").click(function() {
            $('html, body').animate({ 
                scrollTop : 0 // 0 까지 animation 이동합니다. 
        }, 400); // 속도 400 
        return false; 
        }); 
        
         //메뉴 클릭
    $("#navlinks>li>a").click(function(){
      $("#navbarResponsive").stop().slideUp();
/*        var $li_node = $(this).index();
        var $h = null;
        $("#navlinks>li>a").css("color","#495057");
        switch($li_node){
           case 0:
           $h="865";  
           $("#navlinks>li>a").eq($li_node).css("color","#f4623a")
           break;
           case 1:
           $h="1500"; 
           $("#navlinks>li>a").eq($li_node).css("color","#f4623a")
           break;
           case 2:
           $h=$("#market").offset().top;  
           $("#navlinks>li>a").eq($li_node).css("color","#f4623a")
           break;
           case 3:
           $h=$("#contact").offset().top; 
           $("#navlinks>li>a").eq($li_node).css("color","#f4623a")
           break;
        };
       $("html,body").animate({
        "scrollTop":$h+"px",
        },400);*/
    });  
    //모바일 버튼
   $("#munu_btn").click(function(){
    var $m_menu = $("#navbarResponsive").is(":visible");
    if($m_menu==false){
      $("#navbarResponsive").stop().slideDown();
    }
    else{
      $("#navbarResponsive").stop().slideUp();
    }
  });
    
    
    //official ad 깜빡임
    let target = document.querySelector('#official');

    
    function randomString(){
        let stringArr = ['OFFICIAL AD','OFFICIAL AD'];
        let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
        let selectStringArr = selectString.split('');
        
        return selectStringArr;
    }
    
    //타이핑 리셋
    function resetTyping(){
     target.textContent =   '';  
     official(randomString());
    }

    
    //한글자씩 텍스트 출력 함수
    function official(randomArr){
        
    if(randomArr.length > 0){
            target.textContent += randomArr.shift();
            setTimeout(function(){
                official(randomArr);
            },120);
        }else{
            setTimeout(resetTyping, 3000);
        }
    }
    
    official(randomString());
    
    //커서 깜빡임 효과
    function blink(){
        target.classList.toggle('active');
    }
    setInterval(blink, 500);
      
   
    //검색창 닫기
    $('.popclose').click(function(){
        $('#popup,#modalpop1,#modalpop2,#modalpop3,#modalpop4,#modalpop5,#modalpop6,#modalpop7,#modalpop8,#modalpop9,#modalpop10,#modalpop11,#modalpop12,#modalpop13,#modalpop14,#modalpop15').fadeOut();
    });
      $('.popclose1').click(function(){
        $('#popup1').fadeOut();
    });
      $('.cl').click(function(){
        $('.bar').fadeOut();
    });
    
    
    //검색창 열기
    $('.ajax_btn1,.ajax_btn2,.personal').click(function(){
        $('#popup').fadeIn();
    });
     $('.ajax_btn3').click(function(){
        $('#popup1').fadeIn();
    });
        $('.modal1').click(function(){
        $('#modalpop1').fadeIn();
    });
     $('.modal2').click(function(){
        $('#modalpop2').fadeIn();
    });
    $('.modal3').click(function(){
        $('#modalpop3').fadeIn();
    });
     $('.modal4').click(function(){
        $('#modalpop4').fadeIn();
    });
    $('.modal5').click(function(){
        $('#modalpop5').fadeIn();
    });
       $('.modal6').click(function(){
        $('#modalpop6').fadeIn();
    });
    $('.modal7').click(function(){
        $('#modalpop7').fadeIn();
    });
        $('.modal8').click(function(){
        $('#modalpop8').fadeIn();
    });
    $('.modal9').click(function(){
        $('#modalpop9').fadeIn();
    });
    $('.modal10').click(function(){
        $('#modalpop10').fadeIn();
    });
    $('.modal11').click(function(){
        $('#modalpop11').fadeIn();
    });
    
    $('.modal12').click(function(){
        $('#modalpop12').fadeIn();
    });
            $('.modal13').click(function(){
        $('#modalpop13').fadeIn();
    });
          $('.modal14').click(function(){
        $('#modalpop14').fadeIn();
    });
       $('.modal15').click(function(){
        $('#modalpop15').fadeIn();
    });
    
    
    $('.ajax_btn1,.ajax_btn2,.ajax_btn3,.modal1,.modal2,.modal3,.modal4,.modal5,.modal6,.modal7,.modal8,.modal9,.modal10,.modal11,.modal12,.modal13,.modal14,.modal15').click(function(){
        return false;
    });
    
    $(document).on("click",function(e){
     if($("#popup,#popup1,#modalpop1,#modalpop2,#modalpop3,#modalpop4,#modalpop5,#modalpop6,#modalpop7,#modalpop8,#modalpop9,#modalpop10,#modalpop11,#modalpop12,#modalpop13,#modalpop14,#modalpop15").is(e.target)){
      $("#popup,#popup1,#modalpop1,#modalpop2,#modalpop3,#modalpop4,#modalpop5,#modalpop6,#modalpop7,#modalpop8,#modalpop9,#modalpop10,#modalpop11,#modalpop12,#modalpop13,#modalpop14,#modalpop15").fadeOut(300);
     }
    });


    //about 배경버블
      particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 150,
              "density": {
                "enable": true,
                "value_area": 789.1476416322727
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.48927153781200905,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1.2,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 83.91608391608392,
                "size": 3,
                "duration": 3,
                "opacity": 1,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
    
    
   //문의내용
$("#sendbtn").click(function(){
    let $tels = $("#subject").val().match(/[-]/g);
    let $tels_ea = $("#subject").val().match(/[0-9]/g);

    var $name = $("#name").val();
    var $email = $("#email").val();
    var $tel = $("#subject").val();
    var $content = $("#message").val();
    var $info = $("#send_chk").is(":checked");

    if($name==""){
        alert("이름/회사명을 입력해주세요.");
       }
    else if($email==""){
        alert("이메일을 입력해주세요.");
    }
    else if($tel==""){
        alert("연락받으실 번호를 입력해주세요.");
    }
    else if($tel.length>11 || $tels_ea==null){
        alert("올바른 번호를 입력해주세요.");
    }
    else if($tels!=null){
        alert("-를 제외하고 입력해주세요.");
    }  
    else if($content==""){
        alert("문의내용을 입력해주세요.");
    }
    else if($info==false){
        alert("개인정보 취급 방침에 동의해주세요.");
    }
    else{
        alert("완료!");
        wsOpen();  
        sends.method = "post";
        sends.action = "consulting";
        sends.contentType = "application/json";
        sends.submit();
        location.href="index";
    }
});
    
// 관리자 login
$(function(){
  $('.lg').click(function(){//오피셜애드 클릭시
    $('.login').fadeIn();
    return false
  });
  $('.lg-cl').click(function(){//x버튼 클릭시 fadeOut
    $('.login').fadeOut();
  });
});  

$(document).on("click",function(f){//블랙스크린 클릭시 
  if($(".login").is(f.target)){
    $(".login").fadeOut(300);
  }
});
$(".enters").on("keypress",function(e){//엔터키 사용
  if(e.keyCode=="13"){
    $("#log").click();
  }
})
//관리자 login 유효성 검사
$("#log").click(function(){
    let $ad_id = $("#id").val();
    let $ad_pw = $("#password").val();
    if($ad_id==""){
        alert("아이디를 입력해주세요.");
        $("#id").focus();
        return false;
      }
    else if($ad_pw==""){
        alert("비밀번호를 입력해주세요.");
        $("#password").focus();
        return false;
    }
    else{
        $.ajax({
        url:"/login",
        type:"POST",
        dataType: "json",
        data: JSON.stringify({
            id:$ad_id,
            passwd:$ad_pw
        }),
        contentType:"application/json",
        success:function(data){
         if(data.status!="Success"){
            alert("아이디와 비밀번호를 확인해주세요.");
         }
         else{
            alert("관리자님 로그인 되었습니다.");
            $("#ad1").css("display","none");
            $("#ad2").css("display","block");
         }
        }
      });//ajax
    }
});
//관리자 페이지 로그인 후
$("#new").click(function(){//알림 on 클릭
  window.open("admin","","width=400; height=500");
  $("#admins").stop().fadeOut();//관리자 페이지 뜨면 관리자페이지 부분 닫힘
});
$("#down").click(function(){
 location.href="admin/official.excel";//엑셀파일 오픈
});
$("#log_out").click(function(){
  alert('로그아웃 완료.');
  sessionStorage.clear();

  location.href="index";
  $("#ad1").css("display","block");
  $("#ad2").css("display","none");

  closes();//웹 소켓 close function 이동
});


var websocket;

function wsOpen(){//이메일 전송시 열리는 소켓
  websocket = new WebSocket("ws://localhost:8080/adminws");//경로
  wsEv();
}

function wsEv(){//상담->서버
  websocket.onopen = function(data){
    var dt = new Date();
    //var date = dt.getFullYear() +"/" + (dt.getMonth()+1)+"/" + dt.getDate();//날짜
    var currentTime = dt.getHours() + ":" + dt.getMinutes() ;//시간
    var msg ='<li><div class="chat_info">'+currentTime+'</div>\
    <div class="chat_info">'+$("#name").val()+'</div>님 상담 신청하였습니다.</li>';

    websocket.send(msg);
  };
  websocket.onmessage = function(data){
  var msg = data.data;

   if(msg!=null && msg!=""){
    $("#chat_write").append(msg);
   }
  }
}

function closes(){//웹 소켓 close
  websocket.close();
}

});//jquery