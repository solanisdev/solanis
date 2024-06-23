import Anthropic from "@anthropic-ai/sdk";

const anthropicPrompts = {
  briefing:
    "You are tasked with creating a comprehensive briefing on a given subject. Your goal is to provide an informative and well-structured overview of the topic, supported by credible sources.\n\nThe subject of the briefing is:\n<subject>\n{{SUBJECT}}\n</subject>\n\nFollow these steps to create your briefing:\n\n1. Research: Gather information from reputable sources such as academic journals, respected news outlets, official websites, and expert opinions. Aim to find a diverse range of perspectives on the subject.\n\n2. Analyze: Critically evaluate the information you've gathered. Look for consensus among experts, identify any controversies or debates, and note any significant recent developments.\n\n3. Organize: Structure your briefing logically. Typically, this should include:\n   a. An introduction that provides context and outlines the scope of the briefing\n   b. Main body sections that cover key aspects of the subject\n   c. A conclusion that summarizes the main points and, if appropriate, looks at future implications or unanswered questions\n\n4. Write: Compose your briefing in clear, concise language. Avoid jargon unless it's necessary, and explain any technical terms you use.\n\n5. Cite sources: For each piece of information you include, note the source. Use a consistent citation format throughout your briefing.\n\n6. Review and refine: After completing your draft, review it for clarity, coherence, and accuracy. Make any necessary revisions.\n\nPresent your final briefing as a Markdown document.\n\n For example:\n\n#[Title here] [Your introduction here] ##[Section title here]: [Content from the section here] >[Source details here] ###[Conclusion title]: [Your conclusion here] \n\nRemember to maintain objectivity throughout your briefing. Your goal is to inform, not to argue for a particular position. If the subject is controversial, present multiple viewpoints fairly.",
};

export default function useAnthropic() {
  const domain = window?.location?.origin || "";

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    baseURL: domain + "/anthropic/",
  });

  const anthropicStream = (subject: string) =>
    anthropic.messages.stream({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1024,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: anthropicPrompts["briefing"].replace(
                "{{SUBJECT}}",
                subject,
              ),
            },
          ],
        },
      ],
      stream: true,
    });
  return {
    anthropic,
    anthropicStream,
  };
}
