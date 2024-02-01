import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export default async function userServices(req, res) {

    // if (req.method === 'POST') {
    //     const { title, content, authorId, published } = req.body
    //     const user = await prisma.user.create({
    //         data: {
    //             email: "sss@gmail.com",
    //             name: "miald",
    //             password: "123456"
    //         }
    //     })
    //     return res.json(user)
    // }

    if (req.method === 'POST') {
        const {title, content, authorId, published} = req.body;
        const post = await prisma.post.create({
          data: {
            title,
            content,
            authorId,
            published,
          },
        });
        return res.json(post);
      }

}
