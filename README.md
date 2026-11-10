# 🎙️ InterviewAI — AI-Powered Mock Interview Platform

InterviewAI is a smart, full-stack mock interview platform designed to simulate real-life technical interviews. Leveraging AI, it generates role-specific questions, analyzes user responses, scores performance, and offers personalized feedback — all in one seamless experience.
---

## 🚀 Features

- 🧠 **AI-Generated Questions**  
  Get tailored interview questions based on job role, tech stack, or your uploaded resume (PDF).

- 🎤 **Voice-Based Interviewing**  
  Use your mic to respond — the AI converts speech to text and evaluates your answers.

- ✍️ **Editable Transcripts**  
  Fix any misinterpretations from the mic input before submitting for analysis.

- 📊 **Smart Scoring System**  
  Your responses are scored on relevance, clarity, and depth.

- 💡 **Personalized Feedback**  
  Get improvement tips for each answer and your overall performance.

- 📁 **Resume Parsing**  
  Upload a resume to get customized interview questions based on your skills and experience.

- 📈 **Test History & Dashboard**  
  Track your past interviews, scores, and feedback — all in one place.

---

## 🛠️ Tech Stack

| Category       | Technology       |
|----------------|------------------|
| **Frontend**   | Next.js, TypeScript, Tailwind CSS |
| **Backend**    | Node.js, Express |
| **Database**   | MongoDB          |
| **AI & NLP**   | Google Gemini API |
| **Voice Input**| Web Speech API |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/theeaashish/interview-ai
```

## Local configuration

Answer analysis and AI-generated interview questions use Groq. Add a `GROQ_API_KEY` entry to `.env.local` before starting the development server. Restart the server after changing environment variables.
