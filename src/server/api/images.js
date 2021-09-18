const router = require('express').Router();
const axios = require('axios');

router.route('/apollo').get(async (req, res) => {
  const response = await axios({
    method: 'GET',
    url: 'https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image'
  });
  if (response.stats !== 200) {
    res.json('Unable to fetch NASA data.');
    return;
  }
  res.json(response.data);
});

module.exports = router;
