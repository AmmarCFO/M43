import { useState } from "react";
import { 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  DollarSign, 
  Receipt, 
  Building,
  Briefcase,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { forecastData } from "../data";

interface SixMonthForecastProps {
  isArabic: boolean;
}

export function SixMonthForecast({ isArabic }: SixMonthForecastProps) {
  const [showDetails, setShowDetails] = useState(false);
  const lang = isArabic ? "ar" : "en";

  const {
    revenue,
    utilityCost,
    netRevenue,
    ownerSharePct,
    ownerShare,
    mathwaSharePct,
    mathwaShare,
    directExpenses,
    indirectExpenses,
    totalExpenses,
    costPercentageOfNet,
    netProfit,
    collectionForecast
  } = forecastData;

  return (
    <div id="six-month-forecast-card" className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-2xl">
      <div className="p-4 sm:p-10">
        
        {/* Card Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight"
            style={{
              borderInlineStart: "4px solid #C89565",
              paddingInlineStart: "14px",
            }}
          >
            {isArabic ? "توقعات التشغيل لـ 6 أشهر القادمة" : "6-Month Operational Forecast"}
          </h2>
        </div>

        <div className="ms-0 sm:ms-[64px] space-y-6">
          <p className="text-[#3d3d3d] leading-relaxed text-sm">
            {isArabic
              ? "تحليل التوقعات المالية والتشغيلية للفترة القادمة (من 01-07-2026 إلى 31-12-2026). يُظهر هذا النموذج الجدوى المالية للتشغيل عند تطبيق رسوم الإدارة المقترحة بنسبة 20% لتحقيق الاستقرار والاستمرارية:"
              : "Financial and operational forecast analysis for the upcoming period (July 1, 2026 to December 31, 2026). This model demonstrates the viability of operations under the proposed 20% management fee to ensure stability and continuity:"}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Forecast Revenue */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EDE5DC] shadow-sm">
              <span className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wide block mb-1">
                {isArabic ? "إجمالي الإيرادات المتوقعة" : "Projected Gross Revenue"}
              </span>
              <p className="text-xl font-extrabold text-[#1d1d1f] font-mono">
                SAR {revenue.toLocaleString()}
              </p>
              <span className="text-[9px] text-[#B0A08A] mt-1 block">
                {isArabic ? "01-07 إلى 31-12" : "Jul 1 to Dec 31"}
              </span>
            </div>

            {/* Collection Forecast */}
            <div className="p-4 bg-amber-50/40 rounded-xl border border-amber-200/50 shadow-sm">
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wide block mb-1">
                {isArabic ? "توقعات التحصيل" : "Collection Forecast"}
              </span>
              <p className="text-xl font-extrabold text-amber-700 font-mono">
                SAR {collectionForecast.toLocaleString()}
              </p>
              <span className="text-[9px] text-amber-600/70 mt-1 block">
                {isArabic ? "الـ 6 أشهر القادمة" : "Next 6 Months"}
              </span>
            </div>

            {/* Net Revenue */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EDE5DC] shadow-sm">
              <span className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wide block mb-1">
                {isArabic ? "صافي الإيرادات" : "Net Revenue"}
              </span>
              <p className="text-xl font-extrabold text-[#1d1d1f] font-mono">
                SAR {netRevenue.toLocaleString()}
              </p>
              <span className="text-[9px] text-[#B0A08A] mt-1 block">
                {isArabic ? "بعد خصم الفواتير" : "After Utility Cost"}
              </span>
            </div>

            {/* Net Profit */}
            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 shadow-sm">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide block mb-1">
                {isArabic ? "صافي أرباح مثوى" : "Mathwa Net Profit"}
              </span>
              <p className="text-xl font-extrabold text-emerald-700 font-mono">
                SAR {netProfit.toLocaleString()}
              </p>
              <span className="text-[9px] text-emerald-600/80 mt-1 block">
                {isArabic ? "ربح مستدام للمشغل" : "Sustainable positive run"}
              </span>
            </div>
          </div>

          {/* Core Shares Distribution Table */}
          <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
            <div className="bg-[#FAF8F5] p-3 border-b border-[#EDE5DC]">
              <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider">
                {isArabic ? "جدول توزيع الإيرادات المتوقعة" : "Projected Income Distribution"}
              </p>
            </div>
            
            <div className="divide-y divide-[#F5EFE7] text-xs sm:text-sm">
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-[#3d3d3d] font-semibold">{isArabic ? "إجمالي الإيرادات" : "Gross Revenue"}</span>
                <span className="font-mono font-bold text-[#1d1d1f]">SAR {revenue.toLocaleString()}</span>
              </div>
              
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-[#3d3d3d] font-semibold">{isArabic ? "التكاليف المخصومة من الإيرادات (الخدمات والمرافق)" : "Costs Deducted (Utilities)"}</span>
                <span className="font-mono font-medium text-red-600">- SAR {utilityCost.toLocaleString()}</span>
              </div>

              <div className="p-3.5 flex justify-between bg-zinc-50 font-bold">
                <span className="text-[#1d1d1f]">{isArabic ? "صافي الإيرادات" : "Net Revenue"}</span>
                <span className="font-mono text-[#1d1d1f]">SAR {netRevenue.toLocaleString()}</span>
              </div>

              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-[#3d3d3d] font-semibold">
                  {isArabic ? `حصة المالك (${ownerSharePct}%)` : `Owner Share (${ownerSharePct}%)`}
                </span>
                <span className="font-mono font-bold text-emerald-700">SAR {ownerShare.toLocaleString()}</span>
              </div>

              <div className="p-3.5 flex justify-between bg-[#FAF8F5]/50">
                <span className="text-[#3d3d3d] font-bold">
                  {isArabic ? `حصة مثوى المتوقعة (${mathwaSharePct}%)` : `Mathwa Share Projected (${mathwaSharePct}%)`}
                </span>
                <span className="font-mono font-black text-[#C89565]">SAR {mathwaShare.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Action to show / hide expense breakdown */}
          <div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-2 text-xs font-bold text-[#8B6F47] hover:text-[#C89565] transition-colors cursor-pointer bg-[#FAF8F5] hover:bg-[#F5EFE7] px-4 py-2.5 rounded-full border border-[#EDE5DC] shadow-sm"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  {isArabic ? "إخفاء تفاصيل المصاريف المتوقعة" : "Hide Forecasted Expenses Breakdown"}
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  {isArabic ? "عرض تفاصيل المصاريف المتوقعة" : "Show Forecasted Expenses Breakdown"}
                </>
              )}
            </button>
          </div>

          {/* Collapsible Expense Breakdown section */}
          {showDetails && (
            <div className="space-y-4 pt-1 animate-[fadeUp_0.3s_ease-out]">
              
              {/* Consolidated Operating Costs */}
              <div className="rounded-xl border border-[#EDE5DC] overflow-hidden bg-white">
                <div className="bg-[#FAF8F5] p-3.5 border-b border-[#EDE5DC] flex justify-between items-center">
                  <span className="text-xs font-bold text-[#8B6F47] flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {isArabic ? "تفاصيل المصاريف التشغيلية المتوقعة" : "Projected Operating Expenses Breakdown"}
                  </span>
                  <span className="text-xs font-bold font-mono text-[#8B6F47]">
                    SAR {totalExpenses.toLocaleString()}
                  </span>
                </div>
                <div className="p-4 space-y-2.5 text-xs">
                  {[...directExpenses, ...indirectExpenses].map((exp, idx) => (
                    <div key={idx} className="flex justify-between py-1.5 border-b border-zinc-50 last:border-0 hover:bg-[#FAF8F5]/50 px-1 transition-colors">
                      <span className="text-gray-600">{exp.name[lang]}</span>
                      <span className="font-mono font-bold text-gray-800">SAR {exp.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Expenses Summary Pill */}
              <div className="p-4 rounded-xl border border-[#C89565]/15 bg-gradient-to-r from-[#FDFBF8] to-[#F5EFE7] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wide">
                    {isArabic ? "إجمالي التكاليف والمصاريف المتوقعة (6 أشهر)" : "Total Forecasted Costs (6 Months)"}
                  </p>
                  <p className="text-[10px] text-[#B0A08A] mt-0.5">
                    {isArabic 
                      ? `تمثل هذه التكاليف ${costPercentageOfNet}% من صافي الإيرادات المتوقعة`
                      : `This representing ${costPercentageOfNet}% of projected net revenue`}
                  </p>
                </div>
                <div className="text-end">
                  <p className="text-lg font-black text-[#C89565] font-mono">
                    SAR {totalExpenses.toLocaleString()}
                  </p>
                  <p className="text-[9px] font-bold text-[#B0A08A] uppercase">
                    {isArabic ? "مباشرة + غير مباشرة" : "Direct + Indirect"}
                  </p>
                </div>
              </div>

              {/* Net Profitability Argument */}
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/30">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-800">
                      {isArabic ? "تحقيق التوازن المالي والاستدامة" : "Achieving Financial Health & Viability"}
                    </h4>
                    <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                      {isArabic
                        ? `عند تطبيق رسوم إدارة تبلغ 20%، تحقق مثوى عائداً يبلغ ${mathwaShare.toLocaleString()} ريال، وهو ما يغطي كامل التكاليف البالغة ${totalExpenses.toLocaleString()} ريال بالكامل ويترك ربحاً صافياً تشغيلياً قدره ${netProfit.toLocaleString()} ريال. يضمن هذا التحوّل من الخسارة السابقة (-149,566 ريال) إلى الربحية استدامة العمل وتقديم أفضل تجربة إدارة وجودة تشغيلية للعقار والمالك.`
                        : `By applying a 20% management fee, Mathwaa's projected share is SAR ${mathwaShare.toLocaleString()}, which completely covers the SAR ${totalExpenses.toLocaleString()} operating costs and yields a healthy net profit of SAR ${netProfit.toLocaleString()}. This transition from loss (-SAR 149,566 in Year 1) to sustainability guarantees robust operational support, active marketing, and long-term asset value enhancement.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
