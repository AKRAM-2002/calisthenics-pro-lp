
# Calisthenics Pro

Calisthenics Pro is a skill tracking app that helps fitness enthusiasts monitor their calisthenics progress, set personalized goals, and receive AI-driven workout recommendations. The app provides users with the tools to log workouts, track specific bodyweight skills, and visualize their progress, offering a structured way to master calisthenics.




![App Screenshot](/public/image.png)


## Core Features (MVP)
1. User Registration and Authentication

- Secure sign-up and login with email/password using JWT tokens.
2. Dashboard

- Displays an overview of user progress, current skill levels, and recent activities.
3. Skill Tracking

- Users can add/update skills (pull-ups, push-ups, handstands) and track their progress with charts.
4. Workout Logging

- Log daily workouts with details like date, type, and duration.
5. AI Personal Trainer

- Receive AI-generated workout recommendations and tips for improvement.
6. Social Networking

- Follow friends, view their progress, and interact with them via a social feed.


## Technology stack

- Front-end:  Next.js (React) with TypeScript
- Back-end: Next.js API Routes 
- Database: MongoDB (via Prisma ORM)
- AI Integration: OpenAI's GPT models for generating personalized workout plans and improvement tips
- Version Control: GitHub
- Deployment: Vercel
- Testing: Jest (front-end), Postman (back-end)

## AI Integration
The AI component leverages OpenAI's GPT models to provide:

- Personalized workout tips and advice based on user data.
- Adaptive workout plans that evolve as the user progresses.
- Real-time feedback on skill tracking and areas for improvement.

## Future Enhancements

- Advanced AI-driven workout plans and adaptive feedback.
- Expanded social networking features like a leaderboard and community challenges.
- More detailed progress tracking with body metrics like weight, body fat %, and BMI.
- Invite friends and share achievements.
- Mobile App: Develop a mobile version of Calisthenics Pro with enhanced features.
- Advanced AI Models: Incorporate more complex machine learning models to offer better progress predictions and feedback.
- Gym Buddy Finder: Connect users based on location and fitness goals to encourage joint workouts.

## Installation

Install my-project with npm
```
git clone https://github.com/AKRAM-2002/calisthenics-pro.git
```

```bash
  cd calisthenics-pro
  npm install 
```

### Set up environment variables:

```bash
MONGODB_URI=<your-mongodb-uri>
NEXTAUTH_SECRET=<your-nextauth-secret>
OPENAI_API_KEY=<your-openai-api-key>
```


### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
