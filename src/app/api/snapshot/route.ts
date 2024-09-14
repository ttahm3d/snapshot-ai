import { getChatCompletion } from "@/utils";

export async function POST(req: Request, res: Response) {
  const { text, numberOfPoints, outputLength } = await req.json();

  const chatCompletion = await getChatCompletion(outputLength, numberOfPoints, text);
  // Print the completion returned by the LLM.
  // console.log(response);
  return Response.json({ response: chatCompletion.choices[0]?.message?.content || "" });
}

export async function GET(req: Request, res: Response) {
  return Response.json({ message: "tahir" });
}
