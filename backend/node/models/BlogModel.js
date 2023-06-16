import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{ //notas en vez de blogs.
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    archived: {type: DataTypes.BOOLEAN, defaultValue: false}, // Para ver si estan archivadas o no un bool.
})

export default BlogModel 