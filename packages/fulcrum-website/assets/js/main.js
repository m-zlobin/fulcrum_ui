window.addEventListener('load', function () {
    //switch theme
    var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    var currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        var chart
        Chart.helpers.each(Chart.instances, function(instance){
            chart = instance;
          })
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            chart.options.annotation.annotations[0].borderColor = '#ffffff';
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            chart.options.annotation.annotations[0].borderColor = '#495460';
        }
        chart.update();
    }

    toggleSwitch.addEventListener('change', switchTheme, false);


    //mobile menu
    var openMenu = document.querySelector("#hamburger-menu-open");
    var closeMenu = document.querySelector("#hamburger-menu-close");
    var body = document.querySelector('body');
    openMenu.onclick = function () {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
        body.classList.toggle("open-menu");
    }
    closeMenu.onclick = function () {
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        body.classList.toggle("open-menu");
    }
});