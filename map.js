// scripts/map.js
document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('map-container');
    const map = new google.maps.Map(mapContainer, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    const locations = [
        { lat: -34.397, lng: 150.644, title: '地点1' },
        { lat: -35.297, lng: 149.644, title: '地点2' }
        // 更多地点
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map: map,
            title: location.title
        });
    });
});
