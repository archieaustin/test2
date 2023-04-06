function changeColour(className) {
  var branches = document.querySelectorAll('.' + className);
   
  for (var i = 0; i < branches.length; i++) {
    var branch = branches[i];
    if (branch.getAttribute('pressed') === 'false') {
      branch.setAttribute('data-original-fill', branch.getAttribute('fill'));
      branch.setAttribute('fill', 'grey');
      branch.setAttribute('pressed', 'true');
    } else {
      branch.setAttribute('fill', branch.getAttribute('data-original-fill'));
      branch.setAttribute('pressed', 'false');
    }
  }
}
