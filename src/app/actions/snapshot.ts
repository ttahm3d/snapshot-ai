import { getChatCompletion } from "@/utils";

export async function getSnapshot(text: string, numberOfPoints: number, outputLength: string) {
  const chatCompletion = await getChatCompletion(outputLength, numberOfPoints, text);
  // Print the completion returned by the LLM.
  // console.log(response);
  return Response.json({ response: chatCompletion.choices[0]?.message?.content || "" });
}
