const { post } = require("../app")
const db = require("../db")
const { BadRequestError, NotFoundError} = require

class nutrition {
    static async createNewNutrition({Post,user}){
        if (!Post || !user){   
            throw new BadRequestError("Post or user missing");
        }
        const requiredFields = ["name","category","calories","image"]
        requiredFields.forEach(field => {
            if (!Post.hasOwnProperty(field)) {
                throw new BadRequestError(`Required Field - ${field} - missing from request body.`)
            }
             })
            const results = await db.query(
                `INSERT INTO nutrition (name,category,calories,image,users_id)
                 VALUES ($1,$2,$3,$4,(SELECT id FROM users WHERE email = $5))
                 RETURNING id,
                           name,
                           category,
                           calories,
                           image,
                           users_id AS "userId",
                           created_at AS "createdAt"
                `,[Post.name,Post.category,Post.calories,Post.image,user.email]
            
            )
            return results.rows[0]
    }

    static async fetchPostbyId(postId) {

        console.log(postId)

        let id = postId.user.postId;

        id = parseInt(id)

        console.log(id)

        const results = await db.query(
            `
                SELECT p.id,              
                       p.name,
                       p.category,
                       p.calories,
                       p.image,
                       p.users_id AS userId,
                       p.created_at AS "createdAt"
                FROM  nutrition AS p
                JOIN users AS u ON u.id = p.users_id
                WHERE p.id = $1;
            
            `, [id]
        )
        console.log("line 51")

            const post1 =  results.rows[0]

            if(!post1){
                throw new NotFoundError()
            }
            return post1
    }

    static async editPost({postId, postUpdate}){
        if (!Post || !user){   
            throw new BadRequestError("Post or user missing");
        }
        const requiredFields = ["category"]
        requiredFields.forEach(field => {
            if (!Post.hasOwnProperty(field)) {
                throw new BadRequestError(`Required Field - ${field} - missing from request body.`)
            }
             })
            const results = await db.query(
                `
                    UPDATE posts
                    SET category  =$1,
                        updated_at = NOW()
                    WHERE id = $2
                    RETURNING id,
                        name,
                        category,
                        calories,
                        image,
                        users_id AS "userId",
                        created_at AS "createdAt"
                `,[postUpdate.category, postId]
            )
            return results.rows[0]
    }

    static async listPosts() {
        console.log("96)")
        const results = await db.query(
            `
                SELECT p.id,              
                       p.name,
                       p.category,
                       p.calories,
                       p.image,
                       p.users_id AS userId,
                       p.created_at AS "createdAt"
                FROM  nutrition AS p
                JOIN users AS u ON u.id = p.users_id
                ORDER BY p.created_at DESC;
            
            `, 
        )
        console.log("112")
        console.log("resulst",results.rows[0])
        return results.rows[0]

    }
   

}

module.exports = nutrition