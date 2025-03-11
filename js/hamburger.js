const sidebar = document.getElementById('sidebar');

let flag = true;

function likeOpen(e) {
  e.preventDefault();  
  sidebar.style.right = flag ? '0%' : '-100%';  
  flag = !flag;  
}
