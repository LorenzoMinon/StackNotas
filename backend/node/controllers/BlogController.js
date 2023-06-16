import BlogModel from "../models/BlogModel.js";

//Metodos 

//Mostrar Todos
export const getAllBlogs = async (req,res)=> {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch(error) {
        res.json( {message: error.message} )

    }
}

//Mostrar un registro:
export const getBlog = async (req,res) => {
    try{
        const blog = await BlogModel.findAll({
            where:{
                id:req.params.id}
            })
            res.json(blog[0])
        }catch(error){
            res.json( {message: error.message} )
        }
}

//Crear registro:
export const createBlog = async (req,res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch(error){
        res.json( {message: error.message} )

    }
}

//Actualizar registro:
export const updateBlog = async(req,res) => {
    try{
        await BlogModel.update(req.body, {
            where: { id: req.params.id}

        })
        res.json({message: "Nota actualizada correctamente."})
    } catch(error){
        res.json( {message: error.message})
    }
}

//Borrar registro:

export const deleteBlog = async(req,res) => {
    try{
        BlogModel.destroy({
            where: {id:req.params.id}
        })
        res.json({message: "Nota eliminada correctamente."})
    } catch (error){
        res.json( {message: error.message} )
    }
}

// Archivar un registro:
// Archivar nota
export const archiveBlog = async (req, res) => {
    try {
      const blog = await BlogModel.findByPk(req.params.id);
  
      if (!blog) {
        return res.status(404).json({ message: "Nota no encontrada" });
      }
  
      blog.archived = true;
      await blog.save();
  
      res.json({ message: "Nota archivada correctamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Desarchivar nota
  export const unarchiveBlog = async (req, res) => {
    try {
      const blog = await BlogModel.findByPk(req.params.id);
  
      if (!blog) {
        return res.status(404).json({ message: "Nota no encontrada" });
      }
  
      blog.archived = false;
      await blog.save();
  
      res.json({ message: "Nota desarchivada correctamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  