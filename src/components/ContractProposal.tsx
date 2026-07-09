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
  as as directCosts,
  xM as netRevenue
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

          {/* Current Year Analysis Table */}
          <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
            <div className="bg-[#FAF8F5] p-3 border-b border-[#EDE5DC]">
              <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider">
                {isArabic ? "تحليل العام الأول (الوضع الحالي)" : "Year 1 Financial Reality (Current State)"}
              </p>
            </div>
            
            <div className="divide-y divide-[#F5EFE7] text-xs sm:text-sm">
              {/* Total Revenue (Gross) */}
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-[#3d3d3d] font-semibold">{isArabic ? "إجمالي الإيرادات (قبل الخصم)" : "Total Revenue (Gross)"}</span>
                <span className="font-mono font-bold text-[#1d1d1f]">SAR {Ha.toLocaleString()}</span>
              </div>
              
              {/* Net Revenue */}
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-[#3d3d3d]">{isArabic ? "صافي الإيرادات (بعد التكاليف المخصومة من الإيرادات)" : "Net Revenue (after Costs deducted from revenue)"}</span>
                <span className="font-mono font-bold text-[#1d1d1f]">SAR {netRevenue.toLocaleString()}</span>
              </div>

              {/* Total Direct Expenses */}
              <div className="p-3.5 flex flex-col sm:flex-row justify-between bg-white gap-2">
                <div className="text-[#3d3d3d]">
                  <p className="font-semibold">{isArabic ? "إجمالي المصاريف المباشرة" : "Total Direct Expenses"}</p>
                  <p className="text-[11px] text-gray-500 max-w-md mt-1 leading-relaxed">
                    {isArabic 
                      ? "(رواتب موظف النظافة الداخلي، مستلزمات العقار والضيوف، الصيانة والإصلاحات، خدمات الغسيل والمفروشات، مشرف العمليات والدعم التشغيلي، إيجار المركبة والوقود، إلخ)"
                      : "(Payroll & Related Exp - One Houseman, Property & Guest Supplies, Maintenance, Laundry, Supervisor & Operation Support, Car Rent & Fuel, etc.)"
                    }
                  </p>
                </div>
                <span className="font-mono font-semibold text-[#3d3d3d] self-start sm:self-center">SAR {directCosts.toLocaleString()}</span>
              </div>

              {/* Total Mathwa's Share (That it took) */}
              <div className="p-3.5 flex justify-between bg-[#FAF8F5]/30">
                <span className="text-[#3d3d3d] font-semibold">{isArabic ? "حصة مثوى الفعلية المستلمة (5.5% من صافي الإيراد)" : "Total Mathwa's Share Received (5.5%)"}</span>
                <span className="font-mono font-bold text-[#C89565]">SAR {tS.toLocaleString()}</span>
              </div>

              {/* Total remaining for the owner */}
              <div className="p-3.5 flex justify-between bg-emerald-50/30">
                <span className="text-emerald-800 font-bold">{isArabic ? "إجمالي المتبقي للمالك" : "Total Remaining for the Owner"}</span>
                <span className="font-mono font-black text-emerald-700">SAR {(netRevenue - tS).toLocaleString()}</span>
              </div>

              {/* Mathwaa Total Operating Costs (Direct + Indirect) */}
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-[#3d3d3d]">{isArabic ? "تكاليف التشغيل الفعلية التي تحملتها مثوى (مباشرة وغير مباشرة)" : "Mathwaa Actual Operating Costs (Direct + Indirect)"}</span>
                <span className="font-mono font-semibold text-[#3d3d3d]">SAR {Wa.toLocaleString()}</span>
              </div>

              {/* Mathwaa Net Operating Loss / Deficit */}
              <div className="p-3.5 flex justify-between bg-red-50/50">
                <span className="text-red-700 font-semibold">{isArabic ? "صافي عجز خسارة التشغيل لمثوى" : "Mathwaa Net Operating Loss / Deficit"}</span>
                <span className="font-mono font-bold text-red-600">-SAR {gM.toLocaleString()}</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
