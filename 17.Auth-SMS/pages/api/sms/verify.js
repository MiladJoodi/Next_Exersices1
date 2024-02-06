import otpModel from "@/models/otp";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  const { phone, code } = req.body;

  const otp = await otpModel.findOne({ phone, code });

  if (otp) {
    const date = new Date();
    const now = date.getTime(); // 8 - 10 || 12 - 10

    if (otp.expTime > now) {
      return res.status(200).json({ message: "Code is correct :))" });
    } else {
      return res.status(410).json({ message: "Code is expired !!" });
    }
  } else {
    return res.status(409).json({ message: "Code is not correct !!" });
  }
};

export default handler;
