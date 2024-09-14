import Gorq from "groq-sdk";

const gorq = new Gorq({
  apiKey: "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",
});

export const getChatCompletion = async (
  outputLength: string,
  numberOfPoints: number,
  text: string
) => {
  return gorq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "system",
        content: `You are an expert in writing appraisal summaries. 
          Act as an AI assistant that takes the input from user and generates the appraisal summaries. 
          Don't respond to any other queries. 
          Keep the points concise and don't lose the context of the text being summarized. 
          Keep the text within ${outputLength} number of characters inclusive of spaces. 
          Please provide the following information in bullet points, with each point on a new line
          Limit the number of points to ${numberOfPoints} bullet points.
          Don't include any text prior to the points. Add two new line at end of each bullet point
          `,
      },
      {
        role: "user",
        content: `Summarize the text as per the context defined: ${text}`,
      },
    ],
    temperature: 1,
    stream: false,
  });
};

export const getGroqChatCompletion = async () => {
  // const gorq = new Gorq({
  //   apiKey: "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",
  // });

  return gorq.chat.completions.create({
    //
    // Required parameters
    //
    messages: [
      // Set an optional system message. This sets the behavior of the
      // assistant and can be used to provide specific instructions for
      // how it should behave throughout the conversation.
      {
        role: "system",
        content: "you are a helpful assistant.",
      },
      // Set a user message for the assistant to respond to.
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],

    // The language model which will generate the completion.
    model: "llama3-8b-8192",

    //
    // Optional parameters
    //

    // Controls randomness: lowering results in less random completions.
    // As the temperature approaches zero, the model will become deterministic
    // and repetitive.
    temperature: 0.5,

    // The maximum number of tokens to generate. Requests can use up to
    // 2048 tokens shared between prompt and completion.
    max_tokens: 1024,

    // Controls diversity via nucleus sampling: 0.5 means half of all
    // likelihood-weighted options are considered.
    top_p: 1,

    // A stop sequence is a predefined or user-specified text string that
    // signals an AI to stop generating content, ensuring its responses
    // remain focused and concise. Examples include punctuation marks and
    // markers like "[end]".
    stop: null,

    // If set, partial message deltas will be sent.
    stream: false,
  });
};
