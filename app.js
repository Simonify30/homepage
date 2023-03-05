const menu = document.querySelector('.menu');
const remove = document.querySelector('.remove');
const dropdown = document.querySelector('.dropdown')

menu.addEventListener('click', function(){
    dropdown.style.visibility = 'visible'
})


remove.addEventListener('click', function(){
    dropdown.style.visibility = 'hidden'

})