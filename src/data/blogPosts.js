export const blogPosts = [
    {
        id: 1,
        date: "Jan 24, 2026",
        readTime: "5",
        image: "/images/blogs/client-server.jpg",
        tags: ["Web", "Fundamentals"],
        en: {
            title: "Understanding the Client-Server Model",
            excerpt: "A deep dive into how modern web applications communicate and the fundamentals of HTTP and networking.",
            content: `
            <p>The client-server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service (servers) and service requesters (clients).</p>
            
            <h3>What is a Client?</h3>
            <p>A client is a piece of computer hardware or software that accesses a service made available by a server. In web development, clients are typically browsers, mobile apps, or other microservices making HTTP/WebSocket requests.</p>

            <h3>What is a Server?</h3>
            <p>A server is a high-availability program or machine that processes incoming requests, enforces business rules, interacts with databases, and returns standardized responses (such as JSON or HTML).</p>

            <h3>Request-Response Lifecycle</h3>
            <p>Clients and servers exchange messages in a structured request–response pattern. Understanding headers, status codes, connection pooling, and payload serialization is essential for designing robust APIs.</p>
        `
        },
        uz: {
            title: "Mijoz-Server (Client-Server) Modelini Tushunish",
            excerpt: "Veb ilovalari qanday muloqot qilishi, HTTP protokoli va tarmoq arxitekturasining muhim asoslari.",
            content: `
            <p>Mijoz-server modeli — bu resurs yoki xizmat ko‘rsatuvchi provayderlar (serverlar) va xizmat so‘rovchilari (mijozlar) o‘rtasida vazifalarni taqsimlaydigan taqsimlangan dastur arxitekturasidir.</p>
            
            <h3>Mijoz (Client) nima?</h3>
            <p>Mijoz — server taqdim etgan xizmatdan foydalanadigan dasturiy ta'minot yoki qurilma. Veb olamida mijozlar asosan brauzerlar, mobil ilovalar yoki API so‘rovlari yuboruvchi boshqa xizmatlardir.</p>

            <h3>Server nima?</h3>
            <p>Server — mijozlardan kelgan so‘rovlarni qabul qilib, ma'lumotlar bazasi bilan ishlovchi va xavfsiz JSON yoki HTML javobini qaytaruvchi mustahkam tizimdir.</p>

            <h3>So‘rov-Javob sikli</h3>
            <p>Mijoz va server HTTP/HTTPS yoki WebSockets orqali xabar almashadi. Dasturchi uchun status kodlari, headerlar va so‘rov tezligini optimallashtirishni bilish juda muhim.</p>
        `
        }
    },
    {
        id: 2,
        date: "Feb 10, 2026",
        readTime: "4",
        image: "/images/blogs/react-nextjs.jpg",
        tags: ["React", "Web"],
        en: {
            title: "Why I Love React and Next.js",
            excerpt: "Exploring the modern frontend ecosystem and why React combined with Next.js remains my top choice for web apps.",
            content: `
            <p>React revolutionized the way frontend applications are built by introducing unidirectional data flow and modular components. With Next.js, full-stack web capabilities become seamless.</p>

            <h3>The Power of Components</h3>
            <p>Components let you isolate state, logic, and presentation into reusable blocks. This modular approach accelerates development speed and prevents regression bugs.</p>

            <h3>Server-Side Rendering (SSR) & Performance</h3>
            <p>Next.js bridges client and server through Server Components, static generation, and automatic code splitting, yielding superior SEO and sub-second page loads.</p>
        `
        },
        uz: {
            title: "Nega men React va Next.js ni yaxshi ko'raman",
            excerpt: "Zamonaviy frontend ekotizimi va nega React hamda Next.js veb ilovalar qurishda eng sevimli tanlovim ekanligi haqida.",
            content: `
            <p>React komponentlarga asoslangan arxitekturasi va ma'lumotlarning bir tomonlama oqimi bilan frontend sohasini yangi bosqichga olib chiqdi. Next.js esa unga to‘liq stek imkoniyatlarini qo‘shdi.</p>

            <h3>Komponentlarning kuchi</h3>
            <p>Komponentlar UI va biznes mantiqni alohida, qayta ishlatiladigan bloklarga ajratish imkonini beradi. Bu esa yirik loyihalarda kodning toza va barqaror bo‘lishini ta'minlaydi.</p>

            <h3>Server-Side Rendering (SSR) va Tezlik</h3>
            <p>Next.js yordamida qidiruv tizimlari (SEO) uchun mukammal optimallashgan va millisekundlarda ochiladigan yuqori tezlikdagi ilovalar yaratish osonlashadi.</p>
        `
        }
    },
    {
        id: 3,
        date: "Mar 18, 2026",
        readTime: "7",
        image: "/images/blogs/dsa.jpg",
        tags: ["DSA", "Algorithms"],
        en: {
            title: "Essential Data Structures & Algorithms for Scalable Systems",
            excerpt: "How mastering core DSA concepts—from trees and graphs to dynamic programming—empowers you to write performant software.",
            content: `
            <p>Data Structures and Algorithms (DSA) are the foundation of computer science. While frameworks and tools evolve, the fundamentals of time and space complexity remain eternal.</p>

            <h3>1. Big-O Complexity & Trade-Offs</h3>
            <p>Writing efficient software requires choosing the right algorithmic approach. Understanding the trade-offs between O(1) hash table lookups, O(log N) binary searches, and O(N²) nested iterations directly impacts system latency under high traffic.</p>

            <h3>2. Trees, Graphs & Real-World Use Cases</h3>
            <p>Trees and graphs are everywhere: hierarchical file systems, DOM trees, social network friend graphs, and dependency resolution engines (like npm/pip). Mastering Depth-First Search (DFS) and Breadth-First Search (BFS) is indispensable.</p>

            <h3>3. Dynamic Programming (DP)</h3>
            <p>Dynamic programming transforms exponential complexity problems into polynomial ones by breaking them down into overlapping subproblems and memoizing results. Recognizing optimal substructure is key to solving complex algorithmic challenges.</p>

            <h3>Practical Takeaway</h3>
            <p>Don't just memorize LeetCode patterns. Understand how database indexes leverage B-Trees, how Redis utilizes Hash Tables and Skip Lists, and how routers calculate shortest paths with Dijkstra's algorithm.</p>
        `
        },
        uz: {
            title: "Yuqori Samaradorlikka Ega Tizimlar Uchun Asosiy DSA",
            excerpt: "Daraxtlar, graflardan tortib dinamik dasturlashgacha — asosiy DSA konsepsiyalarini chuqur tushunish bo‘yicha qo‘llanma.",
            content: `
            <p>Ma'lumotlar tuzilmalari va algoritmlar (DSA) — dasturlashning asosi hisoblanadi. Frameworklar va tillar o‘zgarishi mumkin, ammo vaqt va xotira murakkabligi (Big-O) o‘zgarmaydi.</p>

            <h3>1. Big-O Murakkabligi va Samaradorlik</h3>
            <p>Katta yuklamaga ega dasturlarda to‘g‘ri algoritmni tanlash juda muhim. O(1) hash jadval orqali qidirish, O(log N) binar qidiruv va O(N²) murakkablikdagi qidiruvlar o‘rtasidagi farq server resurslarini tejashda hal qiluvchi rol o‘ynaydi.</p>

            <h3>2. Daraxtlar (Trees) va Graflar (Graphs)</h3>
            <p>Daraxtlar va graflar real hayotda har qadamda uchraydi: ijtimoiy tarmoqlardagi do‘stlar zanjiri, ma'lumotlar bazalarining B-Tree indekslari va marshrutlarni hisoblash. BFS va DFS algoritmlarini amalda qo‘llay olish har bir muhandis uchun zarur.</p>

            <h3>3. Dinamik Dasturlash (Dynamic Programming)</h3>
            <p>Dinamik dasturlash murakkab masalalarni kichik qismlarga ajratib, natijalarni xotirada saqlash (memoization) orqali eksponentsial murakkablikni chiziqli yoki polinomiy darajaga tushiradi.</p>

            <h3>Xulosa</h3>
            <p>Algoritmlarni shunchaki yodlamang — PostgreSQL indekslari B-Tree dan, Redis Skip List dan, xaritalar esa Dijkstra algoritmidan qanday foydalanishini tushunib o‘rganing.</p>
        `
        }
    },
    {
        id: 4,
        date: "Apr 25, 2026",
        readTime: "6",
        image: "/images/blogs/ml.jpg",
        tags: ["ML", "AI"],
        en: {
            title: "Machine Learning Engineering: From Training to Production",
            excerpt: "A practical breakdown of how machine learning models learn, optimize weights, and get served in production applications.",
            content: `
            <p>Machine Learning has shifted from academic research into core software engineering. Modern developers must understand not only how to train models, but how to deploy and monitor them reliably.</p>

            <h3>Supervised vs Unsupervised Learning</h3>
            <p>Supervised learning maps inputs to labeled outputs using algorithms like linear/logistic regression, random forests, and deep neural nets. Unsupervised learning discovers latent patterns without predefined ground truth (e.g., K-Means clustering, PCA dimensionality reduction).</p>

            <h3>Gradient Descent & Loss Landscapes</h3>
            <p>At the heart of deep learning lies backpropagation and gradient descent. By computing the partial derivatives of the loss function with respect to weights, optimizers like Adam and SGD steer parameters toward global minima.</p>

            <h3>The MLOps Lifecycle</h3>
            <p>A model in a notebook is only 10% of the battle. Real-world ML engineering involves data versioning (DVC), experiment tracking (MLflow), automated evaluation, and low-latency model serving via FastAPI and ONNX runtime.</p>
        `
        },
        uz: {
            title: "Machine Learning Muhandisligi: Nazariyadan Ishlab Chiqarishgacha",
            excerpt: "Mashinaviy o'rganish modellari qanday o'qitilishi, og'irliklarni optimallashtirishi va amaliyotga tatbiq etilishi haqida amaliy tushuncha.",
            content: `
            <p>Machine Learning (ML) endilikda faqat ilmiy laboratoriyalar mavzusi emas, balki zamonaviy dasturiy injiniringning ajralmas qismiga aylandi.</p>

            <h3>Nazoratli va Nazoratsiz O‘rganish (Supervised vs Unsupervised)</h3>
            <p>Nazoratli o‘rganish (Supervised Learning) belgilangan ma'lumotlar asosida natijani bashorat qilsa, Nazoratsiz o‘rganish (Unsupervised) ma'lumotlar ichidagi yashirin qonuniyatlar va klasterlarni mustaqil aniqlaydi.</p>

            <h3>Gradient Descent va Optimallashtirish</h3>
            <p>Neyron tarmoqlari o‘z og‘irliklarini (weights) Gradient Descent algoritmi yordamida optimallashtiradi. Xatolik funksiyasining gradiyentini hisoblash orqali model xatoliklarni minimallashtirishni o‘rganadi.</p>

            <h3>MLOps: Modelni Real Tizimga Integratsiya Qilish</h3>
            <p>Modelni Jupyter da o‘qitish bu ishning faqat 10 foizi. Qolgan qismi — ma'lumotlar oqimi (data pipeline), model versiyalash va uni FastAPI orqali tezkor API ko‘rinishida xizmatga tushirishdan iborat.</p>
        `
        }
    },
    {
        id: 5,
        date: "May 10, 2026",
        readTime: "6",
        image: "/images/blogs/nlp.jpg",
        tags: ["NLP", "AI"],
        en: {
            title: "Demystifying Modern NLP: Tokens, Embeddings & Transformers",
            excerpt: "How modern Natural Language Processing works under the hood—from subword tokenization to multi-head self-attention.",
            content: `
            <p>Natural Language Processing (NLP) has experienced a paradigm shift since the introduction of the Transformer architecture in 2017. Today's Large Language Models (LLMs) can reason, code, and converse with human-level fluency.</p>

            <h3>1. Tokenization: Turning Words into Numbers</h3>
            <p>Computers don't read raw text. Tokenizers like Byte-Pair Encoding (BPE) split text into subword units, mapping each token to a unique integer ID in a fixed vocabulary matrix.</p>

            <h3>2. Vector Embeddings: Capturing Semantic Meaning</h3>
            <p>Tokens are projected into continuous vector spaces where geometric distance reflects semantic similarity. Words with similar meanings cluster together, enabling vector databases (e.g., Pinecone, pgvector) to power Retrieval-Augmented Generation (RAG).</p>

            <h3>3. Self-Attention: The Secret Sauce of Transformers</h3>
            <p>Unlike sequential RNNs, the Self-Attention mechanism allows every token in a sentence to attend to every other token simultaneously. Query (Q), Key (K), and Value (V) matrices calculate attention weights, enabling models to understand context across vast distances.</p>

            <h3>Building with Modern NLP</h3>
            <p>Developers today leverage these architectures through HuggingFace, OpenAI APIs, and local runtimes like Ollama and vLLM to build autonomous agents and intelligent search engines.</p>
        `
        },
        uz: {
            title: "Zamonaviy NLP: Tokenlar, Embeddinglar va Transformerlar",
            excerpt: "Tabiiy tilni qayta ishlash qanday ishlashi — subword tokenizatsiyadan tortib ko‘p boshli self-attention mexanizmigacha.",
            content: `
            <p>Tabiiy tilni qayta ishlash (NLP) 2017-yilda Transformer arxitekturasi kashf etilganidan so‘ng butunlay o‘zgardi. Bugungi Katta Til Modellari (LLM) inson kabi tushunish, kod yozish va suhbatlashish qobiliyatiga ega.</p>

            <h3>1. Tokenizatsiya: Matnni Sonlarga Aylantirish</h3>
            <p>Kompyuterlar matnni to‘g‘ridan-to‘g‘ri o‘qiy olmaydi. Byte-Pair Encoding (BPE) kabi tokenizatorlar matnni bo‘laklarga (tokenlarga) ajratib, har biriga raqamli ID biriktiradi.</p>

            <h3>2. Vektorli Embeddinglar (Embeddings)</h3>
            <p>Tokenlar ko‘p o‘lchovli fazoga joylashtiriladi. Ma'nosi o‘xshash so‘zlar fazoda bir-biriga yaqin joylashadi. Bu esa RAG (Retrieval-Augmented Generation) va semantik qidiruv tizimlarini yaratishga imkon beradi.</p>

            <h3>3. Self-Attention Mexanizmi</h3>
            <p>Eski RNN lardan farqli o‘laroq, Transformer lardagi Self-Attention mexanizmi jumlalardagi barcha so‘zlarni bir vaqtning o‘zida tahlil qilib, kontekstni to‘liq anglab yetadi.</p>

            <h3>Amaliy Xulosa</h3>
            <p>Bugungi kunda dasturchilar HuggingFace, OpenAI API va Ollama kabi vositalar yordamida o‘z loyihalariga kuchli aqlli qidiruv va sun'iy intellekt agentlarini osonlik bilan tatbiq qila oladilar.</p>
        `
        }
    },
    {
        id: 6,
        date: "May 24, 2026",
        readTime: "5",
        image: "/images/blogs/ai-2026.jpg",
        tags: ["AI", "ML"],
        en: {
            title: "🚀 Best Resources to Master AI and ML in 2026",
            excerpt: "A curated roadmap of high-impact books, research papers, newsletters, and hands-on courses to accelerate your AI engineering career.",
            content: `
            <p>AI technologies are evolving at breakneck speed. Keeping your skills sharp requires following high-signal resources rather than social media hype.</p>

            <h3>📚 1. Foundational Books</h3>
            <p>Understanding Large Language Models (LLMs) and ML architecture requires structured foundations.</p>
            <p><strong>Top Recommendations:</strong> "Designing Machine Learning Systems" by Chip Huyen and "Hands-On Large Language Models".</p>

            <h3>🌐 2. Essential Research Blogs</h3>
            <p>Track direct publications from premier AI research labs: OpenAI Research, Google DeepMind, Anthropic Research, and HuggingFace Engineering.</p>

            <h3>🎓 3. Courses & Video Lectures</h3>
            <p>Stanford CS229 (Machine Learning) and CS224N (Natural Language Processing with Deep Learning), paired with Yannic Kilcher and Two Minute Papers for research summaries.</p>

            <h3>📧 4. Industry Newsletters</h3>
            <p>High-signal digests: The Batch by DeepLearning.AI, The Rundown AI, and ByteByteGo System Design.</p>

            <h3>📄 5. Milestone Research Papers</h3>
            <p>Must-read foundations: "Attention Is All You Need" (Vaswani et al.), BERT, and DPO (Direct Preference Optimization).</p>
        `
        },
        uz: {
            title: "🚀 2026-yilda AI va ML ni Chuqur O'rganish Uchun Eng Zo'r Manbalar",
            excerpt: "Sun'iy intellekt va mashinaviy o'rganish sohasida yuqori natijaga erishish uchun kitoblar, ilmiy maqolalar va amaliy kurslar yo'l xaritasi.",
            content: `
            <p>AI texnologiyalari jadal sur'atlarda rivojlanmoqda. Bu sohada haqiqiy mutaxassis bo‘lish uchun yuzaki trendlar ortidan emas, fundamental va ishonchli manbalardan o‘rganish zarur.</p>

            <h3>📚 1. Fundamental Kitoblar</h3>
            <p>Tizimli bilim olish uchun tavsiya etiladigan durdona asarlar:</p>
            <p><strong>Tavsiya:</strong> Chip Huyen ning "Designing Machine Learning Systems" va "Hands-On Large Language Models" kitoblari.</p>

            <h3>🌐 2. Ilmiy Texnologik Bloglar</h3>
            <p>Sanoat yetakchilarining rasmiy nashrlari: OpenAI Research, Google DeepMind, Anthropic va HuggingFace Engineering bloglari.</p>

            <h3>🎓 3. Akademik Kurslar</h3>
            <p>Stanford universitetining mashhur CS229 (Machine Learning) va CS224N (Natural Language Processing) bepul ma'ruzalari.</p>

            <h3>📧 4. AI Xabarnomalari</h3>
            <p>Har haftalik tahliliy xulosalar: DeepLearning.AI ning "The Batch" va ByteByteGo System Design byulletenlari.</p>

            <h3>📄 5. O‘qilishi Shart Bo‘lgan Ilmiy Maqolalar</h3>
            <p>Barchasini boshlab bergan fundamental asarlar: "Attention Is All You Need" (Transformerlar), LLaMA va DPO (Direct Preference Optimization) tahlillari.</p>
        `
        }
    }
];
