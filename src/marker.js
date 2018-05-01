let mapboxgl = require('mapbox-gl');

let markerFactory = (type, coord) => {
    const markerElement = document.createElement('div');
    markerElement.style.width = "20px";
    markerElement.style.height = "20px";
    markerElement.style.backgroundSize = 'contain';
    markerElement.style.backgroundRepeat = 'no-repeat';

    switch(type.toLowerCase()) {
        case 'hotel': 
            markerElement.style.backgroundImage = "url('http://i.imgur.com/D9574Cu.png')";
            break;
        case 'activity':
            markerElement.style.backgroundImage = "url('http://i.imgur.com/WbMOfMl.png')";    
            break;
        case 'restaurant':
            markerElement.style.backgroundImage = "url('http://i.imgur.com/cqR6pUI.png')";
            break;
        default:
            markerElement.style.backgroundColor = "red"        
    }

    return new mapboxgl.Marker(markerElement).setLngLat(coord);  
}

export default markerFactory;