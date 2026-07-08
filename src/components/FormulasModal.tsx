import { X } from "lucide-react";
import { formulasData } from "../data";

interface FormulasModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic: boolean;
}

export function FormulasModal({ isOpen, onClose, isArabic }: FormulasModalProps) {
  if (!isOpen) return null;
  const lang = isArabic ? "ar" : "en";

  return (
    <div 
      id="formulas-modal-backdrop"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div 
        id="formulas-modal-content"
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
        dir={isArabic ? "rtl" : "ltr"}
        style={{ fontFamily: isArabic ? "'Cairo', sans-serif" : "'Poppins', sans-serif" }}
      >
        <div className="sticky top-0 bg-gradient-to-r from-[#B8865F] to-[#C89565] p-5 rounded-t-3xl flex items-center justify-between z-10">
          <div>
            <p className="text-white font-black text-lg">
              {isArabic ? "المعادلات والحسابات" : "Formulas & Calculations"}
            </p>
            <p className="text-white/70 text-xs mt-0.5">
              {isArabic ? "كيف يُحسب كل مقياس في التقرير" : "How every metric in this report is calculated"}
            </p>
          </div>
          <button 
            id="close-formulas-btn"
            onClick={onClose} 
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-6">
          {formulasData.map((section, idx) => (
            <div key={idx} id={`formula-section-${idx}`}>
              <p className="text-xs font-black text-[#8B6F47] uppercase tracking-widest mb-3 border-b border-[#EDE5DC] pb-2">
                {section.section[lang]}
              </p>
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    id={`formula-item-${idx}-${itemIdx}`}
                    className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EDE5DC]"
                  >
                    <p className="text-sm font-bold text-[#1d1d1f] mb-2">
                      {item.name[lang]}
                    </p>
                    <div className="bg-[#F5EFE7] rounded-xl px-3 py-2 mb-2">
                      <p className="text-xs font-mono text-[#8B6F47]">
                        = {item.formula[lang]}
                      </p>
                    </div>
                    <p className="text-[11px] text-[#B0A08A] italic">
                      {isArabic ? "مثال: " : "e.g. "}
                      {item.example[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
