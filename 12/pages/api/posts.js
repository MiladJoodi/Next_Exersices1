import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export default async function userServices(req, res) {

  //POST
    if (req.method === 'POST') {
        const {title, content, authorId, published} = req.body;
        console.log("first")
        const post = await prisma.post.create({
          data: {
            title,
            content,
            authorId,
            published
          },
        });
        return res.json(post);
      }
  //POST

  // GET
    if(req.method === 'GET'){
      const {id} = req.query;
      if(id){
        const post = await prisma.post.findFirst({
        where:{
          id : Number(id)
        },
        })
        if(!post){
          return res.json({message: "Not Found"})
        }
        res.json(post)
      }else{
        const posts = await prisma.post.findMany({
          where:{
            published: true
          }
        })
        res.json(posts)
      }
      res.status = 400
      res.json({error: "Bad Request"})
    }
  // GET

}
