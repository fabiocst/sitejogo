openMenu.addEventListener('click', () => {
    menu.style.display="flex"
    carrossel.style.display="none"
    menu.style.right=(menu.offsetWidth * -1)+'px'
    setTimeout(()=> {
        menu.style.opacity= '1'
        menu.style.right= "0"
        openMenu.style.display= 'none'
    }, 10);
})

closeMenu.addEventListener('click',()=>{
    carrossel.style.display="flex"
    menu.style.opacity="0"
    menu.style.right=(menu.offsetWidth*-1)+'px'
    
    setTimeout(()=>{
        menu.removeAttribute("style")
        openMenu.removeAttribute('style')
        
    },200);
    
})
// menu.addEventListener('mouseover',()=>{
//     menu.style.display="none"
// })
// menu.addEventListener('mouseout',()=>{
//     menu.style.display="flex"
// })