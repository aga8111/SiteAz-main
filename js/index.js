const basqasey= document.getElementById("basqasey")

const arr = ['.az', '.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru', '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', '.info.az', '.biz.az', '.net.az']

let kod =''
arr.map(item =>{
    kod+= `<option>${item}</option>`
})
basqasey.innerHTML = kod

function btndeyish(plan) {
    let ayliqBtn = document.getElementById("btn1");
    let illikBtn = document.getElementById("btn2");
    let year1 = document.getElementById("year1");
    let year2 = document.getElementById("year2");
    let year3 = document.getElementById("year3");

    if (plan === "ayliq") {
        year1.innerHTML = "₼5<span class='text-[16px] font-[500]'> /ay</span>";
        year2.innerHTML = "₼10<span class='text-[16px] font-[500]'> /ay</span>";
        year3.innerHTML = "₼20<span class='text-[16px] font-[500]'> /ay</span>";

        ayliqBtn.classList.add("bg-[#A271F2]", "text-white");
        ayliqBtn.classList.remove("text-gray-500");
        
        illikBtn.classList.add("text-gray-500");
        illikBtn.classList.remove("bg-[#A271F2]", "text-white");
    }
    
    else{
        year1.innerHTML = "₼60<span class='text-[16px] font-[500]'> /ay</span>";
        year2.innerHTML = "₼120<span class='text-[16px] font-[500]'> /ay</span>";
        year3.innerHTML = "₼240<span class='text-[16px] font-[500]'> /ay</span>";

         
        illikBtn.classList.add("bg-[#A271F2]", "text-white");
        illikBtn.classList.remove("text-gray-500");
        
        ayliqBtn.classList.add("text-gray-500");
        ayliqBtn.classList.remove("bg-[#A271F2]", "text-white");
    }
}