# Moodly — Business Case

## Executive Summary

**Moodly** är en mobil-first SaaS-plattform som mäter och förbättrar emotionellt välmående genom multimodal AI-analys (ansikte, röst, text, biometri). Till skillnad från befintliga mood trackers som förlitar sig på subjektiv självrapport, levererar Moodly **objektiv, passiv mätning** med **mätbara interventioner** och **bevisad effekt**.

**Nytt: Familjesegment** — Moodly Family låter föräldrar följa sina barns emotionella mående i realtid, med inbyggd integritetsskydd som skyddar barnens privata samtal.

**Marknad:** Den globala digitala mental hälsa-marknaden värderas till ~30 miljarder USD (2026) med CAGR 16-18%. Emotion AI-segmentet växer ännu snabbare (CAGR 20-30%+). Familjesegmentet adderar ytterligare ~5 miljarder USD (digital parenting + child mental health).

**Modell:** Freemium B2C + B2C Family + B2B employee wellness hybrid.

**Ask:** 3-5 MSEK seed-finansiering för 12 månaders runway till product-market fit.

---

## 1. Problemet

| Datapunkt | Källa |
|-----------|-------|
| 44% av svenskar rapporterar oro/ångest (2024, upp från 31% 2011) | Folkhälsomyndigheten |
| ~40% av alla sjukskrivningar i Sverige är stressrelaterade | Försäkringskassan |
| 16.5% av Europas befolkning har psykiska besvär | WHO Europe |
| Ångest har ökat 44% i Europa sedan 2015 | Eurostat |
| Företag förlorar ~15 000 kr/anställd/år på stressrelaterad frånvaro | Svenskt Näringsliv |
| **Var 4:e barn (10-17 år) rapporterar psykisk ohälsa** | **Folkhälsomyndigheten** |
| **73% av föräldrar oroar sig för sina barns digitala välmående** | **Internetstiftelsen** |
| **BUP-köerna har ökat 40% sedan 2020** | **SKR** |

### Problemet för familjer

Föräldrar saknar verktyg för att följa sina barns emotionella mående. Barn och ungdomar (10-17 år) uttrycker sällan hur de mår verbalt, och föräldrar upptäcker problem först när de eskalerat. Befintliga lösningar är antingen övervakningsappar (som bryter förtroendet) eller terapikontakt (som kräver att problemet redan är allvarligt).

**Gapet:** Det finns ingen app som ger föräldrar insyn i barns mående utan att kompromissa med barnens integritet.

**Befintliga lösningar brister:**
- **Mood trackers** (Daylio, Moodfit): Enbart subjektiv självrapport, ingen objektiv mätning, inget familjestöd
- **Meditationsappar** (Calm, Headspace): Content-driven, mäter inte effekt
- **Terapiplattformar** (Mindler): Reaktiva, inte preventiva. Dyra per session
- **Hårdvara** (Mendi, Flow): Kräver extra enhet, hög kostnad, smal funktionalitet
- **Föräldraappar** (Bark, Qustodio): Övervakning, inte välmåendeverktyg. Bryter förtroende

**Gapet:** Ingen aktör kombinerar passiv multimodal mätning + personaliserade interventioner + mätbar effekt + familjefunktion med integritetsskydd i en lättillgänglig mobilapp.

---

## 2. Lösningen

### Kärnprodukt
En app (iOS/Android + webb) som:
1. **Mäter** känslor via kamera (ansiktsuttryck), mikrofon (röstprosodi), text (NLP) och wearables (puls, HRV)
2. **Analyserar** med AI-fusion som viktar modaliteter och ger ett "MoodScore" (0-100)
3. **Agerar** med personanpassade mikro-interventioner (CBT, andning, musik, journaling)
4. **Bevisar** effekt genom att mäta före/efter och visa ROI på välmående över tid

### Moodly Family — Killer Feature

En unik familjefunktion som löser ett verkligt problem:

**Hur det fungerar:**
1. Förälder skapar en "Familj" i inställningar
2. Lägger till barn (namn + åldersgrupp: 6-9, 10-13, 14-17)
3. Varje barn får sin egen profil med eget AI-namn och anpassad personlighet
4. Barnet använder appen precis som en vuxen — chattar, gör check-ins, får interventioner
5. Föräldern ser en **Familjedashboard** med:
   - MoodScore-trend per barn (senaste 7 dagarna)
   - Senaste känsla och tidpunkt
   - Antal check-ins
   - **Familje-alerts** ("Emma har rapporterat stress 3 dagar i rad")

