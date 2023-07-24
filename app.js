const imgs = document.querySelectorAll('.imgs');

imgs.forEach((items) => {
  items.addEventListener('click', function () {
    removeOtherActiveClass();
    items.classList.add('active');
  });
});

function removeOtherActiveClass()
{

    for (const img of imgs) {
        img.classList.remove("active")
    }



}