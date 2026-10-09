/** Sky facts for the daily note. Istanbul is the hall’s clock. */

const ISTANBUL = { lat: 41.0082, lon: 28.9784, timeZone: "Europe/Istanbul" };
const SYNODIC = 29.530588853;
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0);

export const signs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
] as const;

export const phases = [
  "new",
  "waxingCrescent",
  "firstQuarter",
  "waxingGibbous",
  "full",
  "waningGibbous",
  "lastQuarter",
  "waningCrescent",
] as const;

export const planets = ["saturn", "jupiter", "mars", "sun", "venus", "mercury", "moon"] as const;

export type Sign = (typeof signs)[number];
export type Phase = (typeof phases)[number];
export type Planet = (typeof planets)[number];

export type SkyNow = {
  date: Date;
  phase: Phase;
  sign: Sign;
  hour: Planet;
};

const dayRuler: Planet[] = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];

function norm(deg: number) {
  return ((deg % 360) + 360) % 360;
}

function sind(deg: number) {
  return Math.sin((deg * Math.PI) / 180);
}

function cosd(deg: number) {
  return Math.cos((deg * Math.PI) / 180);
}

function julianDay(date: Date) {
  return date.getTime() / 86400000 + 2440587.5;
}

export function moonPhase(date: Date): Phase {
  let age = (date.getTime() - KNOWN_NEW_MOON) / 86400000;
  age = ((age % SYNODIC) + SYNODIC) % SYNODIC;
  if (age < 1.85) return "new";
  if (age < 7.38) return "waxingCrescent";
  if (age < 9.23) return "firstQuarter";
  if (age < 14.77) return "waxingGibbous";
  if (age < 16.61) return "full";
  if (age < 22.15) return "waningGibbous";
  if (age < 24.0) return "lastQuarter";
  if (age < 28.5) return "waningCrescent";
  return "new";
}

/** Ecliptic longitude, short series, enough to name the sign. */
export function moonLongitude(date: Date) {
  const d = julianDay(date) - 2451545.0;
  const sunMean = norm(280.46 + 0.9856474 * d);
  const sunAnomaly = norm(357.528 + 0.9856003 * d);
  const moonMean = norm(218.316 + 13.176396 * d);
  const moonAnomaly = norm(134.963 + 13.064993 * d);
  const elongation = norm(moonMean - sunMean);
  const node = norm(93.272 + 13.22935 * d);
  return norm(
    moonMean +
      6.289 * sind(moonAnomaly) +
      1.274 * sind(2 * elongation - moonAnomaly) +
      0.658 * sind(2 * elongation) +
      0.214 * sind(2 * moonAnomaly) -
      0.186 * sind(sunAnomaly) -
      0.114 * sind(2 * node) -
      0.059 * sind(2 * elongation - 2 * moonAnomaly) -
      0.057 * sind(2 * elongation - sunAnomaly - moonAnomaly),
  );
}

export function moonSign(date: Date): Sign {
  return signs[Math.floor(moonLongitude(date) / 30) % 12];
}

function civilParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: ISTANBUL.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const pick = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  return {
    year: pick("year"),
    month: pick("month"),
    day: pick("day"),
  };
}

/** NOAA sunrise, UTC milliseconds, for the Istanbul civil date. */
function sunEvent(year: number, month: number, day: number, rise: boolean) {
  const zenith = 90.833;
  const { lat, lon } = ISTANBUL;
  const start = Date.UTC(year, month - 1, day);
  const dayOfYear = Math.floor((start - Date.UTC(year, 0, 0)) / 86400000);
  const lngHour = lon / 15;
  const t = dayOfYear + ((rise ? 6 : 18) - lngHour) / 24;
  const anomaly = 0.9856 * t - 3.289;
  let ecliptic = anomaly + 1.916 * sind(anomaly) + 0.02 * sind(2 * anomaly) + 282.634;
  ecliptic = norm(ecliptic);
  let rightAscension = (Math.atan(0.91764 * Math.tan((ecliptic * Math.PI) / 180)) * 180) / Math.PI;
  rightAscension = norm(rightAscension);
  const quadrant = Math.floor(ecliptic / 90) * 90;
  const raQuadrant = Math.floor(rightAscension / 90) * 90;
  rightAscension = (rightAscension + (quadrant - raQuadrant)) / 15;
  const sinDec = 0.39782 * sind(ecliptic);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosHour =
    (cosd(zenith) - sinDec * sind(lat)) / (cosDec * cosd(lat));
  if (cosHour > 1 || cosHour < -1) return start + (rise ? 6 : 18) * 3600000;
  const hourAngle = rise
    ? 360 - (Math.acos(cosHour) * 180) / Math.PI
    : (Math.acos(cosHour) * 180) / Math.PI;
  let universal = hourAngle / 15 + rightAscension - 0.06571 * t - 6.622 - lngHour;
  universal = ((universal % 24) + 24) % 24;
  return start + universal * 3600000;
}

function addDays(year: number, month: number, day: number, delta: number) {
  const date = new Date(Date.UTC(year, month - 1, day + delta));
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

function weekday(year: number, month: number, day: number) {
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function planetaryHour(date: Date): Planet {
  const civil = civilParts(date);
  const rise = sunEvent(civil.year, civil.month, civil.day, true);
  const set = sunEvent(civil.year, civil.month, civil.day, false);
  const now = date.getTime();
  let spanStart: number;
  let spanEnd: number;
  let rulerDay: { year: number; month: number; day: number };

  if (now >= rise && now < set) {
    spanStart = rise;
    spanEnd = set;
    rulerDay = civil;
  } else if (now >= set) {
    const next = addDays(civil.year, civil.month, civil.day, 1);
    spanStart = set;
    spanEnd = sunEvent(next.year, next.month, next.day, true);
    rulerDay = civil;
  } else {
    const prev = addDays(civil.year, civil.month, civil.day, -1);
    spanStart = sunEvent(prev.year, prev.month, prev.day, false);
    spanEnd = rise;
    rulerDay = prev;
  }

  const hourLength = (spanEnd - spanStart) / 12;
  const index = Math.min(11, Math.max(0, Math.floor((now - spanStart) / hourLength)));
  const ruler = dayRuler[weekday(rulerDay.year, rulerDay.month, rulerDay.day)];
  const start = planets.indexOf(ruler);
  const afterSunset = now >= set;
  const beforeSunrise = now < rise;
  const offset = afterSunset || beforeSunrise ? 12 : 0;
  return planets[(start + offset + index) % 7];
}

export function readSky(date = new Date()): SkyNow {
  return {
    date,
    phase: moonPhase(date),
    sign: moonSign(date),
    hour: planetaryHour(date),
  };
}

export function formatSkyDate(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: ISTANBUL.timeZone,
  }).format(date);
}
