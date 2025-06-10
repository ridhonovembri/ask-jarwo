const OpenAI = require("openai");

const dotenv = require("dotenv");
dotenv.config();

exports.generateResponse = async (req, res) => {
  try {
    const { prompt } = await req.body;

    // console.log('prompt', prompt)

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "meta-llama/llama-3.2-3b-instruct:free",
      // model: "deepseek/deepseek-r1-0528:free",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
      // stream: true,
      temperature: 1,
    });

    const script =
      response.choices?.[0]?.message?.content || "No script generated";

    // res.json({ response: "Hi" });
    res.json({ response: script });
  } catch (error) {
    console.log(error);
    throw new Error(error);    
  }
};
