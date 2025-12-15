
export const blogPosts = [
    {
        id: 1,
        slug: 'building-codeclash-competitive-programming-platform',
        title: 'Building CodeClash: A Full-Stack Competitive Programming Platform',
        excerpt: 'Journey of creating CodeClash from scratch using React, Node.js, and integrating Codeforces API with AI-powered feedback using Gemini API.',
        category: 'Web Development',
        date: 'Dec 10, 2024',
        readTime: '8 min read',
        views: '1.2k',
        tags: ['React', 'Node.js', 'AI', 'API Integration'],
        featured: true,
        content: `
      <h2>The Genesis of CodeClash</h2>
      <p>Competitive programming has always been a passion of mine. However, I often felt that existing platforms lacked a personalized touch—specifically when it came to analyzing performance and getting actionable feedback. That's why I decided to build <strong>CodeClash</strong>.</p>
      
      <p>CodeClash isn't just another CP tracker; it's a comprehensive platform designed to bridge the gap between solving problems and understanding <em>how</em> to improve. My goal was simple: create a tool that not only tracks your progress on CodeForces but also uses AI to tell you what you're doing wrong.</p>

      <h2>Tech Stack Choices</h2>
      <p>For this project, I chose a MERN-like stack but with a focus on performance and modern practices:</p>
      <ul>
        <li><strong>Frontend:</strong> React + Vite for a blazing fast UI, styled with Tailwind CSS for that crisp, modern look.</li>
        <li><strong>Backend:</strong> Node.js & Express to handle API requests and user data.</li>
        <li><strong>Database:</strong> MongoDB for flexible data storage.</li>
        <li><strong>AI Integration:</strong> Google's Gemini API for generating intelligent insights.</li>
      </ul>

      <h2>Key Challenges & Solutions</h2>
      
      <h3>1. Integrating the CodeForces API</h3>
      <p>The first major hurdle was working with the CodeForces API. While powerful, it has strict rate limits. I implemented a caching layer in my Node.js backend using Redis (later simplified to in-memory for the MVP) to ensure we didn't hit rate limits while still serving fresh data to users.</p>

      <h3>2. The "AI Coach"</h3>
      <p>This is the flagship feature. I wanted an AI that could look at your recent submission history and say, "Hey, you're struggling with Dynamic Programming, try these problems."</p>
      <p>To achieve this, I engineered a prompt context window that feeds the Gemini API a condensed version of the user's last 50 submissions, filtering for tags and difficulty ratings. The result? A surprisingly human-like mentor that offers genuine strategic advice.</p>

      <h2>The UI/UX Design</h2>
      <p>I didn't want it to look like a spreadsheet. I used <strong>Framer Motion</strong> to add life to the charts and graphs. When you load your profile, the stats don't just appear; they stream in. The accessibility score of 90+ was a strict requirement I set for myself, ensuring high contrast and screen reader compatibility.</p>

      <h2>What's Next?</h2>
      <p>I'm currently working on adding a "Virtual Contest" mode that simulates the pressure of a real CodeForces round, complete with a distracting timer and live scoreboard. Stay tuned!</p>
    `
    },
    {
        id: 2,
        slug: 'face-liveness-detection-smart-india-hackathon',
        title: 'Face Liveness Detection: Our Smart India Hackathon Journey',
        excerpt: 'How we built a browser-based face authentication system with MediaPipe, achieving liveness detection under 2 seconds and securing 4th rank.',
        category: 'AI/ML',
        date: 'Dec 5, 2024',
        readTime: '10 min read',
        views: '2.1k',
        tags: ['MediaPipe', 'React', 'Computer Vision', 'Hackathon'],
        content: `
      <h2>The Problem Statement</h2>
      <p>In the Smart India Hackathon, we were tasked with a critical security challenge: <strong>Identity Spoofing</strong>. Traditional face recognition is easily fooled by a photo or a video recording. We needed to build a system that could differentiate between a live human and a digital replay.</p>

      <h2>Our Solution: Active Liveness Detection</h2>
      <p>We avoided the heavy server-side processing route. Instead, we leveraged <strong>MediaPipe's Face Mesh</strong> directly in the browser. This approach offered two huge advantages: Privacy (face data stays on the device) and Speed (zero network latency for the check).</p>

      <h3>The "Blink" Test</h3>
      <p>Our algorithm tracks 478 distinct facial landmarks. We calculated the <em>Eye Aspect Ratio (EAR)</em> in real-time. If the EAR dropped below a certain threshold and rose back up significantly within 200ms, we rushed a "Blink Detected" event. It sounds simple, but tuning the thresholds for different lighting conditions was a nightmare!</p>

      <h2>Results</h2>
      <p>We achieved a liveness verification time of under <strong>2 seconds</strong>. The judges were impressed by the fluidity of the UX—no clunky "Turn your head left" instructions that take forever to register. This performance won us the 4th rank nationally.</p>
    `
    },
    {
        id: 3,
        slug: 'competitive-programming-pupil-to-specialist',
        title: 'My Journey to CodeForces Pupil: 250+ Problems Later',
        excerpt: 'Lessons learned from solving 250+ competitive programming problems on CodeForces, reaching Pupil rank, and improving algorithmic thinking.',
        category: 'Competitive Programming',
        date: 'Nov 28, 2024',
        readTime: '6 min read',
        views: '890',
        tags: ['CodeForces', 'Algorithms', 'DSA', 'Problem Solving'],
        content: `
      <h2>The Grinds</h2>
      <p>Competitive programming isn't about being a genius; it's about pattern recognition. When I started, I struggled with basic Div 2 A problems. 250 problems later, everything changed.</p>

      <h2>Key Lessons</h2>
      <ul>
        <li><strong>Consistency > Intensity:</strong> Solving 1 problem every day is infinitely better than solving 10 on Sunday and quitting for the week.</li>
        <li><strong>Upsolving is Mandatory:</strong> If you can't solve a problem in a contest, you <em>must</em> solve it afterwards. That is where the actual learning happens.</li>
        <li><strong>Don't stick to your comfort zone:</strong> I hated combinatorics. So I forced myself to solve 20 combinatorics problems in a row. Now? I still dislike it, but I can solve it.</li>
      </ul>

      <h2>The Road Ahead</h2>
      <p>My next target is Specialist. I'm focusing heavily on graph algorithms and dynamic programming now. See you on the leaderboard!</p>
    `
    },
    {
        id: 4,
        slug: 'rag-systems-intelexa-langchain',
        title: 'Building RAG-Powered Systems with LangChain and Qdrant',
        excerpt: 'Deep dive into creating Intelexa, a RAG-powered GenAI system using LangChain, semantic embeddings, and vector databases for intelligent query answering.',
        category: 'AI/ML',
        date: 'Nov 20, 2024',
        readTime: '12 min read',
        views: '1.5k',
        tags: ['LangChain', 'RAG', 'Qdrant', 'AI Agents'],
        content: `
        <h2>Why RAG?</h2>
        <p>Large Language Models (LLMs) are great, but they hallucinate, and they don't know your private data. Retrieval-Augmented Generation (RAG) fixes this. For <strong>Intelexa</strong>, we wanted a system that could answer questions based <em>solely</em> on a provided knowledge base.</p>

        <h2>The Architecture</h2>
        <p>We used a 3-step pipeline:</p>
        <ol>
            <li><strong>Ingestion:</strong> A Node.js crawler scrapes data and chunks it into manageable pieces.</li>
            <li><strong>Embedding:</strong> We use OpenAI's embedding models to convert text chunks into vectors.</li>
            <li><strong>Retrieval:</strong> These vectors are stored in <strong>Qdrant</strong>. When a user asks a question, we search Qdrant for the most similar chunks and feed them to the LLM as context.</li>
        </ol>

        <h2>Why Qdrant?</h2>
        <p>We chose Qdrant over Pinecone because it's open-source and easy to self-host with Docker. For a student project, avoiding vendor lock-in and high costs is crucial.</p>
      `
    },
    {
        id: 5,
        slug: 'docker-compose-multi-service-architecture',
        title: 'Orchestrating Multi-Service Apps with Docker Compose',
        excerpt: 'Learn how I containerized Python backend, Qdrant, and Neo4j for the Intelexa project using Docker and Docker Compose for seamless deployment.',
        category: 'Tutorial',
        date: 'Nov 15, 2024',
        readTime: '7 min read',
        views: '750',
        tags: ['Docker', 'DevOps', 'Microservices'],
        content: `
       <h2>The "It Works on My Machine" Problem</h2>
       <p>When working with a team, environment consistency is key. We had people on Windows, Mac, and Linux. Python version mismatches were killing our productivity.</p>

       <h2>Enter Docker Compose</h2>
       <p>I defined our entire stack in a single <code>docker-compose.yml</code> file. With one command—<code>docker-compose up</code>—we could spin up the FastAPI backend, the Qdrant vector DB, and the React frontend.</p>

       <p>This setup taught me the importance of <strong>networking</strong> in Docker. Understanding how containers talk to each other via internal DNS names (e.g., connecting to <code>qdrant:6333</code> instead of <code>localhost:6333</code>) was a game changer.</p>
      `
    }
];
