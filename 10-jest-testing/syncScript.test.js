const googleSearch = require('./syncScript');

const dbMock = [
  'dogs.com',
  'testsite.com',
  'disney.com',
  'dogpictures.com',
]

describe('googleSearch()', () => {
  it('function exists', () => {
    expect(typeof googleSearch).toEqual('function');
  });
  
  it('searchs for a string and returns found matches in an array', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
  });

  it('works with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  });
});
