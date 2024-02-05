const request = require("request");
const otpModel = require("@/models/otp");

import connectToDB from "@/configs/db";

const handler = async (req, res) => {
  connectToDB();

  if (req.method !== "POST") {
    return false;
  }

  const { phone } = req.body;

  const date = new Date();
  const expTime = date.getTime() + 300000;

  const code = Math.floor(Math.random() * 99999);

  request.post(
    {
      url: "http://ippanel.com/api/select",
      body: {
        op: "pattern",
        user: "09921558293",
        pass: "sabzLearn12!@",
        fromNum: "3000505",
        toNum: phone,
        patternCode: "jqcrkffb9sevvss",
        inputData: [{ "verification-code": code }],
      },
      json: true,
    },
    async function (error, response, body) {
      if (!error && response.statusCode === 200) {
        //YOU‌ CAN‌ CHECK‌ THE‌ RESPONSE‌ AND SEE‌ ERROR‌ OR‌ SUCCESS‌ MESSAGE

        await otpModel.create({
          phone,
          code,
          expTime,
        });

        return res.status(201).json({ message: "Code Sent Successfully :))" });
      } else {
        console.log("whatever you want");
        return res.status(500).json({ message: "UnKnown Error !!" });
      }
    }
  );
};

export default handler;
