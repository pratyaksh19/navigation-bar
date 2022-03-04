function showMenu() {
    const lists = document.querySelector('ul');
    lists.classList.toggle('show');
}

//logic for making the clicked bar active
const listItems = document.querySelectorAll('a');
// by default first element class is added
listItems[0].classList.add('active');
// gives list of all a tags
console.log(listItems);
listItems.forEach((item, i)=>{
    item.addEventListener("click",()=>{
        //if any li has active class it will remove it first
        listItems.forEach(item=>item.classList.remove('active'));
        //select that particular item
        item.classList.add('active');
    });
});