# Moodly — Business Case

## Executive Summary

**Moodly** är en platsbaserad välmåendeplattform för familjer som mäter barns mående per plats — skola, idrott, hem, fritid. Föräldrar får insikter, trender och varningar. Kommuner får aggregerad, anonymiserad data om barns välmående i realtid.

**Det unika:** Moodly bygger det enda kontinuerliga, platsbaserade datalagret om barns välmående per kommun i Sverige. Denna data existerar inte idag — varken hos kommuner, skolor, BUP eller Folkhälsomyndigheten.

**Modell:** Freemium B2C (föräldrar) + B2B (kommuner/skolor) + B2B2 (riksförbund). Nätverkseffekt per kommun driver tillväxt — varje ny familj gör datan mer värdefull för alla andra.

**Marknad:** Digital barnhälsa + parenting tech värderas till ~35 miljarder USD globalt (2026). Kommunal elevhälsa i Sverige omsätter ~5 miljarder kr/år — Moodly erbjuder kontinuerlig data till en bråkdel av kostnaden.

**Status:** MVP live (GitHub Pages + Supabase), kommun-benchmarking implementerat, 290 svenska kommuner förpopulerade.

---

## 1. Problemet

### Siffror

| Datapunkt | Källa |
|-----------|-------|
| 1 av 4 barn (10-17 år) rapporterar psykisk ohälsa | Folkhälsomyndigheten |
| 73% av föräldrar oroar sig för sina barns välmående | Internetstiftelsen |
| BUP-köerna har ökat 40% sedan 2020 | SKR |
| Föräldrar upptäcker i snitt 6-12 månader för sent att barnet mår dåligt | Socialstyrelsen |
| Kommuner lägger miljarder på elevhälsa baserat på årliga enkäter | SKR |
| 44% av svenskar rapporterar oro/ångest (upp från 31% 2011) | Folkhälsomyndigheten |
| ~40% av alla sjukskrivningar är stressrelaterade | Försäkringskassan |

### Problemet för föräldrar

Föräldrar har ingen aning om hur deras barn faktiskt mår i de miljöer de spenderar mest tid i. Skolan säger "det går bra", tränaren säger "hen är duktig", men barnet kommer hem tyst och trött.

Det finns inget verktyg som ger föräldern en kontinuerlig bild av barnets mående kopplat till specifika platser. Föräldrar fångar signaler för sent — när barnet redan mår dåligt.

### Problemet för kommuner

Kommuner mäter barns välmående med årliga enkäter (ELSA, Psynk, SCB). Resultaten kommer 3-6 månader efter insamling — redan inaktuella. De saknar:
- Realtidsdata per skola
- Kontinuerlig mätning (ej enstaka nedslag)
- Jämförelse mellan skolor och aktiviteter
- Tidiga varningssignaler per stadsdel/enhet

### Ingen äger denna data

| Aktör | Vad de mäter | Vad de saknar |
|-------|-------------|---------------|
| Skolan | Betyg, frånvaro | Mående, trivsel, platsbaserat |
| BUP | Diagnoser (reaktivt) | Preventiv, kontinuerlig data |
| Kommunen | Årlig enkät | Realtid, platsbaserat, jämförbart |
| Idrottsföreningar | Resultat, närvaro | Trivsel, mående |
| Folkhälsomyndigheten | Nationell statistik | Lokal, kommun-nivå, realtid |

**Gapet:** Ingen aktör samlar kontinuerlig, platsbaserad välmåendedata om barn. Moodly fyller detta gap.

### Befintliga lösningar brister

| Lösning | Typ | Svaghet |
|---------|-----|---------|
| Daylio, Moodfit | Mood tracker | Generell (ej platsbaserad), inget familjestöd, ingen kommun-data |
| Calm, Headspace | Meditation | Content-driven, mäter inte effekt, ej för barn |
| Mindler, Kry | Terapi | Reaktiv (kräver att problemet finns), dyr per session |
| Bark, Qustodio | Föräldraövervakning | Övervakar (bryter förtroende), mäter inte mående |
| ELSA-enkäter | Kommunverktyg | 1x/år, ej realtid, ej jämförbart |

**Ingen kombinerar:** platsbaserad check-in + föräldra-dashboard + kommun-benchmarking + barnintegritet.

