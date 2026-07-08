export interface LocalizedText {
  en: string;
  ar: string;
}

export interface BuildingUnitLayout {
  id: string;
  type: string;
  status: "occupied" | "vacant";
}

export interface BuildingFloorLayout {
  level: LocalizedText;
  bg: string;
  units: BuildingUnitLayout[];
}

export interface UnitOccupancyDetail {
  id: string;
  type: LocalizedText;
  floor: LocalizedText;
  aprOcc: number;
  aprStatus: "occupied" | "vacant";
  avgOcc: number;
}

export interface MonthlyOccupancyPct {
  month: LocalizedText;
  pct: number;
}

export interface MonthlyRevenue {
  month: LocalizedText;
  revenue: number;
}

export interface CostItem {
  en: string;
  ar: string;
  amount: number;
}

export interface FormulaItem {
  name: LocalizedText;
  formula: LocalizedText;
  example: LocalizedText;
}

export interface FormulaSection {
  section: LocalizedText;
  items: FormulaItem[];
}

export interface InsightItem {
  category: LocalizedText;
  color: string;
  labelColor: string;
  items: LocalizedText[];
}

export interface TikTokVideo {
  id: string;
  title: LocalizedText;
}