**Privacy by design:**
- Föräldern ser **ALDRIG** barnets samtal, text eller transcripts
- Endast aggregerad data: score, känsla, trend, duration
- Barnet behåller en trygg plats att uttrycka sig
- GDPR-compliant: all data stannar lokalt på enheten

**Varför detta är en killer feature:**
- Löser ett djupt emotionellt problem för föräldrar
- Ingen konkurrent erbjuder detta med integritetsskydd
- Skapar viral tillväxt (förälder bjuder in barn, barn berättar för vänner)
- Ökar retention (familjekontext gör appen "sticky")
- Naturlig uppsäljning: gratis barn → premium family

### Differentiering

| Funktion | Moodly | Daylio | Calm | Remente | Mindler | Bark |
|----------|--------|--------|------|---------|---------|------|
| Multimodal AI-mätning | X | | | | | |
| Passiv data (kamera/röst) | X | | | | | |
| Objektiv poängsättning | X | | | | | |
| Mätbar interventionseffekt | X | | | | | |
| **Familjefunktion med privacy** | **X** | | | | | |
| **Familje-alerts** | **X** | | | | | |
| B2B wellness-dashboard | X | | | X | | |
| GDPR on-device processing | X | | | | | X |
| Pris < 99 kr/mån | X | X | X | X | | X |

### MVP (byggd, se prototyp)
- 30-sekunders daglig check-in (ansikte + röst + text)
- AI-fusion med MoodScore
- Personaliserade interventioner med guidad andningsövning
- Dashboard med trender, historik, statistik
- AI-insikter (mönster, korrelationer, rekommendationer)
- Passiv mätning via snabbtanke-input
- Mönster-alerts vid avvikelser
- **Familjesegment: skapa familj, lägg till barn, familjedashboard, familje-alerts**
- **Flerspråksstöd: Svenska + Engelska**
- **Inställningssida: profil, språk, familj, datahantering**
- Lokal datalagring (GDPR-proof)
- Dataexport (användaren äger sin data)

---

## 3. Marknad

### TAM / SAM / SOM

| | Globalt | Europa | Sverige |
|---|---------|--------|---------|
| **TAM** (Total Addressable Market) | 35-55 mdr USD (digital mental hälsa + digital parenting 2026-2030) | ~10-15 mdr USD | ~1 000 MSEK |
| **SAM** (Serviceable) | 10-18 mdr USD (mental health apps + emotion AI + family wellness) | ~3-5 mdr USD | ~160 MSEK |
| **SOM** (Obtainable, år 3) | — | — | 15-35 MSEK |

### Familjesegmentet — Marknadsstorlek

| Datapunkt | Värde |
|-----------|-------|
| Antal familjer med barn 6-17 i Sverige | ~800 000 |
| Digital parenting-marknad (globalt) | ~5 mdr USD (CAGR 12%) |
| Betalningsvilja: föräldrar för barns hälsa | 2-3x högre än för egen hälsa |
| Genomsnittlig familjestorlek (relevant barn) | 1.7 barn |
| Potentiell SAM (Sverige, familj) | ~40 MSEK |

### Tillväxtdrivare
- Post-pandemi normalisering av mental hälsa-verktyg
- EU AI Act skapar förtroende för reglerade AI-lösningar (fördel för europeiska bolag)
- Corporate wellness-budgetar ökar (685 MSEK i Sverige 2024, växer ~3.5% årligen)
- Wearable-penetration ökar (Apple Watch, Oura) — fler datakällor
- Gen Z/Millennials förväntar sig digital-first hälsolösningar
- **Ökande psykisk ohälsa bland barn/ungdomar driver efterfrågan på preventiva verktyg**
- **Föräldrar söker aktivt digitala lösningar — men vill inte övervaka**

---

## 4. Konkurrenslandskap (Sverige)

| Bolag | Modell | Styrka | Svaghet vs Moodly |
|-------|--------|--------|-------------------|
| **Remente** | B2C+B2B wellness-app | Stark B2B, vetenskapsbaserad | Enbart självrapport, ingen multimodal AI, inget familjestöd |
| **Mendi** | Neurofeedback hårdvara | Biometrisk hjärnmätning | Kräver headband (~3000 kr), fokus kognition ej emotioner |
| **Mindler** | Terapiplattform | Etablerad, 100kr/samtal | Reaktiv terapi, ingen prevention/tracking |
| **Sakura** | B2B psykolog-matching | B2B GDPR-säker | Ingen egen tech/mätning, förmedling |
| **Flow** | tDCS-headset + app | Kliniskt validerad mot depression | Nischprodukt, hårdvara, hög kostnad |
| **Bark** | Föräldraövervakning | Bred plattform, USA-marknad | Övervakning (ej välmående), integritetsproblem, ej nordiskt |

