const router = require('express').Router();
const Blog = require('../../models/Blog');
// const withAutH = require('../utils/auth');


router.delete('/:id', async (req, res) => {
  const blogId = req.params.id;
  try {
    const responseData = await Blog.destroy({
      where: {
        id: blogId,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const newBlog = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
      const blogData = await Blog.update(
        {
          title: req.body.title,
          content: req.body.content
        },
        {
          where: {
            id: req.params.id,
          }
        }
      );
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
});
 
  module.exports = router;