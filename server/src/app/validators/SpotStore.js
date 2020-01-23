import { object, number, string } from 'yup';

export default async (req, res, next) => {
  try {
    const schema = object().shape({
      name: string('name should be a string').required('name is required'),
      type: string('type should be a string').required('type is required'),
      longitude: number('longitude should be a number').required(
        'longitude is required'
      ),
      latitude: number('latitude should be a number').required(
        'latitude is required'
      ),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
