import connectToDB from "@/utils/db";
import coursesModel from "@/models/course"
import { isValidObjectId } from "mongoose";

const handler = async (req, res)=>{
    connectToDB()
    const {id} = req.query;

    if(isValidObjectId(id)){
        try{
            await coursesModel.findOneAndDelete({_id : id})
            return res.json({message: "Course Deleted"})
        }catch(err) {
            return res.status(500).json({message: "Internal Server Error"})
        }
    }else{
        return res.status(422).json({message: "Course ID is not valid"})
    }

    

}

export default handler