function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
};

let images = {
  list: [],
  
  contains: function(title) {
    let findTitle = title.toLowerCase();
    
    for (let i = 0; i < this.list.length; i++) {
      let titleInTheList = this.list[i].title.toLowerCase();
      if (findTitle === titleInTheList) {
        return true;
      }
    }
    return false;
  },
  
  add: function(title, artist, date) {
    if (this.contains(title)) {
      console.log(`Title: ${title} already in the list.`);
      return;
    };
    let newImg = new Image(title, artist, date);
    this.list.push(newImg);
    console.log(`New Image added to the list.`);
  },
  
  show: function() {
    if (this.list.length === 0) {
      console.log('The images list is empty.');
      return;
    };
    console.log('=== All images in the list as for now: ===');
    this.list.forEach(img => console.log(`Title: ${img.title}; Artist: ${img.artist}; Date: ${img.date}.`));
  },
  
  clear: function() {
    this.list = [];
    console.log('List was cleared.');
  }
  
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();