**Slutsats:** Ingen svensk aktör gör passiv multimodal emotion-AI med familjesegment i en mobil SaaS. Dubbelt gap — både i emotion-AI och i privacy-first familjemående.

---

## 5. Affärsmodell

### Intäktsströmmar

**B2C Individ (40% av intäkt år 1-2, 25% år 3+)**
| Tier | Pris | Innehåll |
|------|------|----------|
| Free | 0 kr | 1 check-in/dag, grundspårning, begränsad historik (7 dagar) |
| Premium | 69 kr/mån | Obegränsat, AI-insikter, alla interventioner, full historik, export |
| Premium Årlig | 549 kr/år (33% rabatt) | Samma som Premium |

**B2C Family (20% av intäkt år 1-2, 25% år 3+)**
| Tier | Pris | Innehåll |
|------|------|----------|
| Family Free | 0 kr | 1 barn, grundläggande trend, 7 dagars historik |
| Family Premium | 99 kr/mån | Upp till 5 barn, full historik, familje-alerts, detaljerad dashboard |
| Family Årlig | 799 kr/år (33% rabatt) | Samma som Family Premium |

**B2B (40% av intäkt år 1-2, 50% år 3+)**
| Paket | Pris | Innehåll |
|-------|------|----------|
| Team (10-50 anställda) | 200 kr/anställd/år | Premium för alla + anonymiserad team-dashboard |
| Enterprise (50+) | 350 kr/anställd/år | + HR-integration, rapporter, custom branding, dedicated support |
| **Enterprise Family** | **+100 kr/anställd/år** | **Family Premium som förmån för anställdas familjer** |
| Pilot | 0 kr (3 mån) | Fri testperiod för att bevisa ROI |

**Framtida intäktsströmmar (år 2+)**
- Anonymiserade data-insikter till forskare (opt-in, etikprövat)
- Premium-coaching (mänskliga coaches via app)
- Försäkringspartnerskap (rabatterade premier för aktiva användare)
- API-licens till tredjepartsutvecklare
- **Skolpaket** — Moodly for Schools (kommun-avtal, BUP-avlastning)

### Nyckeltal (targets)

| Metric | Mål |
|--------|-----|
| B2C Conversion (Free → Premium) | 5-8% |
| **Family Conversion (Free → Family Premium)** | **8-12%** |
| Monthly Churn (Premium) | < 6% |
| **Monthly Churn (Family Premium)** | **< 4%** |
| B2B Annual Churn | < 15% |
| CAC (B2C) | < 150 kr |
| **CAC (Family)** | **< 80 kr (viral)** |
| LTV (B2C Premium) | > 600 kr |
| **LTV (Family Premium)** | **> 1 200 kr** |
| LTV:CAC ratio | > 4:1 |
| DAU/MAU ratio | > 40% |

---

## 6. Finansiella projektioner

### År 1 (Månad 1-12)

| Post | Belopp (SEK) |
|------|-------------|
| **Intäkter** | |
| B2C Premium (2 000 betalande x 69 kr x 8 mån snitt) | 1 104 000 |
| B2C Family Premium (500 familjer x 99 kr x 6 mån snitt) | 297 000 |
| B2B Piloter (5 företag x 30 anställda x gratis/pilot → konvertering Q4) | 200 000 |
| **Totala intäkter** | **~1 600 000** |
| | |
| **Kostnader** | |
| Utveckling (2 FTE + frilans) | 1 800 000 |
| Infrastruktur (hosting, AI APIs) | 200 000 |
| Marketing & kundanskaffning | 600 000 |
| Juridik/GDPR/compliance | 150 000 |
| Övrigt (kontor, verktyg) | 150 000 |
| **Totala kostnader** | **~2 900 000** |
| | |
| **Nettoresultat** | **-1 300 000** |

### År 2

