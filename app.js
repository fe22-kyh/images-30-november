const cardContainer = document.querySelector(".card-container");

let cards = {
  length: 12,
  data: []
};


/**
 * Create one card entry (invoked from createImageData)
 * @param {int} dataId - id for each entry 
 * @param {string} dataRef - ref to the data
 */
function createImageEntry(dataId, dataRef) {
  return { id: dataId, ref: dataRef };
}

/**
 * Create all the card entries
 * @param {int} size - Amount of data
 * @param {array} collection - Array where data is pushed to
 */
function createImageData(size, collection) {
  for (let i = 0; i < size; i++) {
    let imageRef = `https://picsum.photos/id/${i * 7}/150/200`;
    let entry = createImageEntry(i, imageRef);

    collection.push(entry);
  }
}

/**
 * Extends a list with the same data
 * @param {*} data - data to extend
 * @returns - duplicated data
 */
function duplicateData(data) {
  return [...data, ...data];
}

function shuffleData(data) {
  let currentIndex = data.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [data[currentIndex], data[randomIndex]] = [data[randomIndex], data[currentIndex]];
  }

  return data;
  //return data.sort(() => .5 - Math.random());
}

/**
 * The visual card to be generated from entry
 * @param {*} entry - data to generate card {id, ref}
 */
function createImageCard(entry) {
  let div = document.createElement("div");
  let img = document.createElement("img");

  div.className = "card";

  img.src = entry.ref;
  img.setAttribute("data-card-id", entry.id);

  div.append(img);

  return div;
}

/**
 * Create and place cards at parent from data
 * @param {*} data - data to generate cards from {id, ref}
 * @param {*} parent - parent container for cards
 */
function createDOMCards(data, parent) {
  for (let entry of data) {
    let imageCard = createImageCard(entry);

    parent.append(imageCard);
  }
}

// function initializeGame(cards) {
//   createImageData(cards.length, cards.data);

//   cards.data = duplicateData(cards.data);
//   cards.data = shuffleData(cards.data);

//   createDOMCards(cards.data, cardContainer);
// }

// initializeGame(cards);

(function initializeGame(cards) { // IIFE (Immediately invoked function expression)
  createImageData(cards.length, cards.data);

  cards.data = duplicateData(cards.data);
  cards.data = shuffleData(cards.data);

  createDOMCards(cards.data, cardContainer);
})(cards);
