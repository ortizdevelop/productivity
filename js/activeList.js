const activeList = document.querySelectorAll('.help__list');

function activeListOn(){
    activeList.forEach((item) =>
    item.classList.remove('activeList'));
    this.classList.add('activeList');
}

activeList.forEach((item) =>
item.addEventListener('click', activeListOn));