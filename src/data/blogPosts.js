export const blogPosts = [
    {
        id: 1,
        date: "Jan 24, 2026",
        readTime: "5",
        views: "31",//31
        tags: ["Fundamentals", "Web"],
        en: {
            title: "Understanding the Client-Server Model",
            excerpt: "A deep dive into how web applications communicate and the fundamentals of HTTP.",
            content: `
            <p>The client-server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.</p>
            
            <h3>What is a Client?</h3>
            <p>A client is a piece of computer hardware or software that accesses a service made available by a server. The server is often (but not always) on another computer system, in which case the client accesses the service by way of a network.</p>

            <h3>What is a Server?</h3>
            <p>A server is a device or computer program that provides functionality for other programs or devices, called "clients". This architecture is called the client–server model.</p>

            <h3>How they communicate</h3>
            <p>Clients and servers exchange messages in a request–response messaging pattern. The client sends a request, and the server returns a response. This exchange of messages is an example of inter-process communication.</p>
        `
        },
        uz: {
            title: "Mijoz-Server (Client-Server) Modelini Tushunish",
            excerpt: "Veb ilovalari qanday muloqot qilishi va HTTP asoslarini chuqur o'rganish.",
            content: `
            <p>Mijoz-server modeli - bu vazifalar yoki ish yuklarini resurs yoki xizmat ko'rsatuvchi provayderlar (serverlar) va xizmat so'rovchilari (mijozlar) o'rtasida taqsimlaydigan taqsimlangan dastur arxitekturasi.</p>
            
            <h3>Mijoz (Client) nima?</h3>
            <p>Mijoz - bu server tomonidan taqdim etilgan xizmatdan foydalanadigan kompyuter qurilmasi yoki dasturiy ta'minot. Server ko'pincha (lekin har doim emas) boshqa kompyuter tizimida joylashgan bo'lib, bu holda mijoz xizmatga tarmoq orqali kiradi.</p>

            <h3>Server nima?</h3>
            <p>Server - bu "mijozlar" deb ataladigan boshqa dasturlar yoki qurilmalar uchun funksionallikni ta'minlaydigan qurilma yoki kompyuter dasturi. Ushbu arxitektura mijoz-server modeli deb ataladi.</p>

            <h3>Ular qanday muloqot qilishadi</h3>
            <p>Mijozlar va serverlar so'rov-javob (request-response) xabar almashish usulida o'zaro aloqa qiladilar. Mijoz so'rov yuboradi, server esa javob qaytaradi.</p>
        `
        }
    },
    {
        id: 2,
        date: "Jan 17, 2026",
        readTime: "4",
        views: "41",//41
        tags: ["React", "Frontend"],
        en: {
            title: "Why I Love React and Next.js",
            excerpt: "Exploring the ecosystem of React and why it remains my go-to choice for frontend development.",
            content: `
            <p>React has revolutionized the way we build user interfaces. Its component-based architecture allows for reusable code and a more organized project structure.</p>

            <h3>The Power of Components</h3>
            <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components.</p>

            <h3>Enter Next.js</h3>
            <p>Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
        `
        },
        uz: {
            title: "Nega men React va Next.js ni yaxshi ko'raman",
            excerpt: "React ekotizimini o'rganish va nega u front-end ishlab chiqish uchun mening asosiy tanlovim bo'lib qolayotgani haqida.",
            content: `
            <p>React foydalanuvchi interfeyslarini qurish usulimizni inqilob qildi. Uning komponentlarga asoslangan arxitekturasi qayta ishlatiladigan kod va yanada tartibli loyiha tuzilishiga imkon beradi.</p>

            <h3>Komponentlarning kuchi</h3>
            <p>Komponentlar UI-ni mustaqil, qayta ishlatiladigan qismlarga ajratish va har bir qism haqida alohida o'ylash imkonini beradi.</p>

            <h3>Next.js ga kirish</h3>
            <p>Next.js eng so'nggi React xususiyatlarini kengaytirish va eng tezkor tuzilmalar uchun kuchli Rust-ga asoslangan JavaScript vositalarini integratsiya qilish orqali to'liq stekli veb-ilovalarni yaratishga imkon beradi.</p>
        `
        }
    },
    {
        id: 3,
        date: "Feb 1, 2026",
        readTime: "6",
        views: "17",//17
        tags: ["CSS", "Design"],
        en: {
            title: "Mastering Tailwind CSS",
            excerpt: "Tips and tricks for building beautiful, responsive UIs faster than ever with utility classes.",
            content: `
            <p>Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>

            <h3>Why Utility-First?</h3>
            <p>Writing CSS feels like you're fighting the browser. Utility classes let you build modern websites without ever leaving your HTML.</p>

            <h3>Customization</h3>
            <p>Tailwind is incredibly customizable. You can define your own colors, spacing, and fonts in the tailwind.config.js file, making it easy to keep your design consistent.</p>
        `
        },
        uz: {
            title: "Tailwind CSS ni o'rganish",
            excerpt: "Yutiliti klasslari bilan chiroyli, moslashuvchan UI-larni har qachongidan ham tezroq qurish uchun maslahatlar va hiylalar.",
            content: `
            <p>Tailwind CSS - bu flex, pt-4, text-center va rotate-90 kabi klasslar bilan to'ldirilgan yutiliti-birinchi CSS ramkasi bo'lib, ular har qanday dizaynni bevosita HTML belgilashda qurish uchun ishlatilishi mumkin.</p>

            <h3>Nima uchun Utility-First?</h3>
            <p>CSS yozish xuddi brauzer bilan kurashayotgandek tuyuladi. Yutiliti klasslari HTML-dan chiqmasdan zamonaviy veb-saytlarni yaratishga imkon beradi.</p>

            <h3>Moslashtirish</h3>
            <p>Tailwind nihoyatda moslanuvchan. Siz tailwind.config.js faylida o'z ranglaringizni, oraliqlaringizni va shriftlaringizni aniqlashingiz mumkin, bu esa dizayningizni izchil saqlashni osonlashtiradi.</p>
        `
        }
    },
    {
        id: 4,
        date: "Feb 3, 2026",
        readTime: "3",
        views: "0",
        tags: ["React", "JSX"],
        en: {
            title: "Understanding React Element Tags",
            excerpt: "A comprehensive guide to React elements, JSX syntax, and how they differ from traditional HTML tags.",
            content: `
            <p>React is the most widely used JavaScript library for modern web applications, where interfaces are created using a syntax called JSX. Although JSX looks like HTML, it actually transforms into JavaScript elements.</p>

            <h3>What are React Element Tags?</h3>
            <p>React elements are sets of tags written using JSX that are eventually converted into HTML elements in the browser. They represent the UI part of a React component.</p>
            
            <p>For example:</p>
            <pre><code>
&lt;h1&gt;My Header&lt;/h1&gt;
&lt;button&gt;Click Me&lt;/button&gt;
&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;
            </code></pre>
            
            <p>These JSX codes work as elements in React and are ultimately converted to HTML.</p>

            <h3>Single Tags</h3>
            <p>In HTML, tags like <code>&lt;img&gt;</code> or <code>&lt;br&gt;</code> might not have a closing tag, but in JSX, everything must be closed!</p>
            <p>Correct JSX: <code>&lt;img src="logo.png" /&gt;</code> or <code>&lt;br /&gt;</code>.</p>
            <p>Incorrect: <code>&lt;img src="logo.png"&gt;</code> — this will not work in React.</p>

            <h3>Why are elements written this way in React?</h3>
            <p>React places elements in a virtual DOM and tracks changes very efficiently. Although JSX syntax is HTML-style, since it is fully JavaScript, you can use all capabilities of JavaScript (e.g., variables, functions, conditional expressions, etc.).</p>

            <h3>Practical Tips</h3>
            <p>Don't forget to close every React element tag (/>). Write JavaScript expressions inside JSX using {}. Even though they look like plain HTML, React elements are very powerful: they help you create dynamic UI!</p>
        `
        },
        uz: {
            title: "React Element Tags haqida to‘liq tushuncha",
            excerpt: "React elementlari, JSX sintaksisi va ularning an'anaviy HTML teglaridan farqi haqida to'liq qo'llanma.",
            content: `
            <p>React — bu modern veb-ilovalar yaratishda eng ko‘p ishlatiladigan JavaScript kutubxonasi bo‘lib, unda interfeyslar JSX deb ataluvchi sintaksis yordamida yaratiladi. JSX ko‘rinishicha HTMLga o‘xshash bo‘lsa-da, aslida bu JavaScript ichidagi elementlarga aylantiriladi.</p>

            <h3>React Element Tags — bu nima?</h3>
            <p>React elementlari — bu JSX foydalanib yozilgan va yakunda browserda HTML elementlariga aylantiriladigan belgilar (tags) to‘plami. Ular React komponentining UI qismini ifodalaydi.</p>
            
            <p>Misol uchun:</p>
            <pre><code>
&lt;h1&gt;My Header&lt;/h1&gt;
&lt;button&gt;Click Me&lt;/button&gt;
&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;
            </code></pre>

            <p>Bu JSX kodlari Reactda element sifatida ishlaydi va yakunda HTMLga aylantiriladi.</p>

            <h3>Single Tag (Yakka Teglar)</h3>
            <p>HTMLda <code>&lt;img&gt;</code> yoki <code>&lt;br&gt;</code> kabi teglar yopilish belgisi bo‘lmasligi mumkin, lekin JSXda barchasi yopilishi shart!</p>
            <p>To‘g‘ri JSX: <code>&lt;img src="logo.png" /&gt;</code></p>
            <p>Notog‘ri: <code>&lt;img src="logo.png"&gt;</code> — bu Reactda ishlamaydi.</p>

            <h3>Nega Reactda elementlar shunday yoziladi?</h3>
            <p>React DOM elementlarni virtual DOMga joylashtiradi va o‘zgarishlarni juda samarali kuzatadi. JSX sintaksisi HTML stilida bo‘lsa-da, u to‘liq JavaScript bo‘lgani uchun siz JavaScriptning barcha imkoniyatlaridan foydalanishingiz mumkin (masalan: o‘zgaruvchilar, funktsiyalar, shartli ifodalar va hokazo).</p>

            <h3>Amaliy maslahatlar</h3>
            <p>Har bir React element tegini yopishni unutmang (/>). JSX ichida JavaScript ifodalarini {} bilan yozing. Oddiy HTMLga o‘xshash bo‘lsa ham, React elementlari juda kuchli: ular sizga dinamik UI yaratishda yordam beradi!</p>
        `
        }
    }
];
