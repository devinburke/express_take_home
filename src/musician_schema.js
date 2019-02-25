const yup = require('yup'),
  genres = ['JAZZ', 'BLUES', 'ROCK'];

export default yup.object().shape({
  firstName: yup
    .string()
    .max(50)
    .required(),
  lastName: yup
    .string()
    .max(50)
    .required(),
  genre: yup
    .string()
    .required()
    .oneOf(genres),
});