---

## 2. Lösningen

### Kärnprodukt

Barnet checkar in sitt mående med en emoji (1-5) per plats — **10 sekunder per dag**. Föräldern ser allt i en dashboard. Kommunen ser anonymiserad aggregering.

### Hur det fungerar

**Barnet:**
1. Öppnar Moodly → ser sina platser (Skolan, Fotbollen, Hem)
2. Trycker en emoji per plats (😢😕😐🙂😄)
3. Valfri kommentar
4. Klart — 10 sekunder

**Föräldern:**
1. Ser alla barns mående i en dashboard
2. Per plats: dagens emoji + 30-dagars snitt + trend
3. Varningar: "Emma har rapporterat lågt mående på skolan 3 dagar i rad"
4. Kommun-benchmark: "Dina barns mående vs snittet i Vaxholm"
5. Insikter: "Bästa platsen: Simhallen (4.3/5). Sämsta: Skolan (2.8/5)"

**Kommunen (B2B-dashboard):**
1. Anonymiserad data per skola, stadsdel, aktivitetstyp
2. Trender: "Välmåendet på Ytterbyskolan har sjunkit 15% senaste månaden"
3. Jämförelse: "Så ligger era skolor till mot kommunsnittet"
4. Tidiga varningar: "Ökning av lågt mående bland 10-13-åringar i västra stadsdelen"

### Privacy by design

- Föräldern ser **ALDRIG** barnets samtalstexter — bara trender och siffror
- Kommunen ser **ALDRIG** individuella barn — bara aggregerad data
- Minst 3 användare per plats/kommun innan benchmark visas
- All data offline-first (localStorage), opt-in till moln
- GDPR-compliant: barnet/föräldern äger sin data, kan exportera och radera

### Gamification (Barnretention)

Barn måste vilja använda appen. Streak + poäng + avatarer:
- **Streak:** 🔥 7 dagars streak → bonuspoäng
- **Poäng:** Varje check-in ger poäng, bonus för alla platser
- **Avatarer:** Köp och lås upp med poäng (🦊🐱🐶🦄🐉⭐🚀)
- **Daglig belöning:** Random bonuspoäng varje dag
- **Familje-streak:** "Hela familjen har checkat in 5 dagar i rad!"

### Kommun-benchmarking — Nyckel-feature

Varje förälder anger sin hemkommun vid registrering (förpopulerad lista med alla 290 svenska kommuner). Data aggregeras per kommun:

- **< 3 familjer:** "Du är bland de första i Vaxholm! Bjud in fler."
- **3+ familjer:** Genomsnittligt mående visas, jämförelse med din familj
- **50+ familjer:** Statistiskt signifikant — plats-nivå benchmark möjlig
- **500+ familjer:** Unik datakälla som ingen kan replikera

**Nätverkseffekt:** Föräldern ser mer värde ju fler som använder appen i samma kommun. Detta driver organisk spridning.

### Differentiering

| Funktion | Moodly | Daylio | Calm | Mindler | Bark |
|----------|--------|--------|------|---------|------|
| Platsbaserad check-in per barn | **X** | | | | |
| Föräldra-dashboard med privacy | **X** | | | | |
| Kommun-benchmarking | **X** | | | | |
| Familje-alerts (3+ dagar lågt) | **X** | | | | |
| Gamification för barn | **X** | X | | | |
| B2B kommun-data | **X** | | | | |
| Offline-first + GDPR | **X** | | | | X |
| Pris < 99 kr/mån | **X** | X | X | | X |

---

## 3. Det unika dataobjektet

**Moodly är inte en app — det är ett datalager.**

Appen är distributionsmekanismen. Det verkliga värdet är den aggregerade, platsbaserade välmåendedatan per kommun som ingen annan aktör äger.

| Data vi bygger | Vem vill ha den | Varför den inte finns |
|---|---|---|
| Mående per skola, kontinuerligt | Kommuner, rektorer, elevhälsa | Enkäter görs 1x/år, ej realtid |
| Mående per idrottsförening | RF, specialförbund, föräldrar | Ingen mäter trivsel i idrott |
| Mående per kommun, jämförbart | SKR, media, politiker | Ingen aggregerar platsbaserat |
| Tidiga varningssignaler per barn | Föräldrar, BUP | Upptäcks 6-12 mån för sent |
| Nationell karta: barns välmående | Folkhälsomyndigheten, forskare | Existerar inte i realtid |

