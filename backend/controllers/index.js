// const OpenAI = require("openai");
// const Groq = require("groq-sdk");
// import { groq } from '@ai-sdk/groq';

const dotenv = require("dotenv");
dotenv.config();

// exports.generateResponseOpenAI = async (req, res) => {
//   try {
//     const { prompt } = await req.body;

//     // console.log('prompt', prompt)

//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const response = await openai.chat.completions.create({
//       model: "meta-llama/llama-4-maverick:free",
//       // model: "meta-llama/llama-3.2-3b-instruct:free",
//       // model: "deepseek/deepseek-r1-0528:free",
//       // model: "google/gemini-2.0-flash-exp:free",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.5,
//       stream: false,
//       temperature: 1,
//     });

//     const script =
//       response.choices?.[0]?.message?.content || "No script generated";
//     res.json({ response: script });
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

exports.generateResponseGroq = async (req, res) => {
  const { prompt } = await req.body;

  // console.log(prompt);

  // const groq = new Groq();
  // const response = await groq.chat.completions.create({
  //   messages: [
  //     {
  //       role: "user",
  //       content: prompt,
  //     },
  //   ],
  //   // model: "meta-llama/llama-4-scout-17b-16e-instruct",
  //   model: "meta-llama/llama-4-maverick-17b-128e-instruct",
  //   // model: "deepseek-r1-distill-llama-70b",
  //   temperature: 1,
  //   max_completion_tokens: 1024,
  //   top_p: 1,
  //   stream: false,
  //   // response_format: {
  //   //   type: "json_object",
  //   // },
  //   stop: null,
  // });

  // const script =
  //   response.choices?.[0]?.message?.content || "No script generated";

  res.json({ response: "Hi... I am AI" });
};
