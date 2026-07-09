import { 
  FileKey2 
} from "lucide-react";
import { 
  Wa, 
  c$, 
  tS, 
  gM, 
  f$, 
  Ud,
  Ha,
  xM as netRevenue,
  vM
} from "../data";

interface ContractProposalProps {
  isArabic: boolean;
}

export function ContractProposal({ isArabic }: ContractProposalProps) {
  return (
    <div id="renewal-proposal-card" className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-2xl">
      <div className="p-4 sm:p-10">
        {/* Card Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
            <FileKey2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2
            className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight"
            style={{
              borderInlineStart: "4px solid #C89565",
              paddingInlineStart: "14px",
            }}
          >
            {isArabic ? "مقترح تجديد العقد ورسوم الإدارة" : "Contract Renewal & Proposed Fees"}
          </h2>
        </div>

        {/* Content Body */}
        <div className="ms-0 sm:ms-[64px] space-y-6">
          <p className="text-[#3d3d3d] leading-relaxed text-sm">
            {isArabic
              ? "استناداً إلى تحليل التكاليف والإيرادات والجهود المبذولة لترقية وإشغال العقار، نتقدم بهذا المقترح لتجديد التعاقد للعام الثاني بما يحقق استدامة تشغيل المبنى بكفاءة عالية:"
              : "Based on detailed analysis of operational costs, actual revenues, and the extensive upgrade and lease efforts, we present this proposal for Year 2 contract renewal to ensure the property's premium, sustainable operation:"}
          </p>

          {/* Grid of Current and Proposed Year 1 Models */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Box 1: Current Year 1 Reality (7%) */}
            <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden flex flex-col justify-between h-full bg-white shadow-sm">
              <div>
                <div className="bg-[#FAF8F5] p-4 border-b border-[#EDE5DC]">
                  <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider">
                    {isArabic ? "تحليل العام الأول (الوضع الحالي - رسوم 7%)" : "Year 1 Current Model (Actual 7% Fee)"}
                  </p>
                </div>
                
                <div className="divide-y divide-[#F5EFE7] text-xs sm:text-sm">
                  {/* Total Revenue (Gross) */}
                  <div className="p-3.5 flex justify-between bg-white">
                    <span className="text-[#3d3d3d] font-semibold">{isArabic ? "إجمالي الإيرادات (قبل الخصم)" : "Total Revenue (Gross)"}</span>
                    <span className="font-mono font-bold text-[#1d1d1f]">SAR {Ha.toLocaleString()}</span>
                  </div>
                  
                  {/* Net Revenue */}
                  <div className="p-3.5 flex flex-col justify-between bg-white gap-1.5">
                    <div className="text-[#3d3d3d] flex justify-between items-center w-full">
                      <span className="font-semibold">{isArabic ? "صافي الإيرادات" : "Net Revenue"}</span>
                      <span className="font-mono font-bold text-[#1d1d1f]">SAR {netRevenue.toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      {isArabic 
                        ? "(بعد خصم تكاليف الكهرباء والمياه والإنترنت البالغة 66,319 ريال من الإيرادات)"
                        : "(after SAR 66,319 in costs deducted from revenue for electricity, water, and internet)"
                      }
                    </p>
                  </div>

                  {/* Total Mathwa's Share (7%) */}
                  <div className="p-3.5 flex justify-between bg-[#FAF8F5]/40">
                    <span className="text-[#3d3d3d] font-semibold">{isArabic ? "حصة مثوى الفعلية المستلمة (7%)" : "Total Mathwa's Share Received (7%)"}</span>
                    <span className="font-mono font-bold text-[#C89565]">SAR {tS.toLocaleString()}</span>
                  </div>

                  {/* Total remaining for the owner */}
                  <div className="p-3.5 flex justify-between bg-emerald-50/20">
                    <span className="text-emerald-800 font-bold">{isArabic ? "إجمالي المتبقي للمالك" : "Total Remaining for the Owner"}</span>
                    <span className="font-mono font-black text-emerald-700">SAR {(netRevenue - tS).toLocaleString()}</span>
                  </div>

                  {/* Mathwaa Total Operating Costs */}
                  <div className="p-3.5 flex flex-col justify-between bg-white gap-1">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[#3d3d3d] font-semibold">{isArabic ? "المصاريف التشغيلية لمثوى (مباشرة وغير مباشرة)" : "Mathwaa Operating Expenses (Direct + Indirect)"}</span>
                      <span className="font-mono font-semibold text-[#3d3d3d]">SAR {Wa.toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      {isArabic 
                        ? `(تمثل المصاريف حوالي ${((Wa / netRevenue) * 100).toFixed(1)}% من صافي الإيرادات)`
                        : `(representing approximately ${((Wa / netRevenue) * 100).toFixed(1)}% of net revenue)`
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Mathwaa Net Operating Deficit */}
              <div className="p-3.5 flex justify-between bg-red-50/30 border-t border-[#F5EFE7]">
                <span className="text-red-700 font-semibold">{isArabic ? "صافي عجز خسارة التشغيل لمثوى" : "Mathwaa Net Operating Loss / Deficit"}</span>
                <span className="font-mono font-bold text-red-600">-SAR {gM.toLocaleString()}</span>
              </div>
            </div>

            {/* Box 2: Proposed Year 1 Model (15%) */}
            <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden flex flex-col justify-between h-full bg-white shadow-sm">
              <div>
                <div className="bg-[#FAF8F5] p-4 border-b border-[#EDE5DC]">
                  <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider">
                    {isArabic ? "مقترح العام الأول المعدل (رسوم 15%)" : "Year 1 Proposed Model (Retroactive 15% Fee)"}
                  </p>
                </div>
                
                <div className="divide-y divide-[#F5EFE7] text-xs sm:text-sm">
                  {/* Total Revenue (Gross) */}
                  <div className="p-3.5 flex justify-between bg-white">
                    <span className="text-[#3d3d3d] font-semibold">{isArabic ? "إجمالي الإيرادات (قبل الخصم)" : "Total Revenue (Gross)"}</span>
                    <span className="font-mono font-bold text-[#1d1d1f]">SAR {Ha.toLocaleString()}</span>
                  </div>
                  
                  {/* Net Revenue */}
                  <div className="p-3.5 flex flex-col justify-between bg-white gap-1.5">
                    <div className="text-[#3d3d3d] flex justify-between items-center w-full">
                      <span className="font-semibold">{isArabic ? "صافي الإيرادات" : "Net Revenue"}</span>
                      <span className="font-mono font-bold text-[#1d1d1f]">SAR {netRevenue.toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      {isArabic 
                        ? "(بعد خصم تكاليف الكهرباء والمياه والإنترنت البالغة 66,319 ريال من الإيرادات)"
                        : "(after SAR 66,319 in costs deducted from revenue for electricity, water, and internet)"
                      }
                    </p>
                  </div>

                  {/* Total Mathwa's Proposed Share (15%) */}
                  <div className="p-3.5 flex justify-between bg-[#FAF8F5]/40">
                    <span className="text-[#3d3d3d] font-semibold">{isArabic ? "حصة مثوى المقترحة (15%)" : "Total Mathwa's Proposed Share (15%)"}</span>
                    <span className="font-mono font-bold text-[#C89565]">SAR {vM.toLocaleString()}</span>
                  </div>

                  {/* Total remaining for the owner */}
                  <div className="p-3.5 flex justify-between bg-emerald-50/20">
                    <span className="text-emerald-800 font-bold">{isArabic ? "إجمالي المتبقي للمالك" : "Total Remaining for the Owner"}</span>
                    <span className="font-mono font-black text-emerald-700">SAR {(netRevenue - vM).toLocaleString()}</span>
                  </div>

                  {/* Mathwaa Total Operating Costs */}
                  <div className="p-3.5 flex flex-col justify-between bg-white gap-1">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[#3d3d3d] font-semibold">{isArabic ? "المصاريف التشغيلية لمثوى (مباشرة وغير مباشرة)" : "Mathwaa Operating Expenses (Direct + Indirect)"}</span>
                      <span className="font-mono font-semibold text-[#3d3d3d]">SAR {Wa.toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      {isArabic 
                        ? `(تمثل المصاريف حوالي ${((Wa / netRevenue) * 100).toFixed(1)}% من صافي الإيرادات)`
                        : `(representing approximately ${((Wa / netRevenue) * 100).toFixed(1)}% of net revenue)`
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Mathwaa Net Operating Deficit */}
              <div className="p-3.5 flex justify-between bg-red-50/30 border-t border-[#F5EFE7]">
                <span className="text-red-700 font-semibold">{isArabic ? "صافي عجز خسارة التشغيل لمثوى" : "Mathwaa Net Operating Loss / Deficit"}</span>
                <span className="font-mono font-bold text-red-600">-SAR {(Wa - vM).toLocaleString()}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
