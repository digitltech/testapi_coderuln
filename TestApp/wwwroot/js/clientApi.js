const url = 'api/consumer';
let consumer = [];

function getConsumer() {
    fetch(url)
        .then(respomse => respomse.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('случилась хрень'.error));
}

function _displayCount(itemCount) {

}

function _displayItems(data) {
    const tBody = document.getElementById('consumer');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        let is
    })

}