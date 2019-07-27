function menuToggle () {
    var x = document.getElementById('myNavToggle');
    if (x.className === 'navToggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navToggle';
    }
  }