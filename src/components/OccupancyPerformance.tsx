import { useState } from "react";
import { 
  TrendingUp, 
  ChevronUp, 
  ChevronDown 
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
  PieChart, 
  Pie 
} from "recharts";
import { Mb, jM, EM } from "../data";

interface OccupancyPerformanceProps {
  isArabic: boolean;
}

// Circular progress indicator (donut chart)
interface OccupancyMicroCardProps {
  label: string;
  occupied: number;
  total: number;
  isArabic: boolean;
}

function OccupancyDonut({ label, occupied, total, isArabic }: OccupancyMicroCardProps) {
  const vacant = total - occupied;
  const pct = total > 0 ? Math.round((occupied / total) * 100) : 0;
  const data = [{ value: occupied }, { value: vacant }];

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-24 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={42}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill="#C89565" />
              <Cell fill="#EDE5DC" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-[#1d1d1f] leading-tight">
            {pct}%
          </span>
        </div>
      </div>
      <p className="text-xs font-bold text-[#1d1d1f] text-center">{label}</p>
      <p className="text-xs text-[#8B6F47] text-center">
        {isArabic ? `${occupied} من ${total}` : `${occupied} / ${total}`}
      </p>
    </div>
  );
}

export function OccupancyPerformance({ isArabic }: OccupancyPerformanceProps) {
  const lang = isArabic ? "ar" : "en";
  const [isOpen, setIsOpen] = useState(false);
  const occupiedCount = Mb.filter((u) => u.aprStatus === "occupied").length;
  const totalUnits = Mb.length;
  const contractAverage = jM.reduce((sum, item) => {
    // Jun '25 is Jun 16 to 30 (0.5 month), other months are full (1.0)
    const weight = item.month.en.startsWith("Jun '25") ? 0.5 : 1.0;
    return sum + (item.pct * weight);
  }, 0) / 12.5;

  return (
    <div id="occupancy-perf-card" className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-2xl">
      <div className="p-4 sm:p-10">
        {/* Card Header */}
        <div className="flex items-start gap-4 mb-7">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight"
            style={{
              borderInlineStart: "3px solid #C89565",
              paddingInlineStart: "14px",
            }}
          >
            {isArabic ? "أداء الإشغال" : "Occupancy Performance"}
          </h2>
        </div>

        {/* Content Body */}
        <div className="ms-0 sm:ms-[64px] space-y-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 sm:p-5 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl border border-emerald-100 text-center shadow-sm">
              <p className="text-[9px] sm:text-[10px] font-bold text-emerald-700 mb-1.5 uppercase tracking-wider">
                {isArabic ? "إشغال نهاية العقد" : "Contract-End Occupancy"}
              </p>
              <p className="text-2xl sm:text-3xl font-black text-emerald-700">
                {occupiedCount}
                <span className="text-sm font-bold ms-1">
                  ({Math.round((occupiedCount / totalUnits) * 100)}%)
                </span>
              </p>
              <p className="text-[9px] text-emerald-600 mt-1">
                {isArabic ? "يونيو 2026" : "June 2026"}
              </p>
            </div>

            <div className="p-3 sm:p-5 bg-gradient-to-br from-[#F5EFE7] to-[#EDE5DC]/60 rounded-2xl border border-[#EDE5DC] text-center shadow-sm">
              <p className="text-[9px] sm:text-[10px] font-bold text-[#8B6F47] mb-1.5 uppercase tracking-wider">
                {isArabic ? "متوسط العقد" : "Contract Average"}
              </p>
              <p className="text-2xl sm:text-3xl font-black text-[#C89565]">
                {Math.round(contractAverage * 100)}%
              </p>
              <p className="text-[9px] text-[#B0A08A] mt-1">
                {isArabic ? "طوال 12.5 شهراً" : "Over 12.5 months"}
              </p>
            </div>

            <div className="p-3 sm:p-5 bg-gradient-to-br from-[#F5EFE7] to-[#EDE5DC]/60 rounded-2xl border border-[#EDE5DC] text-center shadow-sm">
              <p className="text-[9px] sm:text-[10px] font-bold text-[#8B6F47] mb-1.5 uppercase tracking-wider">
                {isArabic ? "ذروة الإشغال" : "Peak"}
              </p>
              <p className="text-2xl sm:text-3xl font-black text-[#C89565]">
                96%
              </p>
              <p className="text-[9px] text-[#B0A08A] mt-1">
                {isArabic ? "نوفمبر 2025" : "Nov 2025"}
              </p>
            </div>
          </div>

          <div className="flex justify-around p-4 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC]">
            <OccupancyDonut
              label={isArabic ? "يونيو 2026" : "Jun 2026"}
              occupied={occupiedCount}
              total={totalUnits}
              isArabic={isArabic}
            />
            <OccupancyDonut
              label={isArabic ? "متوسط المحفظة" : "Portfolio Avg"}
              occupied={Math.round(EM * totalUnits)}
              total={totalUnits}
              isArabic={isArabic}
            />
            <OccupancyDonut
              label={isArabic ? "ذروة (نوفمبر 25)" : "Peak (Nov 25)"}
              occupied={Math.round(0.96 * totalUnits)}
              total={totalUnits}
              isArabic={isArabic}
            />
          </div>

          {/* Bar Chart */}
          <div>
            <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
              {isArabic ? "نسبة الإشغال الشهرية" : "Monthly Occupancy Rate"}
            </p>
            <ResponsiveContainer width="100%" height={170}>
              <BarChart
                data={jM.map((item) => ({
                  name: item.month[lang],
                  value: Math.round(item.pct * 100),
                  rawPct: item.pct
                }))}
                margin={{ top: 4, right: 4, left: -16, bottom: 4 }}
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
                  domain={[0, 100]}
                  tickFormatter={(val) => `${val}%`}
                />
                <Tooltip
                  formatter={(val) => [`${val}%`, ""]}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #EDE5DC",
                    fontFamily: isArabic ? "Cairo" : "Poppins",
                  }}
                />
                <Bar dataKey="value" radius={[5, 5, 0, 0]}>
                  {jM.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.pct >= 0.75
                          ? "#C89565"
                          : entry.pct >= 0.40
                          ? "#3B82F6"
                          : "#EF4444"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            
            <div className="flex items-center gap-4 mt-2 flex-wrap">
              {[{ color: "bg-[#C89565]", label: { en: "≥75%", ar: "≥75%" } },
                { color: "bg-blue-500", label: { en: "40-74%", ar: "40-74%" } },
                { color: "bg-red-400", label: { en: "<40%", ar: "<40%" } }].map((colorItem, colorIdx) => (
                <div key={colorIdx} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-sm ${colorItem.color}`} />
                  <span className="text-[10px] text-[#8B6F47]">{colorItem.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expandible unit list */}
          <div>
            <button
              id="toggle-unit-status-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between p-4 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC] text-start cursor-pointer hover:bg-[#EDE5DC]/40 transition-all"
            >
              <div>
                <p className="text-sm font-bold text-[#8B6F47]">
                  {isArabic ? "حالة الوحدات في يونيو 2026" : "Unit Status June 2026"}
                </p>
                <p className="text-xs text-[#B0A08A] mt-0.5">
                  {isArabic
                    ? `${occupiedCount} من ${totalUnits} وحدة مشغولة`
                    : `${occupiedCount} of ${totalUnits} units occupied`}
                </p>
              </div>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-[#8B6F47]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#8B6F47]" />
              )}
            </button>

            {isOpen && (
              <div 
                id="units-detail-grid"
                className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-1"
              >
                {Mb.map((unit, uIdx) => (
                  <div
                    key={uIdx}
                    id={`unit-detail-${unit.id}`}
                    className={`rounded-xl border p-3 flex items-center justify-between ${
                      unit.aprStatus === "occupied"
                        ? "bg-white border-emerald-100"
                        : "bg-red-50 border-red-100"
                    }`}
                  >
                    <div>
                      <p className="font-mono font-bold text-[#1d1d1f] text-xs">
                        {unit.id}
                      </p>
                      <p className="text-[10px] text-[#8B6F47]">
                        {unit.type[lang]} {unit.floor[lang]}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[10px] text-[#B0A08A]">
                          {isArabic ? "متوسط" : "Avg"}
                        </span>
                        <div className="flex gap-0.5">
                          {[0.25, 0.50, 0.75, 1.0].map((step, stepIdx) => (
                            <div
                              key={stepIdx}
                              className={`w-3 h-1.5 rounded-sm ${
                                unit.avgOcc >= step ? "bg-[#C89565]" : "bg-[#EDE5DC]"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-semibold text-[#8B6F47]">
                          {Math.round(unit.avgOcc * 100)}%
                        </span>
                      </div>
                    </div>

                    <div className="text-end">
                      {unit.aprStatus === "occupied" ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                          {isArabic ? "مشغولة" : "Occupied"}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-400 border border-red-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                          {isArabic ? "شاغرة" : "Vacant"}
                        </span>
                      )}
                      <p className="text-[10px] text-[#B0A08A] mt-1">
                        {isArabic
                          ? `يونيو ${Math.round(unit.aprOcc * 100)}%`
                          : `Jun ${Math.round(unit.aprOcc * 100)}%`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
