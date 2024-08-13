const tabs = [...document.getElementsByClassName('tab')];

tabs.map(tab => {
  tab.addEventListener('click', event => {
    event.preventDefault();
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    tab.classList.add('active-tab'); 
  });
});
