// check dang nhap
    if (localStorage.getItem("check-login") == null)
        {
            localStorage.setItem("check-login","0") ;
        }
    if (localStorage.getItem("check-login") == "1")
        {
            let chaomung=document.getElementById('chaomung');
            chaomung.innerHTML = 'Chào mừng ' + localStorage.getItem('username') ;
            let kihieu2 = document.getElementsByClassName("kihieu2");
            kihieu2[0].style.display="block";
            let kihieu1 = document.getElementsByClassName("kihieu1");
            kihieu1[0].style.display="none";
        }
    if (localStorage.getItem("check-login") == "0")
        {
            let kihieu2 = document.getElementsByClassName("kihieu2");
            kihieu2[0].style.display="none";
            let kihieu1 = document.getElementsByClassName("kihieu1");
            kihieu1[0].style.display="block";
        }
    // var dangxuat = document.getElementById("dangxuat") 
    function dangxuat()
    {
        localStorage.setItem("check-login","0") ;
        let kihieu2 = document.getElementsByClassName("kihieu2");
        kihieu2[0].style.display="none";
        let kihieu1 = document.getElementsByClassName("kihieu1");
        kihieu1[0].style.display="block";
    }
// chao mung
  
       

    //    Tạo slideshow
       var slideIndex = 1;
       showDivs(slideIndex);
       
       function plusDivs(n) {
         showDivs(slideIndex += n);
       }
       
       function currentDiv(n) {
         showDivs(slideIndex = n);
       }
       
       function showDivs(n) {
           var i;
           var x = document.getElementsByClassName("mySlides3");
           var dots = document.getElementsByClassName("image-badge");
           if (n > x.length) {slideIndex = 1}
           if (n < 1) {slideIndex = x.length}
           for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";  
           }
           for (i = 0; i < dots.length; i++) {
               dots[i].className = dots[i].className.replace(" badge-white", "");
           }
           x[slideIndex-1].style.display = "block";  
           dots[slideIndex-1].className += " badge-white";
       }
    // window.onload=dangki();

        // Đăngkí, đăng xuất
        // function dangki(){
         // 	alert('chào mừng ' + document.getElementById("username").value + ' đến với trang web');
        // }

        // function dangnhap(){
        //     window.location.href = "dangnhap.html";
        // } 
    
