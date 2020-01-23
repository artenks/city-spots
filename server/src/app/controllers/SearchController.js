import Spot from '../models/Spot';

class SearchController {
  async index(req, res) {
    const { longitude, latitude } = req.query;

    const spots = await Spot.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json(spots);
  }
}

export default new SearchController();
