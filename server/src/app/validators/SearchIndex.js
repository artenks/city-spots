import { object, number } from 'yup';

export default async (req, res, next) => {
  try {
    const schema = object().shape({
      longitude: number('longitude should be a number').required(
        'longitude is required'
      ),
      latitude: number('latitude should be a number').required(
        'latitude is required'
      ),
    });

    await schema.validate(req.query, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