| Post | Belopp (SEK) |
|------|-------------|
| B2C (15 000 betalande x 69 kr x 10 mån) | 10 350 000 |
| B2C Family (5 000 familjer x 99 kr x 10 mån) | 4 950 000 |
| B2B (20 företag x 80 anställda x 250 kr) | 4 000 000 |
| B2B Enterprise Family (10 företag x 50 anställda x 100 kr) | 500 000 |
| **Totala intäkter** | **~19 800 000** |
| Totala kostnader | ~12 000 000 |
| **Nettoresultat** | **~7 800 000** |

### År 3

| Post | Belopp (SEK) |
|------|-------------|
| B2C (50 000 betalande) | 34 500 000 |
| B2C Family (20 000 familjer) | 19 800 000 |
| B2B (80 företag x 150 anställda) | 42 000 000 |
| B2B Enterprise Family | 4 000 000 |
| Övrigt (API, data, coaching, skolpaket) | 8 000 000 |
| **Totala intäkter** | **~108 300 000** |
| Totala kostnader | ~55 000 000 |
| **Nettoresultat** | **~53 300 000** |
| **Marginal** | **~49%** |

### Finansieringsbehov

| Fas | Belopp | Syfte |
|-----|--------|-------|
| Pre-seed (nu) | 500 000 - 1 000 000 | MVP-validering, 100 testanvändare, initial B2B-kontakt |
| Seed (månad 6) | 3 000 000 - 5 000 000 | Full app-utveckling, first hires, go-to-market |
| Serie A (månad 18-24) | 15 000 000 - 25 000 000 | Nordisk expansion, B2B-skalning, team |

**Möjliga finansiärer:**
- **Almi** — innovationslån, tidig fas
- **Vinnova** — innovationsbidrag (healthtech, AI)
- **EIC Accelerator** — EU-bidrag upp till 2.5M EUR
- **Angels** — Nordic Health Tech Angels, SUP46 nätverk
- **VC** — Creandum, EQT Ventures, Inventure (nordiskt healthtech-fokus)

---

## 7. Go-to-Market

### Fas 1: Validering (Månad 1-3)
- Lansera prototyp (klar!) — samla 100 testanvändare
- Enkätvalidering: "Skulle du betala 69 kr/mån för detta?"
- **Familjevalidering: 20 föräldrar testar Family-funktionen**
- 10 djupintervjuer med HR-chefer på medelstora svenska bolag
- Iterate baserat på feedback

### Fas 2: Svensk lansering (Månad 4-8)
- App Store + Google Play
- Content marketing: LinkedIn-artiklar om emotionell intelligens på jobbet
- **Föräldrabloggar/poddar: "Så följer du ditt barns mående utan att övervaka"**
- Partnerskap: Folksam, Skandia (friskvårdsbidrag-kompatibel)
- 5 B2B-piloter (gratis 3 månader mot case studies)
- PR: "Svensk AI som mäter känslor — nu även för familjer" — Breakit, Di Digital, SVT Nyheter
- **PR-vinkel familj:** "Appen som varnar föräldrar innan det är för sent" — Aftonbladet, Expressen, Vi Föräldrar

### Fas 3: Tillväxt (Månad 9-18)
- Performance marketing (Facebook/Instagram, LinkedIn för B2B)
- Viral loops: "Dela din veckotrend" (anonymiserad)
- **Family viral loop: förälder bjuder in partner, barn berättar för vänner**
- HR-mässor: Personal & Chef, HR-dagarna
- **Föräldramässor: Baby & Barn, Bokmässan (barnpanel)**
- Friskvårdsbidrag-listning (ökar B2C-konvertering massivt)
- Influencer-samarbeten: hälsoprofiler, poddar, **föräldraprofiler på Instagram**
- **Skolpilot: 3 kommuner testar Moodly for Schools**

### Fas 4: Nordisk expansion (Månad 18-30)
- Lokalisera till norska, danska, finska, engelska
- GDPR-compliance redan på plats — snabb expansion
- Lokala B2B-partners i varje marknad
- **Family-segmentet som differentiator i varje ny marknad**

---

## 8. Teknik & Roadmap

### Teknisk arkitektur

```
[Mobilapp: React Native / Flutter]
        |
[API Gateway: FastAPI / Node.js]
        |
   +---------+---------+
   |         |         |
[Face AI] [Voice AI] [Text NLP]
   |         |         |
   +---------+---------+
        |
  [Fusion Engine]
        |
  [Intervention Engine]
        |
  [PostgreSQL / Supabase]
        |
  [Family Privacy Layer]  ← filtrerar bort transcript/text
        |
  [Family Dashboard API]
```

