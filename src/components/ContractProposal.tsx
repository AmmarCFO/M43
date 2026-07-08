import { 
  FileKey2 
} from "lucide-react";
import { 
  Wa, 
  c$, 
  tS, 
  gM, 
  vM, 
  f$, 
  Ud 
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
            {isArabic ? "طلب إعادة النظر ورسوم التجديد" : "Contract Proposal & Renewal"}
          </h2>
        </div>

        {/* Content Body */}
        <div className="ms-0 sm:ms-[64px] space-y-6">
          <p className="text-[#3d3d3d] leading-relaxed text-sm">
            {isArabic
              ? "استناداً إلى تحليل التكاليف والإيرادات والجهود المبذولة لترقية وإشغال العقار، نتقدم بهذا المقترح لإعادة هيكلة شروط التعاقد بما يحقق استدامة تشغيل المبنى بكفاءة عالية:"
              : "Based on detailed analysis of operational costs, actual revenues, and the extensive upgrade and lease efforts, we present this proposal to restructure terms to ensure the property's premium, sustainable operation:"}
          </p>

          {/* Current Year Analysis Table */}
          <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
            <div className="bg-[#FAF8F5] p-3 border-b border-[#EDE5DC]">
              <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider">
                {isArabic ? "تحليل العام الأول (الوضع الحالي)" : "Year 1 Financial Reality (Current State)"}
              </p>
            </div>
            
            <div className="divide-y divide-[#F5EFE7] text-xs sm:text-sm">
              <div className="p-3.5 flex justify-between">
                <span className="text-[#3d3d3d]">{isArabic ? "تكاليف التشغيل الفعلية التي تحملتها مثوى" : "Mathwaa Actual Operating Costs (Direct + Indirect)"}</span>
                <span className="font-mono font-bold text-[#1d1d1f]">SAR {Wa.toLocaleString()}</span>
              </div>
              <div className="p-3.5 flex justify-between">
                <span className="text-[#3d3d3d]">{isArabic ? "عائدات مثوى المستلمة فعلياً (5.5% من صافي الإيراد)" : "Mathwaa Share Received (5.5% of net revenue)"}</span>
                <span className="font-mono font-bold text-[#1d1d1f]">SAR {tS.toLocaleString()}</span>
              </div>
              <div className="p-3.5 flex justify-between bg-red-50/50">
                <span className="text-red-700 font-semibold">{isArabic ? "صافي خسارة تشغيل مثوى (16% تكاليف من صافي الإيراد)" : "Mathwaa Net Operating Loss / Deficit (16% cost ratio)"}</span>
                <span className="font-mono font-bold text-red-600">-SAR {gM.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Proposed Changes Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Retroactive Settlement */}
            <div className="p-5 rounded-2xl border-2 border-amber-200 bg-amber-50/40 relative overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200 mb-2.5">
                  {isArabic ? "طلب تسوية رجعية" : "Retroactive Settlement"}
                </span>
                <p className="text-xs text-[#8B6F47] font-semibold uppercase tracking-wider mb-2">
                  {isArabic ? "تسوية العام الأول (15%)" : "Year 1 Adjustment to 15%"}
                </p>
                <p className="text-2xl font-black text-[#C89565] mb-2">
                  SAR {vM.toLocaleString()}
                </p>
                <p className="text-xs text-[#3d3d3d] leading-relaxed">
                  {isArabic
                    ? "طلب تسوية رسوم العام الأول بأثر رجعي لتصبح 15% من صافي الإيرادات، لتغطية التكاليف التشغيلية الفعلية وإلغاء عجز التشغيل."
                    : "Request retroactive adjustment of Year 1 management fees to 15% of net revenues, aligning with actual operating expenditures."}
                </p>
              </div>
            </div>

            {/* Year 2 Renewal Proposed Fee */}
            <div className="p-5 rounded-2xl border-2 border-[#C89565]/40 bg-[#FAF8F5] relative overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#C89565]/10 text-[#8B6F47] border border-[#C89565]/20 mb-2.5">
                  {isArabic ? "التجديد المقترح للعام الثاني" : "Year 2 Renewal Term"}
                </span>
                <p className="text-xs text-[#8B6F47] font-semibold uppercase tracking-wider mb-2">
                  {isArabic ? "رسوم إدارة العام الثاني (20%)" : "Proposed Year 2 Fee (20%)"}
                </p>
                <p className="text-2xl font-black text-amber-600 mb-2">
                  SAR {Ud.toLocaleString()}
                </p>
                <p className="text-xs text-[#3d3d3d] leading-relaxed">
                  {isArabic
                    ? `تحديد رسوم العام الثاني بنسبة ثابتة 20% من صافي الإيرادات (التوقع المقدر لصافي الإيرادات ${f$.toLocaleString()} ريال لعام كامل).`
                    : `Set Year 2 management fee at 20% flat of net revenues (based on a full-year conservative revenue target of SAR ${f$.toLocaleString()}).`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
