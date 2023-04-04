
  // // Get a reference to the SVG element
  // var svgElement = document.getElementById('svg14533');

  // // Initialize svgpanzoom with default options
  // var panZoomInstance = svgPanZoom(svgElement);

  // // Optionally, customize the zoom behavior
  // panZoomInstance.setMinZoom(0.5);
  // panZoomInstance.setMaxZoom(5);

  // // Optionally, add event listeners for zooming and panning
  // svgElement.addEventListener('pan', function(e) {
  //   console.log('panning', e.detail);
  // });
  // svgElement.addEventListener('zoom', function(e) {
  //   console.log('zooming', e.detail);
  // });

const svg = document.querySelector('#svg14533');
const hammertime = new Hammer(svg);

let lastPosX = 0;
let lastPosY = 0;

hammertime.on('pan', function(event) {
  const dx = event.deltaX - lastPosX;
  const dy = event.deltaY - lastPosY;

  svg.style.transform = `translate(${dx}px, ${dy}px)`;

  lastPosX = event.deltaX;
  lastPosY = event.deltaY;
});

let lastScale = 1;

hammertime.on('pinch', function(event) {
  const scale = Math.max(1, Math.min(lastScale * event.scale, 10));

  svg.style.transform = `scale(${scale})`;

  lastScale = scale;
});



