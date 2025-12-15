
export const blogPosts = [
  {
    id: 1,
    slug: 'building-codeclash-competitive-programming-platform',
    title: 'Building CodeClash: A Full-Stack Competitive Programming Platform',
    excerpt: 'Journey of creating CodeClash from scratch using React, Node.js, and integrating Codeforces API with AI-powered feedback using Gemini API.',
    category: 'Web Development',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    views: '1.2k',
    tags: ['React', 'Node.js', 'AI', 'API Integration'],
    featured: true,
    author: 'Kunal Verma',
    content: `
      <h2>The Genesis of CodeClash</h2>
      <p>Competitive programming has always been a passion of mine. However, I often felt that existing platforms lacked a personalized touch—specifically when it came to analyzing performance and getting actionable feedback. That's why I decided to build <strong>CodeClash</strong>.</p>
      
      <p>CodeClash isn't just another CP tracker; it's a comprehensive platform designed to bridge the gap between solving problems and understanding <em>how</em> to improve. My goal was simple: create a tool that not only tracks your progress on CodeForces but also uses AI to tell you what you're doing wrong and how to get better.</p>

      <h2>Tech Stack Choices</h2>
      <p>For this project, I chose a modern JavaScript stack focused on performance and developer experience:</p>
      <ul>
        <li><strong>Frontend:</strong> React + Vite for a blazing fast UI, styled with Tailwind CSS for that crisp, modern look.</li>
        <li><strong>Backend:</strong> Node.js & Express to handle API requests and user data management.</li>
        <li><strong>Database:</strong> MongoDB for flexible data storage and user profiles.</li>
        <li><strong>AI Integration:</strong> Google's Gemini API for generating intelligent insights based on problem-solving patterns.</li>
      </ul>

      <h2>Key Features Implemented</h2>
      
      <h3>1. Codeforces API Integration</h3>
      <p>The first major feature was working with the CodeForces API. While powerful, it has strict rate limits and can be unpredictable. I implemented a smart caching layer in my Node.js backend to ensure we didn't hit rate limits while still serving fresh data to users. The cache invalidates after 30 minutes for user data and 6 hours for problem sets.</p>

      <h3>2. AI-Powered Performance Analysis</h3>
      <p>This is the flagship feature. I wanted an AI that could look at your recent submission history and provide meaningful feedback like, "You're struggling with Dynamic Programming problems at 1400-1600 difficulty. Here's what to focus on next."</p>
      
      <p>To achieve this, I engineered a detailed prompt that feeds the Gemini API with:</p>
      <ul>
        <li>Your last 50 submissions with tags and verdicts</li>
        <li>Problem difficulty distribution</li>
        <li>Success rate by topic</li>
        <li>Comparison with peers at similar rating levels</li>
      </ul>

      <h2>The Development Journey</h2>
      <p>Building CodeClash taught me valuable lessons about API design, state management in React, and prompt engineering for LLMs. The biggest challenge was making the AI feedback feel genuinely helpful rather than generic motivational text.</p>

      <p>I spent weeks iterating on the prompt template, testing it with my own CodeForces data and friends' profiles. The breakthrough came when I started including specific problem recommendations based on weak areas rather than just identifying them.</p>

      <h2>What's Next?</h2>
      <p>I'm currently working on adding a "Virtual Contest" mode that simulates the pressure of a real CodeForces round, complete with a timer and live leaderboard. The goal is to help users practice time management and stress handling.</p>
      
      <p>There's also a social feature in the pipeline where users can join study groups and share their progress. Competitive programming can be lonely, and I want CodeClash to build a supportive community.</p>
    `
  },
  {
    id: 2,
    slug: 'face-liveness-detection-smart-india-hackathon',
    title: 'Face Liveness Detection: Our Smart India Hackathon Journey',
    excerpt: 'How we built a browser-based face authentication system with MediaPipe, achieving liveness detection under 2 seconds and securing 4th rank.',
    category: 'AI/ML',
    date: 'Dec 5, 2024',
    readTime: '4 min read',
    views: '2.1k',
    tags: ['MediaPipe', 'React', 'Computer Vision', 'Hackathon'],
    author: 'Kunal Verma',
    content: `
      <h2>The Problem Statement</h2>
      <p>In the Smart India Hackathon, we were tasked with a critical security challenge: <strong>Identity Spoofing</strong>. Traditional face recognition is easily fooled by a photo or a video recording. We needed to build a system that could differentiate between a live human and a digital replay.</p>

      <h2>Our Solution: Active Liveness Detection</h2>
      <p>We avoided the heavy server-side processing route. Instead, we leveraged <strong>MediaPipe's Face Mesh</strong> directly in the browser. This approach offered two huge advantages: Privacy (face data stays on the device) and Speed (zero network latency for the check).</p>

      <h3>The "Blink" Test</h3>
      <p>Our algorithm tracks 478 distinct facial landmarks. We calculated the <em>Eye Aspect Ratio (EAR)</em> in real-time. If the EAR dropped below a certain threshold and rose back up significantly within 200ms, we detected a blink. It sounds simple, but tuning the thresholds for different lighting conditions was challenging.</p>
      
      <p>We tested the system across various environments - bright sunlight, dim indoor lighting, and even with glasses. The key was not just detecting a single blink but ensuring it followed natural human patterns.</p>

      <h2>Technical Implementation</h2>
      <p>The frontend was built with React, and we used TensorFlow.js to run MediaPipe models directly in the browser. This eliminated the need for server uploads, which was crucial for user privacy and speed.</p>
      
      <p>Our detection pipeline worked in three stages: face detection, landmark extraction, and liveness verification. The entire process completed in under 2 seconds, which impressed the judges.</p>

      <h2>Hackathon Results</h2>
      <p>We achieved a liveness verification time of under <strong>2 seconds</strong> with 95% accuracy. The judges appreciated our focus on user experience—no awkward "Turn your head left" instructions. This performance secured us <strong>4th rank nationally</strong> out of hundreds of teams.</p>
    `
  },
  {
    id: 3,
    slug: 'competitive-programming-pupil-to-specialist',
    title: 'My Journey to CodeForces Pupil: 250+ Problems Later',
    excerpt: 'Lessons learned from solving 250+ competitive programming problems on CodeForces, reaching Pupil rank, and improving algorithmic thinking.',
    category: 'Competitive Programming',
    date: 'Nov 28, 2024',
    readTime: '3 min read',
    views: '890',
    tags: ['CodeForces', 'Algorithms', 'DSA', 'Problem Solving'],
    author: 'Kunal Verma',
    content: `
      <h2>The Beginning</h2>
      <p>Competitive programming isn't about being a genius; it's about pattern recognition and consistent practice. When I started, I struggled with basic Div 2 A problems. 250+ problems later, my approach to problem-solving has completely transformed.</p>

      <h2>Key Lessons Learned</h2>
      <ul>
        <li><strong>Consistency > Intensity:</strong> Solving 1 problem every day is infinitely better than solving 10 on Sunday and quitting for the week. Daily practice builds muscle memory for common patterns.</li>
        <li><strong>Upsolving is Mandatory:</strong> If you can't solve a problem in a contest, you <em>must</em> solve it afterwards. That's where actual learning happens. I maintain an "unsolved" list and revisit problems after a week.</li>
        <li><strong>Break out of your comfort zone:</strong> I avoided graph theory for months. Forcing myself to solve 30 graph problems in two weeks changed everything. Now it's one of my stronger areas.</li>
        <li><strong>Participate in Contests:</strong> Virtual contests don't have the same pressure. Live contests teach you to handle stress and optimize time management.</li>
      </ul>

      <h2>What Helped Me Improve</h2>
      <p>I tracked every problem I solved in a spreadsheet with tags, difficulty, and time taken. This data helped me identify weak areas objectively rather than guessing.</p>
      
      <p>Studying others' solutions after contests was eye-opening. There's often a simpler approach you didn't consider, and that's where real growth happens.</p>

      <h2>The Road Ahead</h2>
      <p>My current goal is reaching Specialist rank. I'm focusing heavily on dynamic programming and number theory—two areas where I still struggle. The journey continues!</p>
    `
  },
  {
    id: 4,
    slug: 'rag-systems-intelexa-langchain',
    title: 'Building RAG-Powered Systems with LangChain and Qdrant',
    excerpt: 'Deep dive into creating Intelexa, a RAG-powered GenAI system using LangChain, semantic embeddings, and vector databases for intelligent query answering.',
    category: 'AI/ML',
    date: 'Nov 20, 2024',
    readTime: '4 min read',
    views: '1.5k',
    tags: ['LangChain', 'RAG', 'Qdrant', 'AI Agents'],
    author: 'Kunal Verma',
    content: `
        <h2>Why RAG?</h2>
        <p>Large Language Models (LLMs) are impressive, but they hallucinate and don't know your private data. Retrieval-Augmented Generation (RAG) fixes this. For <strong>Intelexa</strong>, we wanted a system that answers questions based <em>solely</em> on a provided knowledge base.</p>

        <h2>The Architecture</h2>
        <p>We built a 3-step pipeline:</p>
        <ol>
            <li><strong>Ingestion:</strong> A Node.js crawler scrapes data and chunks it into manageable pieces (typically 500-1000 tokens).</li>
            <li><strong>Embedding:</strong> We use OpenAI's text-embedding-ada-002 model to convert text chunks into 1536-dimensional vectors.</li>
            <li><strong>Retrieval:</strong> Vectors are stored in <strong>Qdrant</strong>. When users ask questions, we search for the most semantically similar chunks and feed them to the LLM as context.</li>
        </ol>

        <h2>Why Qdrant?</h2>
        <p>We chose Qdrant over Pinecone because it's open-source and easy to self-host with Docker. For a student project, avoiding vendor lock-in and recurring costs is important.</p>
        
        <p>Qdrant's filtering capabilities also allowed us to implement multi-tenant search, which was crucial for our use case.</p>

        <h2>Challenges & Learnings</h2>
        <p>The biggest challenge was determining optimal chunk size. Too small, and context gets lost. Too large, and retrieval precision suffers. We settled on 750 tokens with 100-token overlap.</p>
      `
  },
  {
    id: 5,
    slug: 'docker-compose-multi-service-architecture',
    title: 'Orchestrating Multi-Service Apps with Docker Compose',
    excerpt: 'Learn how I containerized Python backend, Qdrant, and Neo4j for the Intelexa project using Docker and Docker Compose for seamless deployment.',
    category: 'Tutorial',
    date: 'Nov 15, 2024',
    readTime: '3 min read',
    views: '750',
    tags: ['Docker', 'DevOps', 'Microservices'],
    author: 'Kunal Verma',
    content: `
       <h2>The "It Works on My Machine" Problem</h2>
       <p>When working with a team, environment consistency is critical. We had people on Windows, Mac, and Linux. Python version mismatches and dependency conflicts were killing our productivity.</p>

       <h2>Enter Docker Compose</h2>
       <p>I defined our entire stack in a single <code>docker-compose.yml</code> file. With one command—<code>docker-compose up</code>—we could spin up the FastAPI backend, the Qdrant vector database, and the React frontend all at once.</p>

       <p>This setup taught me the importance of <strong>networking</strong> in Docker. Understanding how containers communicate via internal DNS names (e.g., connecting to <code>qdrant:6333</code> instead of <code>localhost:6333</code>) was a game changer.</p>
       
       <h2>Benefits We Experienced</h2>
       <ul>
         <li><strong>Onboarding:</strong> New team members were productive in minutes instead of hours.</li>
         <li><strong>Parity:</strong> Development environment matched production exactly.</li>
         <li><strong>Debugging:</strong> Issues became reproducible across all machines.</li>
       </ul>
       
       <p>Docker Compose transformed how we collaborate. I can't imagine going back to manual environment setup.</p>
      `
  }
];