### AI-modeller
- **Ansikte:** TensorFlow.js (on-device) eller Google Cloud Vision API
- **Röst:** Librosa + custom modell, eller Hume AI API
- **Text:** Fine-tuned swedish BERT (KB-BERT) eller multilingual transformers
- **Fusion:** Weighted ensemble med adaptiva vikter baserat på signalkvalitet
- **Barnspecifik:** Anpassade modeller för barn 6-9, 10-13, 14-17 (annorlunda uttrycksmönster)

### Roadmap

| Kvartal | Leverans |
|---------|----------|
| Q2 2026 | MVP validerad, 100 testanvändare, **familje-feature live**, seed-round stängd |
| Q3 2026 | Native app (iOS + Android), wearable-integration (Apple Watch), **skolpilot** |
| Q4 2026 | B2B-dashboard, HR-integration, 5 pilotkunder, **Enterprise Family-paket** |
| Q1 2027 | Premium-coaching, community-funktioner, **tonårsanpassning** |
| Q2 2027 | Nordisk expansion, 50 000 användare, **20 000 familjer** |
| Q4 2027 | Serie A, API-plattform för tredjepartsutvecklare |

---

## 9. Team (behov)

| Roll | Prioritet | Beskrivning |
|------|-----------|-------------|
| **Grundare/VD** | Dag 1 | Vision, strategi, fundraising |
| **CTO / Lead Developer** | Dag 1 | Full-stack + AI/ML erfarenhet |
| **UX/UI Designer** | Månad 2 | Mobil-first design, användarresearch |
| **AI/ML Engineer** | Månad 3 | Emotion AI-modeller, on-device ML |
| **Growth / Marketing** | Månad 4 | B2C + B2B go-to-market |
| **B2B Sales** | Månad 6 | Enterprise wellness-försäljning |

---

## 10. Risker & Mitigation

| Risk | Sannolikhet | Impact | Mitigation |
|------|------------|--------|------------|
| **Privacy/GDPR-incident** | Medel | Hög | On-device AI first, minimal molndata, DPO från dag 1, ISO 27001 roadmap |
| **AI-noggrannhet ifrågasätts** | Hög | Medel | Transparens ("detta är en indikation, inte diagnos"), validera mot kliniska skalor, publicera accuracy-metrics |
| **Låg retention/adoption** | Medel | Hög | Gamification, streaks, push-notiser, daglig micro-habit (30 sek), bevisad ROI |
| **Regulatoriskt (EU AI Act, MDR)** | Medel | Medel | Positionera som wellness (ej medicinteknisk produkt), juridisk rådgivning tidigt |
| **Konkurrent kopierar** | Medel | Medel | First-mover i Norden, patent på fusion-algoritm, starka B2B-relationer |
| **Svårt att rekrytera AI-talang** | Hög | Medel | Remote-first, universitetskontakter (KTH, Chalmers), equity-paket |
| **Barnsäkerhet / negativ press** | Medel | Hög | Privacy by design (förälder ser ALDRIG text), barnpsykolog i rådgivande roll, tydlig kommunikation: "detta är inte terapi" |
| **Föräldrars missbruk av data** | Låg | Hög | Teknisk begränsning: omöjligt att se samtal/text. Åldersanpassade gränser. |

---

## 11. Sammanfattning — Varför nu, varför detta

1. **Massivt problem:** Psykisk ohälsa kostar Sverige ~70 miljarder kr/år. Befintliga lösningar räcker inte.
2. **Perfekt timing:** Emotion AI mognar, wearables är mainstream, GDPR ger europeiska bolag edge.
3. **Klart gap:** Ingen svensk/nordisk aktör gör mobil multimodal emotion-mätning.
4. **Familjesegment:** Unikt värdeerbjudande — ingen konkurrent ger föräldrar insyn utan att kompromissa med barnens integritet.
5. **Skalbar modell:** SaaS med 70-80% bruttomarginal. B2B + Family ger stabilitet, B2C ger tillväxt.
6. **Mätbar impact:** Kan visa ROI i kronor (minskad sjukfrånvaro, förbättrat familjemående) — säljer sig självt.
7. **Viral potential:** Family-funktionen skapar naturliga viralloops (förälder → barn → vänner).

---

*Dokument uppdaterat 2026-03-30 | Moodly MVP Prototyp med familjesegment tillgänglig i `index.html`*
