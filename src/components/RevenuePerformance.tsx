import { 
  ChartColumn 
} from "lucide-react";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ReferenceLine 
} from "recharts";
import { 
  Ou, 
  _M, 
  Ha, 
  yM, 
  xM, 
  bM, 
  Cfe, 
  Ji, 
  Rb, 
  wM, 
  SM 
} from "../data";

interface RevenuePerformanceProps {
  isArabic: boolean;
}

export function RevenuePerformance({ isArabic }: RevenuePerformanceProps) {
  const lang = isArabic ? "ar" : "en";
  const avgMonthlyRev = Math.round(Ou.reduce((sum, item) => sum + item.revenue, 0) / Ou.length);
  const bestMonth = Ou.reduce((max, item) => item.revenue > max.revenue ? item : max, Ou[0]);
  const activeTier = _M.find((tier) => Ji >= tier.min && (tier.max === null || Ji <= tier.max));

  return (
    <div id="revenue-perf-card" className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-2xl">
      <div className="p-4 sm:p-10">
        {/* Card Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
            <ChartColumn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight"
            style={{
              borderInlineStart: "4px solid #C89565",
              paddingInlineStart: "14px",
            }}
          >
            {isArabic ? "أداء الإيرادات" : "Revenue Performance"}
          </h2>
        </div>

        {/* Content Body */}
        <div className="ms-0 sm:ms-[64px] space-y-6">
          {/* Top Indicators */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 sm:p-5 bg-emerald-50 rounded-2xl border border-emerald-100 text-center col-span-2 shadow-sm">
              <p className="text-[10px] font-semibold text-emerald-700 mb-1 uppercase tracking-wide">
                {isArabic ? "إجمالي الإيرادات المحصّلة (كامل فترة العقد - 12.5 شهراً)" : "Gross Revenue Collected (Full Contract - 12.5 Months)"}
              </p>
              <p className="text-2xl sm:text-3xl font-black text-emerald-700">
                SAR {Ha.toLocaleString()}
              </p>
              <p className="text-[10px] text-emerald-600 mt-1">
                {isArabic 
                  ? `صافي الإيراد ${xM.toLocaleString()} ريال (بعد خصم ${yM.toLocaleString()} ريال مصاريف تشغيلية وقنوات)` 
                  : `Net Revenue SAR ${xM.toLocaleString()} after SAR ${yM.toLocaleString()} OTA/channel deductions`
                }
              </p>
            </div>

            <div className="p-3 sm:p-5 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC] text-center shadow-sm">
              <p className="text-[10px] font-semibold text-[#8B6F47] mb-1 uppercase tracking-wide">
                {isArabic ? "حصة مثوى المستلمة فعلياً (5.5%)" : "Mathwa Share Actually Received (5.5%)"}
              </p>
              <p className="text-lg sm:text-xl font-black text-[#C89565]">
                SAR {bM.toLocaleString()}
              </p>
              <p className="text-[10px] text-[#B0A08A]">
                {isArabic ? "على صافي الإيراد المحقق" : "on net achieved revenue"}
              </p>
            </div>

            <div className="p-3 sm:p-5 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC] text-center shadow-sm">
              <p className="text-[10px] font-semibold text-[#8B6F47] mb-1 uppercase tracking-wide">
                {isArabic ? "أفضل شهر" : "Best Month"}
              </p>
              <p className="text-lg sm:text-xl font-black text-[#C89565]">
                SAR {bestMonth.revenue.toLocaleString()}
              </p>
              <p className="text-[10px] text-[#B0A08A]">
                {bestMonth.month[lang]}
              </p>
            </div>
          </div>

          {/* Revenue Performance Table */}
          <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
            <div className="bg-gradient-to-r from-[#B8865F] to-[#C89565] text-white text-xs font-bold grid grid-cols-3">
              <div className="p-3 col-span-1">{isArabic ? "البيان" : "Description"}</div>
              <div className="p-3 text-center border-s border-white/20">{isArabic ? "المبلغ (ريال)" : "Value (SAR)"}</div>
              <div className="p-3 text-center border-s border-white/20">{isArabic ? "النسبة من صافي الإيراد" : "Percentage of Net"}</div>
            </div>

            {[
              {
                label: { en: "Gross Revenue Collected", ar: "إجمالي الإيرادات المحصلة" },
                value: Ha,
                pct: "—",
                bold: true,
                highlight: false,
                color: "text-[#1d1d1f]"
              },
              {
                label: { en: "OTA / Channel Deductions", ar: "خصومات قنوات الحجز والتشغيل" },
                value: -yM,
                pct: "—",
                bold: false,
                highlight: false,
                color: "text-red-500"
              },
              {
                label: { en: "Net Revenue", ar: "صافي الإيرادات" },
                value: xM,
                pct: "100%",
                bold: true,
                highlight: false,
                color: "text-[#1d1d1f]"
              },
              {
                label: { en: "Mathwa Share Paid (5.5%)", ar: "حصة مثوى المستلمة (5.5%)" },
                value: bM,
                pct: "5.5%",
                bold: true,
                highlight: true,
                color: "text-[#C89565]"
              },
              {
                label: { en: "Mathwa Actual Expenses", ar: "إجمالي المصاريف المباشرة وغير المباشرة" },
                value: 267600,
                pct: "16%",
                bold: true,
                highlight: false,
                color: "text-red-600"
              },
              {
                label: { en: "Mathwa Net Deficit / Loss", ar: "صافي خسارة تشغيل مثوى" },
                value: -175289,
                pct: "-10.4%",
                bold: true,
                highlight: true,
                color: "text-red-600"
              }
            ].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`grid grid-cols-3 text-xs border-t border-[#F5EFE7] ${
                  row.highlight ? "bg-amber-50/70" : rowIdx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"
                }`}
              >
                <div className={`p-3 ${row.bold ? "font-bold text-[#1d1d1f]" : "text-[#3d3d3d]"}`}>
                  {row.label[lang]}
                </div>
                <div
                  className={`p-3 text-center border-s border-[#F5EFE7] font-mono ${
                    row.bold ? "font-bold" : "text-[#3d3d3d]"
                  } ${row.color}`}
                >
                  {row.value < 0 ? "-" : ""}SAR {Math.abs(row.value).toLocaleString()}
                </div>
                <div
                  className={`p-3 text-center border-s border-[#F5EFE7] font-mono font-semibold ${
                    row.highlight ? "text-amber-700 font-bold" : "text-[#5d5d5d]"
                  }`}
                >
                  {row.pct}
                </div>
              </div>
            ))}
          </div>

          {/* Monthly Revenue Chart */}
          <div>
            <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
              {isArabic ? "الإيراد الشهري (ريال)" : "Monthly Revenue (SAR)"}
            </p>
            <ResponsiveContainer width="100%" height={190}>
              <BarChart
                data={Ou.map((item) => ({
                  name: item.month[lang],
                  value: item.revenue,
                }))}
                margin={{ top: 4, right: 4, left: -4, bottom: 4 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#EDE5DC" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 9, fill: "#8B6F47", fontFamily: isArabic ? "Cairo" : "Poppins" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 9, fill: "#B0A08A" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(val) => `${(val / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(val) => [`SAR ${Math.round(Number(val)).toLocaleString()}`, ""]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #EDE5DC",
                    fontFamily: isArabic ? "Cairo" : "Poppins",
                  }}
                />
                {/* Reference line for monthly average */}
                <ReferenceLine
                  y={avgMonthlyRev}
                  stroke="#B8865F"
                  strokeDasharray="4 4"
                  strokeOpacity={0.6}
                />
                <Bar dataKey="value" radius={[5, 5, 0, 0]}>
                  {Ou.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === Ou.length - 1 ? "#3B82F6" : "#C89565"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-[10px] text-[#B0A08A] italic mt-1">
              {isArabic ? "* يونيو 2025: شهر جزئي (من تاريخ بدء العقد في 16 يونيو)" : "* Jun 2025: partial month (from contract start on June 16)"}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="p-4 sm:p-5 bg-gradient-to-br from-[#F5EFE7] to-[#EDE5DC] rounded-2xl border border-[#C89565]/30">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wide">
                  {isArabic ? "حالة تنفيذ فترة العقد" : "Contract Execution Status"}
                </p>
                <p className="text-[10px] text-[#B0A08A] mt-0.5">
                  {isArabic
                    ? "تم الانتهاء من كامل فترة العقد (12.5 شهراً بنجاح)"
                    : "Full contract period (12.5 months) completed successfully"}
                </p>
              </div>
              <span className="text-sm font-black text-emerald-600">{isArabic ? "مكتمل 100%" : "100% Completed"}</span>
            </div>
            <div className="w-full h-4 bg-white rounded-full overflow-hidden border border-[#EDE5DC]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex justify-between text-[10px] mt-2">
              <span className="text-[#8B6F47] font-semibold">
                {isArabic ? "تاريخ البدء: 16 يونيو 2025" : "Start Date: Jun 16, 2025"}
              </span>
              <span className="text-emerald-700 font-semibold">
                {isArabic ? "تاريخ الانتهاء: 30 يونيو 2026" : "End Date: Jun 30, 2026"}
              </span>
            </div>
          </div>

          {/* Tiered Fee Schedule */}
          <div>
            <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
              {isArabic ? "جدول الرسوم المتدرجة (الملحق 1)" : "Tiered Fee Schedule Annex 1"}
            </p>
            <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden text-xs">
              <div className="grid grid-cols-3 bg-gradient-to-r from-[#B8865F] to-[#C89565] text-white font-bold">
                <div className="p-2.5">{isArabic ? "أكثر من" : "More than"}</div>
                <div className="p-2.5 border-s border-white/20">{isArabic ? "أقل من" : "Less than"}</div>
                <div className="p-2.5 border-s border-white/20 text-center">{isArabic ? "نسبة مثوى" : "Mathwa %"}</div>
              </div>

              {_M.map((tier, index) => {
                const isCurrentTier = activeTier && activeTier.fee === tier.fee;
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-3 border-t ${
                      isCurrentTier
                        ? "bg-amber-50 border-amber-200 font-bold"
                        : index % 2 === 0
                        ? "bg-white border-[#F5EFE7]"
                        : "bg-[#FAF8F5] border-[#F5EFE7]"
                    }`}
                  >
                    <div className={`p-2.5 ${isCurrentTier ? "text-amber-700" : "text-[#3d3d3d]"}`}>
                      {tier.min === 0 ? "—" : `SAR ${tier.min.toLocaleString()}`}
                    </div>
                    <div className={`p-2.5 border-s border-[#F5EFE7] ${isCurrentTier ? "text-amber-700" : "text-[#3d3d3d]"}`}>
                      {tier.max ? `SAR ${tier.max.toLocaleString()}` : "—"}
                    </div>
                    <div
                      className={`p-2.5 border-s border-[#F5EFE7] text-center font-black ${
                        isCurrentTier ? "text-amber-600 text-sm" : "text-[#C89565]"
                      }`}
                    >
                      {tier.fee}%
                      {isCurrentTier ? (isArabic ? " (نسبتكم الحالية)" : " (Current Rate)") : ""}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] text-[#B0A08A] italic mt-2">
              {isArabic
                ? `بناءً على إجمالي الإيرادات المحققة ${Ha.toLocaleString()} ريال، تقع الرسوم نظرياً في شريحة 7% (1,700,001 إلى 1,800,000 ريال) طبقاً للملحق 1، ولكن تم احتسابها في العقد الفعلي بنسبة 5.5% على صافي الإيرادات (ما يعادل 92,311 ريال)، مما أدى إلى عجز تشغيلي كبير.`
                : `Based on the final achieved Gross Revenue of SAR ${Ha.toLocaleString()}, the fee theoretically falls in the 7% bracket (SAR 1,700,001 to 1,800,000) under Annex 1. However, in practice, a flat 5.5% was applied to Net Revenue (yielding SAR 92,311), causing a substantial operational deficit.`}
            </p>
          </div>

          {/* Full Occupancy Book Value */}
          <div className="p-4 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC]">
            <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wide mb-2">
              {isArabic ? "القيمة الكاملة عند الإشغال التام" : "Full Occupancy Book Value"}
            </p>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <p className="text-[#3d3d3d]">
                {isArabic ? "الإيراد عند 100% إشغال (12.5 شهراً)" : "Revenue at 100% occupancy (12.5 months)"}
              </p>
              <p className="font-black text-[#C89565]">
                SAR {SM.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-between mt-1 text-xs sm:text-sm">
              <p className="text-[#3d3d3d]">{isArabic ? "المحقق فعلياً" : "Actually achieved"}</p>
              <p className="font-black text-emerald-600">
                SAR {Ha.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center justify-between mt-1 pt-2 border-t border-[#EDE5DC]">
              <p className="text-xs text-[#8B6F47] font-semibold">{isArabic ? "نسبة التحقيق" : "Achievement Rate"}</p>
              <p className="text-xs font-black text-[#C89565]">
                {Math.round((Ha / SM) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
