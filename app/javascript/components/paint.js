import LazyLinePainter from 'lazy-line-painter'

let heartIcon = document.querySelector('#heart-icon');
let heartAnimation = new LazyLinePainter(heartIcon, {"ease":"easeLinear","strokeWidth":20,"strokeOpacity":1,"strokeColor":"#FF506D","strokeCap":"square"});

// let jsIcon = document.querySelector('#js-icon');
// let jsAnimation = new LazyLinePainter(jsIcon, {"ease":"easeLinear","strokeWidth":0.3,"strokeOpacity":1,"strokeColor":"#6C9CC6","strokeCap":"square","delay":300});

export { heartAnimation }

