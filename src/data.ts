import { 
  BuildingFloorLayout, 
  UnitOccupancyDetail, 
  MonthlyOccupancyPct, 
  MonthlyRevenue, 
  CostItem, 
  InsightItem, 
  FormulaSection,
  UnitAveragePrice
} from "./types";

export const Db: BuildingFloorLayout[] = [
  {
    level: { en: "Floor 3", ar: "الدور الثالث" },
    bg: "bg-[#EDE5DC]",
    units: [
      { id: "43-317", type: "1BR", status: "occupied" },
      { id: "43-318", type: "1BR", status: "occupied" },
      { id: "43-319", type: "1BR", status: "occupied" },
      { id: "43-320", type: "1BR", status: "occupied" }
    ]
  },
  {
    level: { en: "Floor 2", ar: "الدور الثاني" },
    bg: "bg-[#F5EFE7]",
    units: [
      { id: "43-211", type: "1BR", status: "vacant" },
      { id: "43-212", type: "1BR", status: "occupied" },
      { id: "43-213", type: "1BR", status: "occupied" },
      { id: "43-214", type: "1BR", status: "occupied" },
      { id: "43-215", type: "1BR", status: "occupied" },
      { id: "43-216", type: "1BR", status: "vacant" }
    ]
  },
  {
    level: { en: "Floor 1", ar: "الدور الأول" },
    bg: "bg-[#FAF8F5]",
    units: [
      { id: "43-105", type: "1BR", status: "occupied" },
      { id: "43-106", type: "1BR", status: "occupied" },
      { id: "43-107", type: "1BR", status: "vacant" },
      { id: "43-108", type: "1BR", status: "occupied" },
      { id: "43-109", type: "1BR", status: "occupied" },
      { id: "43-110", type: "1BR", status: "occupied" }
    ]
  },
  {
    level: { en: "Ground Floor", ar: "الدور الأرضي" },
    bg: "bg-white",
    units: [
      { id: "43-001", type: "2BR", status: "occupied" },
      { id: "43-002", type: "2BR", status: "occupied" },
      { id: "43-003", type: "2BR", status: "occupied" },
      { id: "43-004", type: "2BR", status: "occupied" }
    ]
  }
];

