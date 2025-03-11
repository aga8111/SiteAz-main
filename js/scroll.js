const twins = document.getElementById('twins') 

function scrolldown(){
    // console.log(twins.offsetTop); 

    scrollTo({
        top: twins.offsetTop,
        behavior:'smooth'
    })
}