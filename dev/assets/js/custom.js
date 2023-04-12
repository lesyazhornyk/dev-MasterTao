const section = document.querySelectorAll('section');
const container_fluid = document.querySelectorAll('container-fluid');
console.log('container_fluid');


container_fluid.forEach(element => {
const sectionHasFluid = element.closest('section')

  if (!sectionHasFluid.classList.contains('first-screen')) {
    sectionHasFluid.closest('section').style.padding = '0 50px';
  }
});


$( document ).ready(function() {
    $('.banner').slick({
    //dots: true,
    arrow: true,
    appendArrows: ".banner-nav",
    responsive: [
        {
          breakpoint: 991,
          settings: {
           arrows: false,
           dots: true,
          }
        },
      ]
    });
});


const btnBox = document.querySelectorAll('.btn-box');

btnBox.forEach(item => {
  item.closest('.col-md-6').classList.add('button-group');
});
document.getElementById('fileInput').onchange = function(){
 document .getElementById('file-name').innerHTML = this.files[0].name;
};

