# RuneYard

Adres: [runeyard.net](https://runeyard.net). Mehmet Akdeniz’in kış odası. Rün notları, ders duyuruları ve gökyüzü yazıları aynı duvarda asılı. Ocak, rün ve astroloji sorularını odanın notlarından cevaplar.

İsteğe bağlı olarak aynı ocağa bir model bağlanır. Anahtar yoksa sayfa kendi notlarıyla çalışır.

```bash
# .env.local
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
# OPENAI_BASE_URL=https://api.openai.com/v1
```

## Çalıştırma

```bash
npm install
npm run dev
```

Geliştirme sunucusu `http://127.0.0.1:43131` adresinde açılır.

## Yığın

Next.js, TypeScript, Tailwind CSS.
