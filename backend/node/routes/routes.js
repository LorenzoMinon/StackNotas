import express from 'express';
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  archiveBlog, 
  unarchiveBlog 
} from '../controllers/BlogController.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);
router.put('/:id/archive', archiveBlog); 
router.put('/:id/unarchive', unarchiveBlog); 

export default router;