export const Mb: UnitOccupancyDetail[] = [
  { id: "43-001", type: { en: "2-Bedroom", ar: "غرفتان" }, floor: { en: "Ground", ar: "أرضي" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 1 },
  { id: "43-002", type: { en: "2-Bedroom", ar: "غرفتان" }, floor: { en: "Ground", ar: "أرضي" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.738 },
  { id: "43-003", type: { en: "2-Bedroom", ar: "غرفتان" }, floor: { en: "Ground", ar: "أرضي" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 1 },
  { id: "43-004", type: { en: "2-Bedroom", ar: "غرفتان" }, floor: { en: "Ground", ar: "أرضي" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.778 },
  { id: "43-105", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 1", ar: "الدور الأول" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.667 },
  { id: "43-106", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 1", ar: "الدور الأول" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.903 },
  { id: "43-107", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 1", ar: "الدور الأول" }, aprOcc: 0, aprStatus: "vacant", avgOcc: 0.973 },
  { id: "43-108", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 1", ar: "الدور الأول" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.725 },
  { id: "43-109", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 1", ar: "الدور الأول" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.93 },
  { id: "43-110", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 1", ar: "الدور الأول" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.933 },
  { id: "43-211", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 0, aprStatus: "vacant", avgOcc: 0.692 },
  { id: "43-212", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.905 },
  { id: "43-213", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.833 },
  { id: "43-214", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 1 },
  { id: "43-215", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.849 },
  { id: "43-216", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 0, aprStatus: "vacant", avgOcc: 0.919 },
  { id: "43-317", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.92 },
  { id: "43-318", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.932 },
  { id: "43-319", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.883 },
  { id: "43-320", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 1 }
];

export const EM = 0.78; // Portfolio Average Occupancy Rate

export const jM: MonthlyOccupancyPct[] = [
  { month: { en: "Jun '25", ar: "يونيو 25" }, pct: 0.26 },
  { month: { en: "Jul '25", ar: "يوليو 25" }, pct: 0.49 },
  { month: { en: "Aug '25", ar: "أغسطس 25" }, pct: 0.66 },
  { month: { en: "Sep '25", ar: "سبتمبر 25" }, pct: 0.69 },
  { month: { en: "Oct '25", ar: "أكتوبر 25" }, pct: 0.70 },
  { month: { en: "Nov '25", ar: "نوفمبر 25" }, pct: 0.96 },
  { month: { en: "Dec '25", ar: "ديسمبر 25" }, pct: 0.94 },
  { month: { en: "Jan '26", ar: "يناير 26" }, pct: 0.90 },
  { month: { en: "Feb '26", ar: "فبراير 26" }, pct: 0.84 },
  { month: { en: "Mar '26", ar: "مارس 26" }, pct: 0.85 },
  { month: { en: "Apr '26", ar: "أبريل 26" }, pct: 0.85 },
  { month: { en: "May '26", ar: "مايو 26" }, pct: 0.86 },
  { month: { en: "Jun '26", ar: "يونيو 26" }, pct: 0.89 }
];

export const Ou: MonthlyRevenue[] = [
  { month: { en: "Jun '25", ar: "يونيو 25" }, revenue: 25576 },
  { month: { en: "Jul '25", ar: "يوليو 25" }, revenue: 86493 },
  { month: { en: "Aug '25", ar: "أغسطس 25" }, revenue: 129778 },
  { month: { en: "Sep '25", ar: "سبتمبر 25" }, revenue: 129223 },
  { month: { en: "Oct '25", ar: "أكتوبر 25" }, revenue: 129361 },
  { month: { en: "Nov '25", ar: "نوفمبر 25" }, revenue: 165817 },
  { month: { en: "Dec '25", ar: "ديسمبر 25" }, revenue: 161178 },
  { month: { en: "Jan '26", ar: "يناير 26" }, revenue: 163710 },
  { month: { en: "Feb '26", ar: "فبراير 26" }, revenue: 157249 },
  { month: { en: "Mar '26", ar: "مارس 26" }, revenue: 152710 },
  { month: { en: "Apr '26", ar: "أبريل 26" }, revenue: 155421 },
  { month: { en: "May '26", ar: "مايو 26" }, revenue: 148000 },
  { month: { en: "Jun '26", ar: "يونيو 26" }, revenue: 148000 }
];

export const Ha = 1752516; // Actual Gross Collected Revenue (12.5 months / Full Contract)
export const yM = 66319;   // Actual Deductions (OTAs & channel fees)
export const xM = 1686197; // Net Collected Revenue = Ha - yM
export const bM = 118034;   // Mathwaa share actually received (7% on net revenue)

export const Cfe = 0;       // No remaining forecast
export const Ji = 1752516;  // Total Gross Revenue = Ha
export const Rb = 118034;    // Mathwaa share actually received
export const wM = 100;      // 100% completed!

export const SM = 2447487; // Full Occupancy Book Value (12.5 months)

export const _M = [
  { min: 0, max: 1600000, fee: 5 },
  { min: 1600001, max: 1700000, fee: 5.5 },
  { min: 1700001, max: 1800000, fee: 7 },
  { min: 1800001, max: 1900000, fee: 9 },
  { min: 1900001, max: 2000000, fee: 11 },
  { min: 2000001, max: 2100000, fee: 13 },
  { min: 2100001, max: 2200000, fee: 15 },
  { min: 2200001, max: 2300000, fee: 17 },
  { min: 2300001, max: 2400000, fee: 19 },
  { min: 2400001, max: 2500000, fee: 20 },
  { min: 2500001, max: 2600000, fee: 21 },
  { min: 2600001, max: 2700000, fee: 22 },
  { min: 2700001, max: 2800000, fee: 23 },
  { min: 2800001, max: 2900000, fee: 24 },
  { min: 2900001, max: null, fee: 25 }
];

export const l$: CostItem[] = [
  { en: "On-Site Housekeeping Staff (Full-Time)", ar: "موظف نظافة داخلي (دوام كامل)", amount: 39600 },
  { en: "Property & Guest Supplies", ar: "مستلزمات العقار والضيوف", amount: 6000 },
  { en: "Maintenance & Repairs", ar: "الصيانة والإصلاحات", amount: 18000 },
  { en: "Laundry & Linen Services", ar: "خدمات الغسيل والمفروشات", amount: 12000 },
  { en: "Operations Supervisor & Support", ar: "مشرف العمليات والدعم التشغيلي", amount: 18000 },
  { en: "Vehicle Lease & Fuel", ar: "إيجار المركبة والوقود", amount: 24000 }
];

export const u$: CostItem[] = [
  { en: "Paid & Organic Marketing Campaigns", ar: "حملات تسويقية مدفوعة وعضوية", amount: 24000 },
  { en: "Property Management System (PMS)", ar: "نظام إدارة الحجوزات (PMS)", amount: 6000 },
  { en: "Corporate Overhead (Administration, Finance, Sales & Marketing)", ar: "المصاريف الإدارية العامة (إدارة، مالية، مبيعات وتسويق)", amount: 120000 }
];

export const as = 117600; // Total Direct Costs
export const os = 150000; // Total Indirect Costs
export const Eu = as + os; // Total Mathwaa Investment = 267,600

export const Wa = 267600;  // Operating Costs for Year 1 (which matches total expenses)
export const c$ = 1686197; // Actual Net Revenue for Renewal comparison
export const tS = 118034;   // Mathwaa actual current earnings received (7% of net)
export const gM = 149566;  // Net Loss under 7% actuals = 149,566
export const vM = Math.round(c$ * 0.15); // Mathwaa retroactive earnings at 15% = 251,757
export const f$ = 1800000; // Estimated Year 2 Revenue
export const Ud = Math.round(f$ * 0.2); // Mathwaa earnings at 20% on Year 2 = 360,000

export const insightsData: InsightItem[] = [
  {
    category: { en: "Occupancy", ar: "الإشغال" },
    color: "bg-emerald-50 border-emerald-100",
    labelColor: "text-emerald-700",
    items: [
      { en: "Average occupancy of 78% over the full 12.5-month contract, maintaining 89% in June 2026.", ar: "بلغ متوسط الإشغال 78% طوال فترة العقد الكاملة البالغة 12.5 شهراً، مع الحفاظ على نسبة 89% في يونيو 2026." },
      { en: "Peak occupancy of 96% was achieved in November 2025.", ar: "تم تحقيق ذروة الإشغال 96% في نوفمبر 2025." }
    ]
  },
  {
    category: { en: "Revenue", ar: "الإيرادات" },
    color: "bg-blue-50 border-blue-100",
    labelColor: "text-blue-700",
    items: [
      { en: "SAR 1,752,516 collected over the full contract period (June 16, 2025 to June 30, 2026).", ar: "تم تحصيل 1,752,516 ريال طوال فترة العقد الكاملة (16 يونيو 2025 إلى 30 يونيو 2026)." },
      { en: "Net revenue stands at SAR 1,686,197 after SAR 66,319 in costs deducted from revenue for electricity, water, and internet.", ar: "بلغ صافي الإيراد 1,686,197 ريال بعد خصم تكاليف الكهرباء والمياه والإنترنت البالغة 66,319 ريال من إجمالي الإيرادات." }
    ]
  },
  {
    category: { en: "Our Investment", ar: "استثمارنا" },
    color: "bg-amber-50 border-amber-100",
    labelColor: "text-amber-700",
    items: [
      { en: "Total Mathwaa operating investment in this property reached SAR 267,600 across direct and indirect costs.", ar: "بلغ إجمالي مصاريف تشغيل مثوى في هذا العقار 267,600 ريال تشمل التكاليف المباشرة وغير المباشرة." },
      { en: "This equals 16% of net revenue, which is the exact basis for our proposed management fees.", ar: "يعادل ذلك 16% من صافي الإيراد، وهو المبرر الدقيق لمقترح الرسوم الجديد لتغطية التكاليف." }
    ]
  }
];

export const marketingCampaigns = [
  { en: "Listing on Bayut and Wasalt with professional photography and optimized descriptions", ar: "الإدراج على بيوت ووصلت مع تصوير احترافي وأوصاف محسّنة" },
  { en: "Targeted paid ad campaigns on TikTok and Meta (Instagram & Facebook)", ar: "حملات إعلانية مدفوعة على تيك توك وميتا (انستغرام وفيسبوك)" },
  { en: "WhatsApp follow-up system for all incoming leads", ar: "نظام متابعة واتساب لجميع العملاء المحتملين" }
];

export const formulasData: FormulaSection[] = [
  {
    section: { en: "Revenue", ar: "الإيرادات" },
    items: [
      {
        name: { en: "Average Monthly Revenue", ar: "متوسط الإيراد الشهري" },
        formula: { en: "Sum of monthly revenues ÷ 12.5 contract months", ar: "مجموع الإيرادات الشهرية ÷ 12.5 شهراً تعاقدياً" },
        example: { en: "SAR 1,752,516 ÷ 12.5 = SAR 140,201/mo", ar: "1,752,516 ريال ÷ 12.5 = 140,201 ريال/شهر" }
      },
      {
        name: { en: "Mathwa Share (7%)", ar: "حصة مثوى (7%)" },
        formula: { en: "Net Revenue × 7%", ar: "صافي الإيرادات × 7%" },
        example: { en: "SAR 1,686,197 × 7% = SAR 118,034", ar: "1,686,197 ريال × 7% = 118,034 ريال" }
      },
      {
        name: { en: "Net Revenue", ar: "صافي الإيرادات" },
        formula: { en: "Gross Revenue - Costs deducted from revenue (Electricity, Water, & Internet)", ar: "إجمالي الإيرادات - التكاليف المخصومة من الإيرادات (الكهرباء والمياه والإنترنت)" },
        example: { en: "SAR 1,752,516 - SAR 66,319 = SAR 1,686,197", ar: "1,752,516 ريال - 66,319 ريال = 1,686,197 ريال" }
      },
      {
        name: { en: "Revenue Progress %", ar: "نسبة تقدم الإيرادات" },
        formula: { en: "Actual Collected ÷ Total Forecast × 100", ar: "المحصّل فعلياً ÷ إجمالي التوقعات × 100" },
        example: { en: "SAR 1,752,516 ÷ SAR 1,752,516 × 100 = 100% (Completed)", ar: "1,752,516 ÷ 1,752,516 × 100 = 100% (مكتمل)" }
      },
      {
        name: { en: "Achievement Rate (vs Full Occupancy)", ar: "نسبة التحقيق (مقارنة بالإشغال الكامل)" },
        formula: { en: "Actual Collected ÷ Full Occupancy Book Value × 100", ar: "المحصّل فعلياً ÷ قيمة الإشغال الكامل × 100" },
        example: { en: "SAR 1,752,516 ÷ SAR 2,447,487 × 100 = 71.6%", ar: "1,752,516 ÷ 2,447,487 × 100 = 71.6%" }
      }
    ]
  },
  {
    section: { en: "Costs & ROI", ar: "التكاليف والعائد" },
    items: [
      {
        name: { en: "Total Mathwaa Investment", ar: "إجمالي استثمار مثوى" },
        formula: { en: "Direct Costs + Indirect Costs", ar: "التكاليف المباشرة + التكاليف غير المباشرة" },
        example: { en: "SAR 117,600 + SAR 150,000 = SAR 267,600", ar: "117,600 + 150,000 = 267,600 ريال" }
      },
      {
        name: { en: "Revenue per SAR Spent", ar: "الإيراد لكل ريال أُنفق" },
        formula: { en: "Gross Revenue ÷ Total Mathwaa Investment", ar: "إجمالي الإيرادات ÷ إجمالي استثمار مثوى" },
        example: { en: "SAR 1,744,701 ÷ SAR 267,600 = 6.5x", ar: "1,744,701 ÷ 267,600 = 6.5 ضعف" }
      },
      {
        name: { en: "Direct Costs %", ar: "نسبة التكاليف المباشرة" },
        formula: { en: "Direct Costs ÷ Total Investment × 100", ar: "التكاليف المباشرة ÷ إجمالي الاستثمار × 100" },
        example: { en: "SAR 117,600 ÷ SAR 267,600 × 100 = 44%", ar: "117,600 ÷ 267,600 × 100 = 44%" }
      }
    ]
  },
  {
    section: { en: "Occupancy", ar: "الإشغال" },
    items: [
      {
        name: { en: "Monthly Occupancy %", ar: "نسبة الإشغال الشهرية" },
        formula: { en: "Occupied Units ÷ Total Units × 100", ar: "الوحدات المشغولة ÷ إجمالي الوحدات × 100" },
        example: { en: "17 occupied ÷ 20 total × 100 = 85%", ar: "17 مشغولة ÷ 20 كلي × 100 = 85%" }
      },
      {
        name: { en: "Average Occupancy (Jun 25 - Jun 26)", ar: "متوسط الإشغال (يونيو 25 - يونيو 26)" },
        formula: { en: "Sum of monthly occupancy % ÷ 12.5 months", ar: "مجموع نسب الإشغال الشهرية ÷ 12.5 شهراً" },
        example: { en: "996.2% ÷ 12.5 = 79.7% average", ar: "996.2% ÷ 12.5 = متوسط 79.7%" }
      }
    ]
  }
];

export const tiktokVideos = [
  { id: "7558385914964151570", title: { en: "TikTok Ad Campaign 1", ar: "حملة تيك توك الإعلانية 1" } },
  { id: "7558384482475166983", title: { en: "TikTok Ad Campaign 2", ar: "حملة تيك توك الإعلانية 2" } },
  { id: "7558383550630808839", title: { en: "TikTok Ad Campaign 3", ar: "حملة تيك توك الإعلانية 3" } },
  { id: "7558380776576847122", title: { en: "TikTok Ad Campaign 4", ar: "حملة تيك توك الإعلانية 4" } }
];

export const forecastData = {
  revenue: 965000,
  utilityCost: 33160,
  netRevenue: 931840,
  ownerSharePct: 80,
  ownerShare: 745472,
  mathwaSharePct: 20,
  mathwaShare: 186368,
  directExpenses: [
    { name: { en: "Payroll & Related Exp-One Houseman", ar: "الرواتب والأجور - موظف نظافة" }, amount: 19800 },
    { name: { en: "Property & Guest Supplies", ar: "مستلزمات العقار والضيوف" }, amount: 3000 },
    { name: { en: "Maintenance", ar: "أعمال الصيانة" }, amount: 9000 },
    { name: { en: "Laundry", ar: "المغسلة" }, amount: 6000 },
    { name: { en: "Supervisor & Operation Support", ar: "مشرف العمليات والدعم التشغيلي" }, amount: 9000 },
    { name: { en: "Car Rent & Fuel", ar: "إيجار السيارة والوقود" }, amount: 12000 }
  ],
  indirectExpenses: [
    { name: { en: "Marketing Expenses", ar: "مصاريف التسويق" }, amount: 12000 },
    { name: { en: "Reservation System", ar: "نظام إدارة الحجوزات" }, amount: 3000 },
    { name: { en: "Management Fee (Admin, Finance, HR, Sales, CS)", ar: "رسوم الإدارة (المالية، الموارد البشرية، المبيعات، خدمة العملاء)" }, amount: 60000 }
  ],
  totalExpenses: 133800,
  costPercentageOfNet: 14,
  netProfit: 52568,
  collectionForecast: 1000000
};

export const unitAveragePrices: UnitAveragePrice[] = [
  { id: "43-105", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 11000, avgPrice2026: 10750 },
  { id: "43-106", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 6564, avgPrice2026: 6557 },
  { id: "43-107", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 9800, avgPrice2026: 9556 },
  { id: "43-108", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 11233, avgPrice2026: 9892 },
  { id: "43-109", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 6570, avgPrice2026: 6570 },
  { id: "43-110", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 9550, avgPrice2026: 9550 },
  { id: "43-001", type: { en: "2BR", ar: "شقة غرفتين وصالة" }, avgPrice2025: 9000, avgPrice2026: 9000 },
  { id: "43-002", type: { en: "2BR", ar: "شقة غرفتين وصالة" }, avgPrice2025: 15250, avgPrice2026: 12500 },
  { id: "43-003", type: { en: "2BR", ar: "شقة غرفتين وصالة" }, avgPrice2025: 11223, avgPrice2026: 11000 },
  { id: "43-004", type: { en: "2BR", ar: "شقة غرفتين وصالة" }, avgPrice2025: 10719, avgPrice2026: 9750 },
  { id: "43-211", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 5457, avgPrice2026: 9000 },
  { id: "43-212", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 6380, avgPrice2026: 6000 },
  { id: "43-213", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 10752, avgPrice2026: 9556 },
  { id: "43-214", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 9865, avgPrice2026: 9865 },
  { id: "43-215", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 7150, avgPrice2026: 7000 },
  { id: "43-216", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 10620, avgPrice2026: 10620 },
  { id: "43-317", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 6059, avgPrice2026: 5500 },
  { id: "43-318", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 8500, avgPrice2026: 8500 },
  { id: "43-319", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 9000, avgPrice2026: 7898 },
  { id: "43-320", type: { en: "Suite - 1BR", ar: "جناح - غرفة وصالة" }, avgPrice2025: 8500, avgPrice2026: 8500 }
];
