
const mapApiLight = document.querySelector(`.server-status-map-api-light`)
const mapSection = document.querySelector(`.map`)

export function takeMapInfo(long, lat) {
      const map = new ol.Map({
            target: 'map',
            layers: [
                  new ol.layer.Tile({
                        source: new ol.source.OSM()
                  })
            ],
            view: new ol.View({
                  center: ol.proj.fromLonLat([long, lat]),
                  zoom: 11
            })
      })
      mapApiLight.style.backgroundColor = `green`
}

export function newMap(lon, lat) {
      mapSection.innerHTML = '';
      const map = new ol.Map({
            target: 'map',
            layers: [
                  new ol.layer.Tile({
                        source: new ol.source.OSM()
                  })
            ],
            view: new ol.View({
                  center: ol.proj.fromLonLat([lon, lat]),
                  zoom: 11
            })
      })
}