**Moat:**
1. **Datanätverkseffekt.** Varje ny familj i en kommun gör datan mer värdefull. Går inte att kopiera — tar tid att bygga.
2. **Platsbaserad granularitet.** Andra mäter "hur mår du?" generellt. Moodly mäter "hur mår du PÅ SKOLAN vs PÅ IDROTTEN vs HEMMA."
3. **Dubbelsidig modell.** Föräldrar skapar datan gratis (de får värde). Kommuner betalar för aggregatet.
4. **Låg friktion.** 10 sekunder per dag. Emoji-check-in. Barn gillar det.
5. **First-mover.** Ingen svensk/nordisk aktör gör platsbaserad barnvälmående.

---

## 4. Marknad

### TAM / SAM / SOM

| | Globalt | Europa | Sverige |
|---|---------|--------|---------|
| **TAM** (Digital barnhälsa + parenting tech) | ~35 mdr USD | ~10 mdr USD | ~1 200 MSEK |
| **SAM** (Platsbaserad barnvälmående + kommun-data) | ~5 mdr USD | ~1.5 mdr USD | ~200 MSEK |
| **SOM** (Obtainable, år 3) | — | — | 15-40 MSEK |

### Sverige — Nyckeldata

| Datapunkt | Värde |
|-----------|-------|
| Antal familjer med barn 6-17 år | ~800 000 |
| Antal kommuner | 290 |
| Kommunal elevhälsa (total budget) | ~5 mdr kr/år |
| Betalningsvilja: föräldrar för barns hälsa | 2-3x högre än för egen hälsa |
| Antal skolor (grund + gym) | ~6 000 |
| Antal idrottsföreningar med barn/ungdom | ~14 000 |

### Tillväxtdrivare

- Ökande psykisk ohälsa bland barn driver efterfrågan på preventiva verktyg
- Föräldrar söker digitala lösningar — men vill inte övervaka
- Kommuner behöver realtidsdata — årliga enkäter räcker inte
- Post-pandemi normalisering av digitala hälsoverktyg
- GDPR ger europeiska bolag edge (privacy by design)
- Skolinspektionen ställer ökade krav på elevhälsa → kommuner behöver data

---

## 5. Konkurrenslandskap

| Aktör | Modell | Styrka | Svaghet vs Moodly |
|-------|--------|--------|-------------------|
| **Daylio** | B2C mood tracker | Populär, enkel | Generell (ej platsbaserad), inget familjestöd, ingen kommun-data |
| **Remente** | B2C+B2B wellness | Stark B2B, vetenskaplig | Ej barn-fokuserad, ingen platsbaserad data |
| **Bark** | Föräldraövervakning | Bred plattform, USA | Övervakning (ej välmående), bryter förtroende |
| **Elevhälsoenkäter** | Kommun-verktyg | Etablerat, kommuner vana | 1x/år, ej realtid, ej jämförbart, dyrt |
| **Mindler** | Terapiplattform | Etablerad | Reaktiv terapi, ingen prevention |

**Slutsats:** Ingen aktör kombinerar platsbaserad barncheck-in + föräldra-dashboard + kommun-benchmarking. Moodly äger ett obefolkat segment.

---

## 6. Affärsmodell

### Kundsegment

**Fas 1: B2C — Föräldrar (användarbas)**

| Tier | Pris | Innehåll |
|------|------|----------|
| **Gratis** | 0 kr | 1 barn, grundläggande check-in, 7 dagars historik |
| **Premium** | 49 kr/mån | Obegränsat antal barn, kommun-benchmark, AI-insikter, avancerade varningar, full historik |
| **Familj** | 79 kr/mån | Allt i Premium + delad dashboard för båda föräldrar, familje-streak |

**Varför föräldrar betalar:** Kommun-benchmarken. "Hur ligger mitt barns skola till jämfört med andra i kommunen?" — data som inte finns någon annanstans.

**Fas 2: B2B — Kommuner och skolor**

