import otpModel from "@/models/otp";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  const { phone, code } = req.body;
  const otp = await otpModel.findOne({ phone, code });

  if(otp){

  }else{
    return res.status(404)
  }

};

export default handler;
