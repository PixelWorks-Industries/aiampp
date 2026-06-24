# aiamplifier.com — static site (Vercel-ready)

Plain static HTML/CSS/images. No build step. Deploy as-is.

## Quick deploy (for the developer)

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel              # preview deploy
vercel --prod       # production deploy

# Option B — Git
# Push this folder to a GitHub repo and "Import" it in the Vercel dashboard.
# Framework preset: "Other" (static). Output directory: leave blank.
```

## Configuration

- **`vercel.json`** — `cleanUrls: true` so `/services` works without `.html`.
  Caching: long for `/assets/*`, no-cache for HTML so content updates ship immediately.
  Security headers: nosniff, frame-options, referrer-policy.
  Vanity redirects: `/audit`, `/sprint`, `/agentic`, `/value`.

## Contact form — IMPORTANT

The form on `contact.html` posts to **Formspree** (any host works; chosen for
Vercel-compatibility — Vercel has no built-in form handler the way Netlify does).

**Before going live:**

1. Create an account at https://formspree.io (free: 50 submissions/month — fine
   for a high-touch advisory practice).
2. New form → set recipient to `advisory@aiamplifier.com` → copy the form ID.
3. In `contact.html`, replace `YOUR_FORM_ID` (line ~54) with the real ID, e.g.:
   `action="https://formspree.io/f/xeqyabcd"`.
4. In Formspree, set the redirect to `https://aiamplifier.com/contact.html?sent=1`
   (already wired via the `_next` hidden field).
5. Test from production once DNS resolves: submit → confirm email arrives → confirm
   the on-page "Sent ✓" state shows.

Alternative form backends (drop-in compatible — just change the `action` URL):
Web3Forms (unlimited, free), Getform, Basin, Formspark. All accept the same
`name="..."` fields the form already uses.

## Domain (aiamplifier.com)

GoDaddy registers the domain; DNS should point to Vercel:

1. In Vercel project → Settings → Domains → add `aiamplifier.com` and `www.aiamplifier.com`.
2. Vercel will show either nameservers or A/CNAME records.
   - Cleanest: change GoDaddy nameservers to Vercel's (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
   - Alternative: leave GoDaddy nameservers, add A record `76.76.21.21` for apex and
     CNAME `cname.vercel-dns.com` for www.
3. SSL/HTTPS is provisioned automatically by Vercel.
4. Set the canonical: pick either apex (`aiamplifier.com`) or www and redirect the other.

## Email (advisory@aiamplifier.com)

The Contact page advertises this address — it must exist *before launch*. Recommended:
Google Workspace Business Starter ($7/user/month). During setup, add the MX, SPF,
DKIM, and DMARC records in **Vercel's** DNS panel (if nameservers were delegated to
Vercel) or in **GoDaddy's** DNS (if A/CNAME approach was used). Without DKIM/DMARC,
outbound emails to C-suite recipients risk landing in spam.

## File map

```
/
├── index.html                       (was "AI Amplifier - Home.html")
├── services.html
├── ai-amplifier-audit.html
├── agentic-operating-model.html
├── value-creation-audit.html
├── market-entry-sprint.html
├── case-studies.html
├── about.html
├── contact.html
├── assets/
│   ├── site.css
│   ├── logo-white.png
│   ├── robert-hackl.jpg
│   └── dotkonnekt-logo.png
├── vercel.json
└── README.md
```

## Known TODOs (functional, not visual)

- [ ] Replace `YOUR_FORM_ID` in `contact.html` with the real Formspree ID.
- [ ] Confirm `advisory@aiamplifier.com` mailbox is live (Google Workspace or alternative).
- [ ] Optional: add a real downloadable "Customer Truth Diagnostic" PDF for the
      contact-page CTA ("Not ready to talk?") — currently a text reference with no link.
- [ ] Optional: add analytics — Plausible or GA4. Vercel Analytics is one click in dashboard.
- [ ] Optional: add `sitemap.xml` and `robots.txt` for SEO.
