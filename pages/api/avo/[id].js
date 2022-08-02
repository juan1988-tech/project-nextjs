import Database from '../../../database/db';

const allAvos = async (req, res) => {
  const data = await Database.getAll();
  const id = req.query.id;
  const avo = await Database.getById(id);
  res.status(200).json({avo});
};

export default allAvos;