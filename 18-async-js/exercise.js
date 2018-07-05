const getCustomer = (id, callback) => {
  setTimeout(() => {
    callback({
      id: 1,
      name: 'Test User',
      isGold: true,
      email: 'email@test.com'
    });
  }, 4000);
};

const getTopMovies = (callback) => {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
};

const sendEmail = (email, movies, callback) => {
  setTimeout(() => {
    callback();
  }, 4000);
};

getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});
