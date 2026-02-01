# Deploying to Vercel

React portfoliongizni **Vercel** orqali bepul va tezkor deploy qilish bo'yicha qo'llanma. Vercel - React ilovalar uchun eng oson platforma.

## 1. Vercel saytiga kirish
1. [Vercel.com](https://vercel.com/) saytiga kiring.
2. **"Sign Up"** tugmasini bosing va **"Continue with GitHub"** ni tanlang.

## 2. Loyihani import qilish
1. Vercel Dashboard-da **"Add New..."** -> **"Project"** tugmasini bosing.
2. Chap tomonda GitHub repozitoriyalaringiz chiqadi. `portfolio` repozitoriyasini topib, **"Import"** tugmasini bosing.

## 3. Sozlamalar (Build Configuration)
Vercel avtomatik ravishda bu **Vite** loyihasi ekanligini aniqlaydi.
1. **Framework Preset**: `Vite` bo'lishi kerak.
2. **Root Directory**: `./` (o'zgarishsiz qoldiring).
3. **Build Command**: `npm run build` (agar o'zi topsa, tegish shart emas).
4. **Environment Variables**: Agar bizda `.env` o'zgaruvchilari bo'lsa (masalan, EmailJS), ularni shu yerga qo'shish kerak.
   - `VITE_EMAILJS_SERVICE_ID`: (qiymati)
   - `VITE_EMAILJS_TEMPLATE_ID`: (qiymati)
   - `VITE_EMAILJS_PUBLIC_KEY`: (qiymati)

## 4. Loyihalarni yangilash (Projects)
Barcha loyihalaringiz `src/data/constants.js` faylida turadi.
```javascript
export const PROJECTS = [
  {
    title: "Mening Loyiham",
    description: "Loyiha haqida qisqacha ma'lumot",
    tech: ["React", "Node.js"],
    github: "https://github.com/...",
    demo: "https://...",
    image: "..." // Rasm linki
  }
];
```
O'zingizning loyihalaringizni shu yerga qo'shib qo'ying.

## 5. Deploy
1. **"Deploy"** tugmasini bosing.
2. Vercel taxminan 1 daqiqa ichida saytni build qilib, ishga tushiradi.
3. Ekranda feyerverklar otiladi va saytingizning linki chiqadi (masalan, `portfolio-farhod.vercel.app`).

## Tabriklaymiz!

## 5. Custom Domain Ulash (farkhod.dev)
Siz **Name.com** dan olgan `farkhod.dev` domeningizni Vercelga ulash uchun quyidagilarni bajaring. Bu eng oson usul (Nameservers).

### 1-qadam: Vercel-da sozlash
1. Vercel-da loyihangizga kiring (`Settings` -> `Domains`).
2. Domen yozadigan joyga `farkhod.dev` deb yozing va **Add** tugmasini bosing.
3. Vercel sizga **Nameservers** larni ko'rsatadi (masalan, `ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Ularni nusxalab oling.

### 2-qadam: Name.com-da sozlash
1. [Name.com](https://www.name.com/account/login) ga kiring.
2. **"My Domains"** bo'limiga o'ting va `farkhod.dev` ni tanlang.
3. **"Manage Nameservers"** (yoki "Nameservers") tugmasini bosing.
4. U yerdagi bor narsalarni o'chirib, Vercel berganlarini yozing:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. **Save** (Saqlash) tugmasini bosing.

### 3-qadam: Kutish
- O'zgarishlar to'liq ishlashi uchun **1 soatdan 24 soatgacha** vaqt ketishi mumkin (odatda 15-30 daqiqada ishlaydi).
- Vercel-da domen yonida ikkita yashil "ticked" paydo bo'lsa, demak hammasi tayyor!
- Endi saytingiz `https://farkhod.dev` manzilida ochiladi.
