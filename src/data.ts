import { 
  BuildingFloorLayout, 
  UnitOccupancyDetail, 
  MonthlyOccupancyPct, 
  MonthlyRevenue, 
  CostItem, 
  InsightItem, 
  FormulaSection 
} from "./types";

export const Db: BuildingFloorLayout[] = [
  {
    level: { en: "Floor 3", ar: "الدور الثالث" },
    bg: "bg-[#EDE5DC]",
    units: [
      { id: "43-317", type: "1BR", status: "vacant" },
      { id: "43-318", type: "1BR", status: "occupied" },
      { id: "43-319", type: "1BR", status: "occupied" },
      { id: "43-320", type: "1BR", status: "occupied" }
    ]
  },
  {
    level: { en: "Floor 2", ar: "الدور الثاني" },
    bg: "bg-[#F5EFE7]",
    units: [
      { id: "43-211", type: "1BR", status: "occupied" },
      { id: "43-212", type: "1BR", status: "vacant" },
      { id: "43-213", type: "1BR", status: "occupied" },
      { id: "43-214", type: "1BR", status: "occupied" },
      { id: "43-215", type: "1BR", status: "occupied" },
      { id: "43-216", type: "1BR", status: "occupied" }
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
  { id: "43-211", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.692 },
  { id: "43-212", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 0, aprStatus: "vacant", avgOcc: 0.905 },
  { id: "43-213", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.833 },
  { id: "43-214", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 1 },
  { id: "43-215", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.849 },
  { id: "43-216", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 2", ar: "الدور الثاني" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.919 },
  { id: "43-317", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 0, aprStatus: "vacant", avgOcc: 0.92 },
  { id: "43-318", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.932 },
  { id: "43-319", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 0.883 },
  { id: "43-320", type: { en: "1-Bedroom", ar: "غرفة واحدة" }, floor: { en: "Floor 3", ar: "الدور الثالث" }, aprOcc: 1, aprStatus: "occupied", avgOcc: 1 }
];

export const EM = 0.879; // Portfolio Average Occupancy Rate

export const jM: MonthlyOccupancyPct[] = [
  { month: { en: "Jun '25", ar: "يونيو 25" }, pct: 0.1295 },
  { month: { en: "Jul '25", ar: "يوليو 25" }, pct: 0.492 },
  { month: { en: "Aug '25", ar: "أغسطس 25" }, pct: 0.7015 },
  { month: { en: "Sep '25", ar: "سبتمبر 25" }, pct: 0.693 },
  { month: { en: "Oct '25", ar: "أكتوبر 25" }, pct: 0.7015 },
  { month: { en: "Nov '25", ar: "نوفمبر 25" }, pct: 0.907 },
  { month: { en: "Dec '25", ar: "ديسمبر 25" }, pct: 0.987 },
  { month: { en: "Jan '26", ar: "يناير 26" }, pct: 0.897 },
  { month: { en: "Feb '26", ar: "فبراير 26" }, pct: 0.8395 },
  { month: { en: "Mar '26", ar: "مارس 26" }, pct: 0.864 },
  { month: { en: "Apr '26", ar: "أبريل 26" }, pct: 0.95 },
  { month: { en: "May '26", ar: "مايو 26" }, pct: 0.95 },
  { month: { en: "Jun '26", ar: "يونيو 26" }, pct: 0.85 }
];

export const Ou: MonthlyRevenue[] = [
  { month: { en: "Jun '25", ar: "يونيو 25" }, revenue: 17761 },
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

export const Ha = 1744701; // Actual Gross Collected Revenue (12.5 months / Full Contract)
export const yM = 66319;   // Actual Deductions (OTAs & channel fees)
export const xM = 1678382; // Net Collected Revenue = Ha - yM
export const bM = 92311;   // Mathwaa share actually received (5.5% on net revenue)

export const Cfe = 0;       // No remaining forecast
export const Ji = 1744701;  // Total Gross Revenue = Ha
export const Rb = 92311;    // Mathwaa share actually received
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
export const c$ = 1678382; // Actual Net Revenue for Renewal comparison
export const tS = 92311;   // Mathwaa actual current earnings received (5.5% of net)
export const gM = 175289;  // Net Loss under 5.5% actuals = 175,289
export const vM = Math.round(c$ * 0.15); // Mathwaa retroactive earnings at 15% = 251,757
export const f$ = 1800000; // Estimated Year 2 Revenue
export const Ud = Math.round(f$ * 0.2); // Mathwaa earnings at 20% on Year 2 = 360,000

export const insightsData: InsightItem[] = [
  {
    category: { en: "Occupancy", ar: "الإشغال" },
    color: "bg-emerald-50 border-emerald-100",
    labelColor: "text-emerald-700",
    items: [
      { en: "Average occupancy of 80% over the full 12.5-month contract, maintaining 85% in June 2026.", ar: "بلغ متوسط الإشغال 80% طوال فترة العقد الكاملة البالغة 12.5 شهراً، مع الحفاظ على نسبة 85% في يونيو 2026." },
      { en: "Peak occupancy of 98.7% was achieved in December 2025.", ar: "تم تحقيق ذروة الإشغال 98.7% في ديسمبر 2025." }
    ]
  },
  {
    category: { en: "Revenue", ar: "الإيرادات" },
    color: "bg-blue-50 border-blue-100",
    labelColor: "text-blue-700",
    items: [
      { en: "SAR 1,744,701 collected over the full contract period (June 16, 2025 to June 30, 2026).", ar: "تم تحصيل 1,744,701 ريال طوال فترة العقد الكاملة (16 يونيو 2025 إلى 30 يونيو 2026)." },
      { en: "Net revenue after deductions of SAR 66,319 stands at SAR 1,678,382.", ar: "بلغ صافي الإيراد بعد خصومات بلغت 66,319 ريال ما قيمته 1,678,382 ريال." }
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
  { en: "WhatsApp follow-up system for all incoming leads", ar: "نظام متابعة واتساب لجميع العملاء المحتملين" },
  { en: "B2B sales efforts - e.g. Unit 43-002 is occupied through a B2B corporate lead", ar: "جهود المبيعات B2B - مثال: الوحدة 43-002 مشغولة بموجب عقد مع عميل مؤسسي" }
];

export const formulasData: FormulaSection[] = [
  {
    section: { en: "Revenue", ar: "الإيرادات" },
    items: [
      {
        name: { en: "Average Monthly Revenue", ar: "متوسط الإيراد الشهري" },
        formula: { en: "Sum of monthly revenues ÷ 12.5 contract months", ar: "مجموع الإيرادات الشهرية ÷ 12.5 شهراً تعاقدياً" },
        example: { en: "SAR 1,744,701 ÷ 12.5 = SAR 139,576/mo", ar: "1,744,701 ريال ÷ 12.5 = 139,576 ريال/شهر" }
      },
      {
        name: { en: "Mathwa Share (5.5%)", ar: "حصة مثوى (5.5%)" },
        formula: { en: "Net Revenue × 5.5%", ar: "صافي الإيرادات × 5.5%" },
        example: { en: "SAR 1,678,382 × 5.5% = SAR 92,311", ar: "1,678,382 ريال × 5.5% = 92,311 ريال" }
      },
      {
        name: { en: "Net Revenue", ar: "صافي الإيرادات" },
        formula: { en: "Gross Revenue - OTA/Channel Deductions", ar: "إجمالي الإيرادات - خصومات قنوات الحجز (OTAs)" },
        example: { en: "SAR 1,744,701 - SAR 66,319 = SAR 1,678,382", ar: "1,744,701 ريال - 66,319 ريال = 1,678,382 ريال" }
      },
      {
        name: { en: "Revenue Progress %", ar: "نسبة تقدم الإيرادات" },
        formula: { en: "Actual Collected ÷ Total Forecast × 100", ar: "المحصّل فعلياً ÷ إجمالي التوقعات × 100" },
        example: { en: "SAR 1,744,701 ÷ SAR 1,744,701 × 100 = 100% (Completed)", ar: "1,744,701 ÷ 1,744,701 × 100 = 100% (مكتمل)" }
      },
      {
        name: { en: "Achievement Rate (vs Full Occupancy)", ar: "نسبة التحقيق (مقارنة بالإشغال الكامل)" },
        formula: { en: "Actual Collected ÷ Full Occupancy Book Value × 100", ar: "المحصّل فعلياً ÷ قيمة الإشغال الكامل × 100" },
        example: { en: "SAR 1,744,701 ÷ SAR 2,447,487 × 100 = 71.3%", ar: "1,744,701 ÷ 2,447,487 × 100 = 71.3%" }
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