| Paket | Pris | Innehåll |
|-------|------|----------|
| **Per skola** | 2 000-5 000 kr/mån | Dashboard per skola, trender, varningar |
| **Kommunlicens** | 15 000-40 000 kr/mån | Alla skolor + fritid, jämförelse, årsrapport |
| **Pilot** | 0 kr (3 mån) | Fri testperiod — kommunen ser data de redan har |

**Varför kommuner betalar:** De lägger redan miljoner på enkäter och elevhälsoteam som agerar reaktivt. Moodly ger proaktiv, kontinuerlig data till en bråkdel av kostnaden. Pitchen: "Vi har redan data om era skolor. Vill ni se den?"

**Fas 3: B2B2 — Riksförbund och myndigheter**

| Kund | Värde | Pris |
|------|-------|------|
| Riksidrottsförbundet (RF) | Trivseldata per idrottsförening | 100 000-300 000 kr/år |
| Sveriges Kommuner och Regioner (SKR) | Nationell jämförelse | 200 000-500 000 kr/år |
| Folkhälsomyndigheten/forskare | Anonymiserad forskningsdata | Licensavtal |

### Framtida intäktsströmmar (år 2+)

- AI-kompis (Luna) med minne — premium-funktion
- Skolpaket: Moodly for Schools (lärare ser klassnivå, ej individ)
- Anonymiserade data-insikter till forskare (opt-in, etikprövat)
- Försäkringspartnerskap (rabatterade premier för aktiva användare)
- Nationell årsrapport: "Så mår barnen i Sveriges kommuner" (PR + sponsring)

### Nyckeltal (targets)

| Metrik | Mål |
|--------|-----|
| B2C konvertering (Free → Premium) | 5-8% |
| Family konvertering (Free → Familj) | 8-12% |
| Månatlig churn (Premium) | < 5% |
| Månatlig churn (Familj) | < 3% |
| B2B årlig churn | < 15% |
| CAC (B2C) | < 80 kr (organisk via kommun-nätverkseffekt) |
| LTV (B2C Premium) | > 800 kr |
| LTV (Family) | > 1 500 kr |
| LTV:CAC ratio | > 5:1 |
| DAU/MAU ratio | > 40% |

---

## 7. Finansiella projektioner

### År 1 (Månad 1-12)

| Post | Belopp (SEK) |
|------|-------------|
| **Intäkter** | |
| B2C Premium (1 500 betalande x 49 kr x 8 mån snitt) | 588 000 |
| B2C Familj (400 familjer x 79 kr x 6 mån snitt) | 189 600 |
| B2B Piloter (2 kommuner x 20 000 kr x 4 mån) | 160 000 |
| **Totala intäkter** | **~940 000** |
| | |
| **Kostnader** | |
| Supabase Pro + domän | 24 000 |
| Marketing (föräldranätverk, kommun-kontakt) | 200 000 |
| Utveckling (frilans, AI-chat) | 400 000 |
| Juridik/GDPR | 50 000 |
| Övrigt | 50 000 |
| **Totala kostnader** | **~724 000** |
| | |
| **Nettoresultat** | **+216 000** |

*Notera: Mycket låg kostnadsbas tack vare statisk HTML + Supabase. Ingen infrastruktur att skala.*

### År 2

| Post | Belopp (SEK) |
|------|-------------|
| B2C Premium (8 000 betalande x 49 kr x 10 mån) | 3 920 000 |
| B2C Familj (3 000 familjer x 79 kr x 10 mån) | 2 370 000 |
| B2B Kommuner (8 kommuner x 25 000 kr x 10 mån) | 2 000 000 |
| B2B2 Riksförbund (1 avtal) | 200 000 |
| **Totala intäkter** | **~8 490 000** |
| Totala kostnader (team, marketing, infra) | ~4 500 000 |
| **Nettoresultat** | **~3 990 000** |
| **Marginal** | **~47%** |

### År 3

| Post | Belopp (SEK) |
|------|-------------|
| B2C Premium (25 000 betalande) | 12 250 000 |
| B2C Familj (12 000 familjer) | 9 480 000 |
| B2B Kommuner (30 kommuner x 30 000 kr x 12 mån) | 10 800 000 |
| B2B2 Riksförbund + SKR (3 avtal) | 900 000 |
| Övrigt (skolpaket, forskning, API) | 2 000 000 |
| **Totala intäkter** | **~35 430 000** |
| Totala kostnader | ~18 000 000 |
| **Nettoresultat** | **~17 430 000** |
| **Marginal** | **~49%** |

