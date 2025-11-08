function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
};

function getImage (title, artist, date) {
  return {
    title: title, artist: artist, date: date
  };
};

let paints = [
  {
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    year: 1503
  },
  {
    title: 'The Last Supper',
    artist: 'Leonardo da Vinci',
    year: 1495
  },
  {
    title: 'Starry Night',
    artist: 'Vincent van Gogh',
    year: 1889
  },
  {
    title: 'The Scream',
    artist: 'Edvard Munch',
    year: 1893
  },
  {
    title: 'Guernica',
    artist: 'Pablo Picasso',
    year: 1937
  },
  {
    title: 'The Kiss',
    artist: 'Gustav Klimt',
    year: 1907
  },
  {
    title: 'Girl With a Pearl Earring',
    artist: 'Johannes Vermeer',
    year: 1665
  },
  {
    title: 'The Birth of Venus',
    artist: 'Sandro Botticelli',
    year: 1485
  },
  {
    title: 'Las Meninas',
    artist: 'Diego Velázquez',
    year: 1656
  },
  {
    title: 'The Creation of Adam',
    artist: 'Michelangelo',
    year: 1512
  }
];

console.log('=== Original ===');
paints.forEach(item => console.log(`Title: ${item.title}; Artist: ${item.artist}; Date: ${item.year}.`));
console.log();

let images1 = paints.map(item => new Image(item.title, item.artist, item.year));
console.log('=== Images1 (Constructor) ===');
images1.forEach(item => console.log(`Title: ${item.title}; Artist: ${item.artist}; Date: ${item.date}.`));
console.log();

let images2 = images1.map(item => getImage(item.title, item.artist, item.date));
console.log('=== Images2 (Factory) ===');
images2.forEach(item => console.log(`Title: ${item.title}; Artist: ${item.artist}; Date: ${item.date}.`));
