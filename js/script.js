//zmiana opacity na headerze
window.addEventListener('scroll', function() {
    const scrollFromTop = window.scrollY;
    const headerChange = document.querySelector('header');
    const headerHeight = document.querySelector('.about').offsetTop;
    
    headerChange.style.opacity = 1 - scrollFromTop/headerHeight;
})

//pojawienie się skillsContainer
$('button.showSkills').on('click', function(){
    $('button.showSkills').attr('id', 'inactive');
    $('div.skillsContainer').removeAttr('id', 'inactive')
})

//przeładowanie strony
document.querySelector('.reload').addEventListener('click', function(){
    console.log('dsas');
    window.location.reload();
})