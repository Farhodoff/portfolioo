export const blogPosts = [
    {
        id: 1,
        date: "Sep 24, 2024",
        readTime: "5",
        views: "1.2k",
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
        date: "Aug 15, 2024",
        readTime: "4",
        views: "850",
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
        date: "Jul 10, 2024",
        readTime: "6",
        views: "2.1k",
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
    }
];
