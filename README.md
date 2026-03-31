# Spectra
A systematic market intelligence engine that scans markets, scores setups, and delivers clear trading decisions with risk, targets, and invalidation built in.


## What is SPECTRA?

SPECTRA is an AI-powered trading intelligence engine that scans markets, evaluates setups using a structured scoring system, and outputs **clear, actionable decisions**.

It helps users make a call.

## Core Philosophy

Most tools give you information.

SPECTRA gives you:
- Judgment
- Structure
- Risk clarity

Every output answers one question:

> **"Should I take this trade or not?"**

---

## Key Features

### Scanner Mode
- Finds high-probability setups across markets
- Filters using strict scoring rules
- Only shows trades with:
  - Score ≥ 55
  - Risk:Reward ≥ 2:1

### Position Mode
- Analyzes your existing trades
- Gives a clear verdict:
  - ADD / HOLD / TRIM / EXIT
- Updates:
  - Targets
  - Stop-loss
  - Invalidation

###  Compare Mode
- Ranks multiple tickers by strength
- Identifies where capital should go
- Outputs a direct allocation verdict

### Portfolio Mode
- Evaluates your entire portfolio
- Detects:
  - Sector concentration
  - Correlation risk
  - Weakest & strongest positions
- Suggests actionable changes

---

## Scoring System

Each setup is evaluated across multiple factors:

- RSI signal
- MACD crossover
- Volume expansion
- Price action
- News catalysts
- Sector alignment
- Market regime
- Risk-reward
- Chart pattern

**Max Score:** 100  
**Minimum Viable Trade:** 55  
**Required R:R:** ≥ 2.0

---

## What Makes It Different

This is **not**:
- A screener
- A charting tool
- A signal generator

This is a **decision engine**.

It combines:
- Technicals
- Market context
- Risk structure

And outputs:
- A verdict
- A thesis
- An invalidation point

---

## Example Output
Ticker: RELIANCE
Verdict: STRONG BUY
Score: 78 / 100
R:R: 2.8:1

Thesis:
Clean breakout with volume. Momentum intact.

Invalidation:
Break below 1420 → exit immediately.


---

## Tech Stack

- React (single-file architecture)
- Custom CSS system (no frameworks)
- Claude API (2-stage pipeline):
  - Research
  - Synthesis

---

## Architecture

SPECTRA runs a 2-step pipeline:

1. **Research Layer**
   - Pulls market data, news, technicals
2. **Synthesis Layer**
   - Scores setups
   - Applies strict filters
   - Outputs structured decisions

---

## Important Notes

- This is an AI-assisted tool, not financial advice
- Always verify trades independently
- Markets are probabilistic — not deterministic

---

## Roadmap

- [ ] Real-time data integration
- [ ] Chart embedding (TradingView lightweight charts)
- [ ] Backtesting engine
- [ ] User accounts + saved portfolios
- [ ] Deployment + public access

---

## Disclaimer

SPECTRA is for educational and research purposes only.  
Trading involves risk. Use responsibly.

---

## Final Thought

You don’t need more indicators.

You need better decisions.
