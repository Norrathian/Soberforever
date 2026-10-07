# Soberforever

A private sobriety tracker — one self-contained HTML file, zero dependencies, works offline once loaded.

## Features

- Live sobriety counter (days / hours / minutes / seconds)
- Milestone progress ring with confetti celebrations and shareable milestone cards
- Daily check-ins (sober or drank — logged neutrally, never judged) with mood & craving ratings
- Daily pledge with a visible streak counter
- Money-saved tracker with projections
- Craving SOS: guided 4-4-6 breathing, 10-minute urge-surfing timer, coping ideas, "play the tape forward"
- Body recovery timeline
- Reasons wall, wins log, and a full journal (add / edit / delete)
- 7-day rhythm view of check-ins, mood, and cravings
- Daily meeting countdown (default: Sundowners, 5:30 PM — editable)
- Meeting attendance tracker with totals, weekly counts, streaks, and trophy badges
- Three themes: calm dark, sunrise, ocean
- Settings: edit everything, export/import your data as JSON

## Privacy

All data stays in **your own browser** via `localStorage` (key `soberforever.v1`).
Nothing is sent anywhere. Each device/browser keeps its own copy.

## Enable GitHub Pages

1. Push `index.html` (and this README) to the `main` branch of the repo, at the repository root.
2. On GitHub, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to **Deploy from a branch**, branch **main**, folder **/ (root)**.
4. Save — the site goes live at `https://<username>.github.io/<repo>/` within a minute or two.
