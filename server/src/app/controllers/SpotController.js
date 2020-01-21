import Spot from '../models/Spot';

class SpotController {
  async index(_req, res) {
    const spots = await Spot.find();

    return res.json(spots);
  }

  async store(req, res) {
    const { name, type, longitude, latitude } = req.body;

    const spot = await Spot.create({
      name,
      type,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
    });

    return res.json(spot);
  }
}

export default new SpotController();
