export const RUBRIC = [
  { key: "rsiSignal",       label: "RSI Signal",       max: 15, desc: "Oversold <35 in uptrend or overbought >65 in downtrend" },
  { key: "macdCrossover",   label: "MACD Crossover",   max: 12, desc: "Confirmed bullish/bearish crossover + histogram" },
  { key: "volumeSurge",     label: "Volume Surge",     max: 12, desc: "Volume 1.5x-3x+ above 20-day average" },
  { key: "newsCatalyst",    label: "News Catalyst",    max: 12, desc: "Earnings beat, upgrade, sector news" },
  { key: "priceAction",     label: "Price Action",     max: 12, desc: "Breakout above resistance or breakdown below support" },
  { key: "sectorAlignment", label: "Sector Alignment", max: 10, desc: "Sector rotation or sector-level tailwind/headwind" },
  { key: "riskRewardScore", label: "Risk:Reward",      max: 10, desc: "R:R >= 2.5:1 = full points" },
  { key: "marketRegime",    label: "Market Regime",    max: 9,  desc: "Broad market trend supports setup direction" },
  { key: "chartPattern",    label: "Chart Pattern",    max: 8,  desc: "Bull flag, cup-handle, wedge, breakout" },
];

export const MAX_SCORE = 100;
export const MIN_SCORE = 55;

export const MARKETS = {
  "NSE India":  { currency: "INR", sym: "\u20b9", region: "Indian NSE stock market", tvPrefix: "NSE:",     tvSuffix: "" },
  "BSE India":  { currency: "INR", sym: "\u20b9", region: "Indian BSE Sensex market", tvPrefix: "BSE:",    tvSuffix: "" },
  "US Markets": { currency: "USD", sym: "$",       region: "US NYSE and NASDAQ markets", tvPrefix: "",      tvSuffix: "" },
  "Crypto":     { currency: "USD", sym: "$",       region: "top cryptocurrency market",  tvPrefix: "BINANCE:", tvSuffix: "USDT" },
};

export const STYLE_RULES = `
STYLE RULES (mandatory — apply to every text field):
- Write like a professional trader, not an analyst
- No fluff, no explanations, no academic tone
- Use short, sharp sentences. Maximum 2 sentences per field
- Sound decisive, even under uncertainty
- Avoid phrases like "may", "could", "possibly", "it appears", "suggests"
- Never start with "The stock" — start with action or condition
- Write like you are managing real money right now
- Invalidation must be a specific price level + exact condition
- Thesis must describe what is happening, not what might happen
`;
