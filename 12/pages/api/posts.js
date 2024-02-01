import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function userServices(req, res) {

    if (req.method === 'POST') {
        const { title, content, authorId, published } = req.body
        const post = await prisma.create({
            data: {
                title,
                content,
                authorId,
                published,
            }
        })
        return res.json(post)
    }

}