document.addEventListener('DOMContentLoaded', function() {
    //////////////////////////
   // –––––––– Navbar

    window.addEventListener('scroll', function() {
    let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    let navbar = document.querySelector('[fs-navbar]');
    if (navbar) {
        if (scrollPercentage > 2.5 && navbar.getAttribute('fs-navbar') !== 'is-dark') {
            navbar.setAttribute('fs-navbar', 'is-dark');
            navbar.classList.add('is-transparent');
        } else if (scrollPercentage < 2.5 && navbar.getAttribute('fs-navbar') === 'is-dark' && navbar.classList.contains('is-transparent')) {
            navbar.setAttribute('fs-navbar', '');
        } else 
        return;
    }
    });
   
   //////////////////////////
   // –––––––– Breadcrumb nav
   
   const breadNav = document.querySelector('.breadcrumb_nav');
   const breadIcons = document.querySelector('.breadcrumb_component');
   const breadText = document.querySelectorAll('.breadcrumb-link .text-color-white');
   
   // If statment checks if the elements are in HTML
   if (breadNav && breadIcons && breadText.length > 0) {
     var tl = gsap.timeline({  
       scrollTrigger: {
         trigger: '.main-wrapper',
         scrub: 0.1,
         start: 'top top',
         end: '2.5% top',
         markers: false
       }
     });
   
     tl.to(breadNav,{background: "#fff", color:"#163767"})
       .to(breadText, {color:"#163767"},'<')
       .to(breadIcons, {color:"#163767"},'<');
   }
   
   
   
   //////////////////////////
   // ––––––– Contact section animations made with GSAP
   
   const sectionContact = document.querySelector('.section_contact');
   
   if (sectionContact) {
   
   const items = Array.from(document.querySelectorAll(".contact_list-item"));
   const icons = document.querySelectorAll(".icon-embed-medium");
   const content = document.querySelectorAll(".contact_content");
   const contentList = document.querySelectorAll(".contact_content_list");
   let contentListItem = document.querySelectorAll(".contact_content_list-item");
   
   gsap.set(icons, {rotation: 0});
   gsap.set(contentListItem, {opacity: 0, yPercent: 30});
   
   items.forEach(item => {
     const hover = gsap.timeline({paused: true});
     const open = gsap.timeline({paused: true});
     const close = gsap.timeline({paused: true});
     let hoverBlock = item.querySelector(".contact_hover-block");
     let header = item.querySelector(".heading-style-h3");
     let icon = item.querySelector(".icon-embed-medium");
     let expander = item.querySelector(".contact_expander");
     let imageLoader = item.querySelector(".contact_image-loader");
     let content = item.querySelector(".contact_content");
     let contentList = item.querySelector(".contact_content_list");
     let contentListItem = item.querySelectorAll(".contact_content_list-item");
     let contactHeader = item.querySelector(".contact_header");
   
     // ––––––– Hover animation
     hover.to(hoverBlock, {height: "100%", duration: 0.6, ease:"power3.inOut"})
     .to(header,{color: "#ffffff", duration: 0.6, ease:"power3.inOut"},"<")
     .to(icon,{color: "#ffffff", rotation: 180, duration: 0.6, ease:"power3.inOut"},"<");
   
     // ––––––– Open animation
     open.to(icon,{rotation: 180, color: "#ffffff", duration: 0.6, ease:"power3.inOut"},"<")
     .to(item, {backgroundColor: "#163767", duration: 0}, "<")
     .to(expander,{height: "auto", duration: 0.8, ease:"power3.inOut"},"<")
     .to(header,{color: "#ffffff", duration: 0.6, ease:"power3.inOut"},"<")
     .to(imageLoader,{height: "0%", duration: 1, ease:"power3.out" },"-=0.1")
     // .to(contentList,{opacity: 1, duration: 0.8, ease:"power3.out" },"<")
     .to(contentListItem, {opacity: 1, yPercent: 0, duration: 0.3, stagger: 0.1},"<=+0.5")
   
     // ––––––– Close animation
     close.to(expander,{height: "0vh", duration: 0.6, ease:"power3.in"},"<")
     .to(imageLoader,{height: "0%", duration: 0.8, ease:"power3.in" },"-=0.1")
     .to(contentListItem, {opacity: 0, yPercent: 30, duration: 0.3, stagger: 0.1},"<")
     .to(item, {backgroundColor: "transparent", duration: 0.2}, "<=+ 0.2")  
   
     let isClicked = false;
     item.addEventListener('mouseenter', () => {
       if (!item.classList.contains('is-active')) {
         hover.play();
       }
     });
     item.addEventListener('mouseleave', () => {
       if (!item.classList.contains('is-active')) {
         hover.reverse();
       }
     });
     
     contactHeader.addEventListener('click', () => {
       if (!isClicked) {
         item.classList.add('is-active');
         open.restart();
         isClicked = true;
         
       } else {
         item.classList.remove('is-active');
         close.restart();
         isClicked = false;
       }    
     });
   });
   }
   });