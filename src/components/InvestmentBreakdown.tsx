import { 
  HandCoins 
} from "lucide-react";
import { 
  l$, 
  u$, 
  as, 
  os, 
  Eu 
} from "../data";

interface InvestmentBreakdownProps {
  isArabic: boolean;
}

export function InvestmentBreakdown({ isArabic }: InvestmentBreakdownProps) {
  const lang = isArabic ? "ar" : "en";

  return (
    <div id="costs-roi-card" className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-2xl">
      <div className="p-4 sm:p-10">
        {/* Card Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
            <HandCoins className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight"
            style={{
              borderInlineStart: "4px solid #C89565",
              paddingInlineStart: "14px",
            }}
          >
            {isArabic ? "التكاليف والعائد على الاستثمار" : "Costs & ROI"}
          </h2>
        </div>

        {/* Content Body */}
        <div className="ms-0 sm:ms-[64px] space-y-6">
          {/* Summary Banner */}
          <div className="p-4 sm:p-5 bg-amber-50 rounded-2xl border border-amber-100 text-center shadow-sm">
            <p className="text-[10px] font-semibold text-amber-700 mb-1 uppercase tracking-wide">
              {isArabic ? "إجمالي استثمار مثوى طوال العقد" : "Total Mathwaa Investment Over Contract"}
            </p>
            <p className="text-2xl sm:text-3xl font-black text-[#C89565]">
              SAR {Eu.toLocaleString()}
            </p>
            <p className="text-[10px] text-[#B0A08A] mt-1">
              {isArabic 
                ? "يغطي كامل تكاليف العمليات الميدانية واللوجستيات والمكاتب الرئيسية" 
                : "Covers all on-site operations, logistics, and HQ overheads"
              }
            </p>
          </div>

          {/* Cost Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Direct Costs */}
            <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-[#B8865F] to-[#C89565] text-white text-xs font-bold px-3 py-2.5 flex justify-between">
                <span>{isArabic ? "التكاليف التشغيلية المباشرة" : "Direct Operational Costs"}</span>
                <span>SAR {as.toLocaleString()}</span>
              </div>
              <div className="divide-y divide-[#F5EFE7] text-xs">
                {l$.map((item, idx) => (
                  <div key={idx} className="p-3 flex justify-between hover:bg-[#FAF8F5] transition-colors">
                    <span className="text-[#3d3d3d] font-medium leading-relaxed max-w-[70%]">
                      {item[lang]}
                    </span>
                    <span className="text-[#1d1d1f] font-mono font-semibold">
                      SAR {item.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indirect Costs */}
            <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-[#B8865F] to-[#C89565] text-white text-xs font-bold px-3 py-2.5 flex justify-between">
                <span>{isArabic ? "التكاليف التشغيلية غير المباشرة" : "Indirect Operational Costs"}</span>
                <span>SAR {os.toLocaleString()}</span>
              </div>
              <div className="divide-y divide-[#F5EFE7] text-xs">
                {u$.map((item, idx) => (
                  <div key={idx} className="p-3 flex justify-between hover:bg-[#FAF8F5] transition-colors">
                    <span className="text-[#3d3d3d] font-medium leading-relaxed max-w-[70%]">
                      {item[lang]}
                    </span>
                    <span className="text-[#1d1d1f] font-mono font-semibold">
                      SAR {item.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
