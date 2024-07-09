// INTERSECTION OBSERVER

const cards=document.querySelectorAll('.project');

const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
        if (entry.isIntersecting){
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold:0.15,
})

cards.forEach(card =>{
    observer.observe(card);
})



// Back to top

let backTOTopButton=document.querySelector('.left-content-header');

backTOTopButton.addEventListener('click',()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

let homeButton=document.querySelector('.home-button');
homeButton.addEventListener('click',(event)=>{
    event.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
})

// Media query

let targetBlock=document.querySelector('.project');

function updateTargetContent(){
    let windowWidth=window.innerWidth;
    if (windowWidth<1000){
        targetBlock.innerHTML=`
        <div class="project-left-area-upper">
            <h1>Weather Website</h1>
            <p>Wanna know weather? <br> It's here!</p>
        </div>
        <div class="project-right-area">
            <a style="border-radius:20px;" href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank"><img src="project 1.jpg" alt="first-project" class="first-project-pic"></a>
        </div>
        <div class="project-left-area">
            <a href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank" class="project-one"><h1>View <img src="in-new-tab.svg" alt=""></h1></a>
         </div>   
        `;
    }else{
        targetBlock.innerHTML=`
        <div class="project-left-area">
            <div class="project-left-area-upper">
                <h1>Weather Website</h1>
                <p>Wanna know weather? <br> It's here!</p>
            </div>
            <a href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank" class="project-one"><h1>View <img src="in-new-tab.svg" alt=""></h1></a>
        </div>
        <div class="project-right-area">
            <a href="https://karunans2004.github.io/Weather-website-firsty-try/" target="_blank"><img src="project 1.jpg" alt="first-project" class="first-project-pic"></a>
        </div>
        `
    }
}

window.addEventListener('load', updateTargetContent);
window.addEventListener('resize', updateTargetContent);



// Animated navigation bar


let windowWidth=window.innerWidth;
if (windowWidth<1100){
  let menuIconButton=document.querySelector('.menu-icon');
  let closeIconButton=document.querySelector('.close-icon');
  let topHeader=document.querySelector('.top');
  let rightContentHeader=document.querySelector('.right-content-header');


  menuIconButton.style.display='block';
    let listOfHeaders=document.querySelectorAll('.tab');
    listOfHeaders.forEach((item)=>{
      item.style.display='none';
    });
  menuIconButton.addEventListener('click', (e)=>{
    topHeader.style.height='100%';
    rightContentHeader.style.height='100%';
    menuIconButton.style.display='none';
    closeIconButton.style.display='block';
    listOfHeaders.forEach((item)=>{
      item.style.display='block';
    });
    listOfHeaders.forEach((item)=>{
      item.addEventListener('click',(e)=>{
        let newTop=document.querySelector('.top');
        newTop.style.height='initial';
        listOfHeaders.forEach((item)=>{
          item.style.display='none';
        });
        menuIconButton.style.display='block';
        closeIconButton.style.display='none';
      });
    });
  });

  closeIconButton.addEventListener('click', (e)=>{
    closeIconButton.style.display='none';
    menuIconButton.style.display='block';
    topHeader.style.height='initial';
    listOfHeaders.forEach((item)=>{
      item.style.display='none';
    });
  });
}


window.addEventListener('resize',()=>{
  let windowWidth=window.innerWidth;
  if (windowWidth<1100){
    toggle(true);
    return;
  }else if(windowWidth>1100){
    removeToggle(true);
    return;
  }
})

function toggle(isSmaller){
  let menuIconButton=document.querySelector('.menu-icon');
  let closeIconButton=document.querySelector('.close-icon');
  let topHeader=document.querySelector('.top');
  let rightContentHeader=document.querySelector('.right-content-header');
  menuIconButton.style.display='block';
  closeIconButton.style.display='none';
  topHeader.style.height='initial';
  let listOfHeaders=document.querySelectorAll('.tab');
  listOfHeaders.forEach((item)=>{
    item.style.display='none';
  });

  menuIconButton.addEventListener('click', (e)=>{
    topHeader.style.height='100%';
    rightContentHeader.style.height='100%';
    menuIconButton.style.display='none';
    closeIconButton.style.display='block';
    listOfHeaders.forEach((item)=>{
      item.style.display='block';
    });

    listOfHeaders.forEach((item)=>{
      item.addEventListener('click',(e)=>{
        let newTop=document.querySelector('.top');
        newTop.style.height='initial';
        listOfHeaders.forEach((item)=>{
          item.style.display='none';
        });
        menuIconButton.style.display='block';
        closeIconButton.style.display='none';
      });
    });
  });
  closeIconButton.addEventListener('click', (e)=>{
    closeIconButton.style.display='none';
    menuIconButton.style.display='block';
    topHeader.style.height='initial';
    listOfHeaders.forEach((item)=>{
      item.style.display='none';
    });
  });


}

function removeToggle(islarger){
  let menuIconButton=document.querySelector('.menu-icon');
  let closeIconButton=document.querySelector('.close-icon');
  let topHeader=document.querySelector('.top');
  let rightContentHeader=document.querySelector('.right-content-header');
  topHeader.style.height='initial';
  rightContentHeader.style.alignItems='center';
  closeIconButton.style.display='none';
  menuIconButton.style.display='none';
  let listOfHeaders=document.querySelectorAll('.tab');
  listOfHeaders.forEach((item)=>{
    item.style.display='block';
  });
}