### Driftkostnad idag

| Post | Månad |
|---|---|
| Supabase (Pro) | ~200 kr |
| Domän + hosting (GitHub Pages) | 0 kr |
| AI API (Luna-chat, framtid) | 500-2 000 kr |
| **Total** | **~700-2 200 kr/mån** |

**Marginal vid skalning: 80-90%.** Inga servrar, ingen komplex infrastruktur. Supabase hanterar databas, auth och RLS.

### Finansieringsbehov

| Fas | Belopp | Syfte |
|-----|--------|-------|
| Bootstrapped (nu) | 0 kr | MVP live, validera med första kommunen |
| Pre-seed (månad 3-4) | 300 000-800 000 | Marketing i 3 kommuner, UX-polish, Luna AI |
| Seed (månad 8-12) | 2 000 000-5 000 000 | Team (3-4 pers), 20+ kommuner, B2B-sälj |
| Serie A (månad 18-24) | 10 000 000-20 000 000 | Nordisk expansion, skolpaket, nationell data |

**Möjliga finansiärer:**
- **Almi** — innovationslån (100-500k)
- **Vinnova** — innovationsbidrag (healthtech, AI, socialt värde)
- **EIC Accelerator** — EU-bidrag upp till 2.5M EUR
- **Angels** — Nordic Health Tech Angels, SUP46
- **VC** — Creandum, EQT Ventures, Inventure (nordiskt healthtech)

---

## 8. Go-to-Market

### Steg 1: En kommun i taget (Månad 1-6)

**Strategi:** Fokusera på EN kommun. Nå kritisk massa (50+ familjer) innan nästa.

**Taktik:**
1. Välj en medelstor kommun (15 000-40 000 inv.) — t.ex. Vaxholm, Lerum, Staffanstorp
2. Kontakta 3-5 föräldrar via Facebook-grupper ("Vaxholms föräldrar")
3. Nätverkseffekten driver: "Se hur barnen i Vaxholm mår" lockar fler
4. Organisk spridning: varje förälder bjuder in 2-3 andra (inbjudningskod i appen)
5. Vid 50+ familjer → kontakta kommunens skolförvaltning

**CAC: ~0 kr.** Appen löser ett verkligt problem. Kommun-benchmarken skapar "fear of missing out" — föräldrar vill se hur deras barns skola ligger till.

### Steg 2: Kommun-pitch med data (Månad 6-12)

**Strategi:** Visa kommunen data de inte visste att de hade.

**Pitch:** "Vi har 200 föräldrar i Vaxholm som dagligen mäter sina barns mående. Ytterbyskolan ligger på 3.8/5, Resarö skola på 4.2/5. Vill ni se hela bilden och agera på den?"

**Conversion trigger:** Kommunen betalar för att komma åt data som redan finns — inte för att skapa den.

**Parallellt:** Starta i 3-5 nya kommuner med samma playbook.

### Steg 3: PR + Nationell utrullning (Månad 12-18)

- **PR-hook:** "Så mår barnen i Sveriges kommuner — första realtidsmätningen"
- Kanaler: Vi Föräldrar, Aftonbladet, SVT, Breakit, Di Digital
- Föräldra-influencers på Instagram/TikTok
- Partnerskap med RF: "Så mår barnen i svensk idrott"
- 10-20 kommuner parallellt

### Steg 4: Nordisk expansion (Månad 18-30)

- Lokalisera till norska, danska, finska, engelska
- GDPR-compliance redan på plats — snabb expansion
- Samma playbook: en kommune/kommun i taget
- Familjesegmentet som differentiator i varje marknad

---

## 9. Teknik

### Nuvarande arkitektur (live)

```
[Single-file HTML/CSS/JS]
         |
    [Supabase]
    ├── PostgreSQL (data)
    ├── Auth (e-post + magic link)
    ├── RLS (row-level security)
    └── RPC (kommun-aggregering)
         |
    [Nominatim/OSM]
    └── Platssökning (skolor, idrottsanläggningar)
```

