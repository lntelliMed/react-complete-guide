const googleDatabse = [
  'dogs.com',
  'somerecipes.com',
  'flowers.com',
  'animals.com',
  'dogpictures.com',
  'myfavoritedogs.com'
]

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('com', googleDatabse));

module.exports = googleSearch;
