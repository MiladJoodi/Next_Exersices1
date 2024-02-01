const handler = (res, req) => {


    if(req.method === 'GET'){
        //code=> Get all todos


    }else if(req.method === 'POST'){
        //code=> Create new todo
        
        connectToDB()

        const { token } = req.cookies;
      
        if (!token) {
          res.status(401).json({ message: "You are not login" })
        }
      
        const tokenPayload = verifyToken(token);
      
        if (!tokenPayload) {
          return res.status(401).json({ message: "You are not login" })
        }


    }else{
        return false
    }
}

export default handler