- **Frontend:** Statisk HTML-fil, GitHub Pages (0 kr hosting)
- **Backend:** Supabase (PostgreSQL + Auth + RLS + RPC)
- **Offline-first:** localStorage primärt, Supabase syncar i bakgrunden
- **Platssökning:** Nominatim/OpenStreetMap API (gratis, ingen API-nyckel)

### Datamodell

- **profiles** — förälder/barn, kommun, gamification-state
- **places** — skola/idrott/hem per barn, OSM-koppling
- **place_checkins** — daglig emoji-score per plats (1-5)
- **families** — familjegrupp med inbjudningskod
- **family_members** — förälder/barn-roller med RLS
- **osm_benchmarks** — materialized view, anonymiserad plats-aggregering
- **get_kommun_stats()** — RPC för kommun-nivå benchmarking
- **get_kommun_user_count()** — RPC för nätverkseffekt-UX

### Roadmap

| Kvartal | Leverans |
|---------|----------|
| **Q2 2026** | MVP live, kommun-benchmarking, första kommun (50 familjer) |
| **Q3 2026** | Luna AI-kompis med minne, mood-avatar, veckoberättelse, PWA/native |
| **Q4 2026** | B2B kommun-dashboard, skolnivå-benchmark, 5 kommuner |
| **Q1 2027** | Kartvy (grön→röd per plats), push-notiser, familje-streak-belöningar |
| **Q2 2027** | Nordisk expansion, 20 kommuner, PR-rapport "Så mår barnen" |
| **Q4 2027** | Skolpaket (lärare ser klassnivå), RF-partnerskap, Serie A |

---

## 10. Risker & Mitigation

| Risk | Sannolikhet | Impact | Mitigation |
|------|------------|--------|------------|
| **Barn slutar använda appen** | Hög | Hög | Gamification, Luna AI-kompis, familje-streak, korta check-ins (10 sek), push-notiser |
| **Svårt att nå kritisk massa per kommun** | Medel | Hög | Fokusera en kommun i taget, föräldranätverk som kanal, inbjudningskod, benchmark-CTA |
| **Kommuner vill inte betala** | Medel | Medel | Visa data de redan har (gratis pilot), jämför med enkätkostnad, visa ROI |
| **GDPR-oro från föräldrar** | Medel | Medel | Offline-first, opt-in moln, transparent integritetspolicy, "du ser aldrig samtal" |
| **Barnsäkerhet / negativ press** | Medel | Hög | Privacy by design (förälder ser ALDRIG text), barnpsykolog i rådgivande roll |
| **Konkurrenter kopierar** | Låg | Medel | Nätverkseffekt = moat. Data tar tid att bygga. First-mover i Sverige |
| **Data-kvalitet (barn slarvar)** | Medel | Medel | Gamification belönar konsekvens, streaks, social motivation via familj |
| **Regulatoriskt (EU AI Act)** | Låg | Medel | Wellness-positionering (ej medicinteknisk), juridisk rådgivning |

---

## 11. Sammanfattning — Varför detta, varför nu

1. **Massivt problem.** 1 av 4 barn mår dåligt. Föräldrar vet inte. Kommuner agerar för sent.

2. **Unik data.** Ingen äger platsbaserad, kontinuerlig välmåendedata om barn per kommun. Moodly bygger detta datalager.

3. **Nätverkseffekt.** Varje familj i en kommun gör datan mer värdefull för alla andra. Detta är en moat som inte kan kopieras — den byggs över tid.

4. **Tre betalande segment.** Föräldrar (B2C), kommuner (B2B), riksförbund (B2B2). Föräldrar skapar datan, kommuner betalar för insikterna.

5. **Extremt låg kostnad.** Statisk HTML + Supabase = ~700 kr/mån driftkostnad. 80-90% marginal vid skalning.

6. **Live idag.** MVP fungerar, kommun-benchmarking implementerat, 290 kommuner förpopulerade. Redo att validera.

7. **Timing.** Barnhälsa är politiskt prioriterat. Kommuner söker verktyg. Föräldrar vill ha svar. Ingen annan bygger detta.

**Vision:** "Hur mår barnen i din kommun?" — Moodly är svaret.

---

*Uppdaterad 2026-03-31 | MVP live: https://guslinmarcus.github.io/kanslaflow/*
