// eslint-disable-next-line no-unused-vars
function menuToggle() {
  // eslint-disable-next-line no-var
  var x = document.getElementById('myNavToggle');
  if (x.className === 'navToggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navToggle';
  }
}
