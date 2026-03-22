# 桜 Sakura Notes Blog

Soft Japanese-aesthetic personal blog built with **React + Vite + Supabase**.  
Posts are stored in Supabase — visible on every device, everywhere.

---

## 🚀 Run locally

```bash
npm install
npm run dev
# → open http://localhost:5173
```

## ☁️ Deploy to Vercel

```bash
npx vercel
```
No extra config needed — Vite is auto-detected.

---

## ✏️ Writing posts

Click **Write** in the nav bar. Posts save to Supabase instantly and appear on every device.

**Content formatting** (in the content box):
```
## Section heading
### Sub-heading

Normal paragraph. Use **bold** for emphasis.

- bullet point
- another item

> A blockquote

```code block```
```

---

## 🗄️ Supabase setup (already done)

The project is connected to Supabase at:
`https://vlmfhzwyvylucjyymenl.supabase.co`

The client lives in `src/lib/supabase.js`.
The data logic lives in `src/hooks/usePosts.js`.

### Required table (run once in Supabase SQL Editor):
```sql
create table posts (
  id bigint generated always as identity primary key,
  title text not null,
  excerpt text,
  content text,
  tags text[],
  date text,
  read_time text,
  emoji text,
  color text,
  created_at timestamptz default now()
);

alter table posts enable row level security;
create policy "public access" on posts for all using (true) with check (true);
```

---

## 📁 Structure

```
sakura-blog/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── lib/
    │   └── supabase.js        ← Supabase client
    ├── hooks/
    │   └── usePosts.js        ← All DB logic (fetch/add/update/delete)
    ├── components/
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   ├── Petals.jsx
    │   ├── PostCard.jsx
    │   └── Toast.jsx
    └── pages/
        ├── HomePage.jsx
        ├── BlogPage.jsx
        ├── PostPage.jsx
        └── WritePage.jsx
```
