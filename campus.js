const express = require('express');
const router = express.Router();
const db = require('./database');

/*
  API 1: Get all campus (with pagination)
  Example: /campus?page=1
*/
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const result = await db.query(
      `
      SELECT *
      FROM campus
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );

    res.json({
      success: true,
      page: page,
      data: result.rows
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/*
  API 2: Get campus by campus name (params)
  Example: /campus/name/pune
*/
router.get('/name/:campusName', async (req, res) => {
  const campusName = req.params.campusName;

  try {
    const result = await db.query(
      `
      SELECT *
      FROM campus
      WHERE campus_name = $1
      `,
      [campusName]
    );

    res.json({
      success: true,
      campus: campusName,
      data: result.rows
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/*
  API 3: Get campus by campus name AND id
  Example: /campus/pune/1
*/
router.get('/:campusName/:campusId', async (req, res) => {
  const campusName = req.params.campusName;
  const campusId = parseInt(req.params.campusId); // integer

  try {
    const result = await db.query(
      `
      SELECT *
      FROM campus
      WHERE campus_name = $1 AND campus_id = $2
      `,
      [campusName, campusId]
    );

    res.json({
      success: true,
      data: result.rows[0] || null
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


/*
  API 4: Get campus by ID (KEEP THIS LAST)
  Example: /campus/1
*/
router.get('/:id', async (req, res) => {
  const campusId = req.params.id;

  try {
    const result = await db.query(
      `
      SELECT *
      FROM campus
      WHERE id = $1
      `,
      [campusId]
    );

    res.json({
      success: true,
      data: result.rows[0] || null
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
