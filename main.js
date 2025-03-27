const appStorebtn = document.querySelector('.btn-appstore');
const playStorebtn = document.querySelector('.btn-playstore');


appStorebtn.addEventListener('mouseenter', () => {
    playStorebtn.style.backgroundColor = 'transparent';
    playStorebtn.style.borderColor = '#fff';
    playStorebtn.style.boxShadow = '0 0 5px 1px #fff';
});

appStorebtn.addEventListener('mouseleave', () => {
    playStorebtn.style.backgroundColor = 'coral';
    playStorebtn.style.borderColor = 'coral';
    playStorebtn.style.boxShadow = '0 0 5px 1px coral';
});