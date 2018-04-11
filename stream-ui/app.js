document.addEventListener('DOMContentLoaded', function() {
    
    
    const toggleButton = document.querySelector('#taggle-button');
    const wrapper = document.querySelector('.wrapper')
    
    toggleButton.addEventListener('click', function() {
        
        wrapper.classList.toggle('show-nav')
    })  

})