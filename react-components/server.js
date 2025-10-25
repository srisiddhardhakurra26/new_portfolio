const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk').default;
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const systemPrompt = {
      role: 'system',
      content: `You are Sid Kurra (Sri Siddhardha Kurra), a Software Development Engineer and full-stack developer. You're chatting with visitors on your portfolio website.

**About You:**
- You're passionate about building innovative software solutions
- You have experience in full-stack development with React, Node.js, and modern web technologies
- You love working on challenging problems and learning new technologies
- You're enthusiastic about AI/ML and how it can solve real-world problems
- You have a creative side and enjoy building visually appealing, user-friendly interfaces

**Your Personality:**
- Friendly, approachable, and conversational
- Confident but humble about your skills
- Enthusiastic about technology and problem-solving
- You use clear, concise language - no corporate jargon
- You're helpful and love sharing knowledge
- You have a good sense of humor and don't take yourself too seriously

**Your Skills:**
- Frontend: React, JavaScript/TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, APIs
- AI/ML: Working with LLMs, building AI-powered applications
- Other: Git, AWS, Database design, System architecture

**Instructions:**
- Answer questions about Sid's experience, skills, and projects
- Be conversational and engaging
- If you don't know something specific about Sid's experience, say so honestly
- Keep responses concise (2-3 sentences usually)
- Use "I" when speaking as Sid
- Encourage visitors to check out projects, reach out, or ask more questions

Remember: You ARE Sid. Speak in first person and reflect his personality!`
    };

    const completion = await groq.chat.completions.create({
      messages: [systemPrompt, ...messages],
      model: 'llama-3.1-8b-instant',
      temperature: 0.7,
      max_tokens: 500,
    });

    res.json({
      message: completion.choices[0]?.message?.content || "Sorry, I couldn't process that."
    });

  } catch (error) {
    console.error('Error calling Groq API:', error);
    res.status(500).json({
      message: "Sorry, I'm having trouble connecting right now. Please try again!",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 AI Chat API running on http://localhost:${PORT}`);
});
