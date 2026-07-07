# Non-Alcoholic Beer — Website

Official marketing site and pre-order shop for Non-Alcoholic Beer by Surprise Systems.

Built from the [Figma design](https://www.figma.com/design/NuUf2vs9iBWXDbByRpNxFi/Untitled?node-id=0-1) with Next.js and Stripe Checkout.

## Getting started

```bash
cd web
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe setup

1. Create a [Stripe account](https://dashboard.stripe.com/register) (test mode is fine for development).
2. Copy your **Secret key** and **Publishable key** from the Stripe Dashboard.
3. Add them to `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Visit `/shop` and click **Pre-order now** to test checkout with Stripe test cards (e.g. `4242 4242 4242 4242`).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page (Figma design) |
| `/shop` | Pre-order bundle (6-pack + T-shirt) |
| `/success` | Post-checkout confirmation |
| `/cancel` | Cancelled checkout |
| `/press` | Press & influencer info |
| `/contact` | Contact / lobbyist inbox |

## Deploy

Deploy the `web` folder to [Vercel](https://vercel.com). Set the same environment variables in your Vercel project settings and update `NEXT_PUBLIC_SITE_URL` to your production domain.
