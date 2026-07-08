import { Bed, BedDouble } from "lucide-react";
import { Db } from "../data";

interface BuildingLayoutProps {
  isArabic: boolean;
}

export function BuildingLayout({ isArabic }: BuildingLayoutProps) {
  const lang = isArabic ? "ar" : "en";
  const totalUnits = Db.reduce((sum, floor) => sum + floor.units.length, 0);
  const occupiedUnits = Db.reduce(
    (sum, floor) => sum + floor.units.filter((u) => u.status === "occupied").length,
    0
  );

  return (
    <div id="building-layout-card" className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
      <div className="bg-gradient-to-r from-[#B8865F] to-[#C89565] px-4 py-3 flex items-center justify-between">
        <p className="text-white font-bold text-sm tracking-wide">
          {isArabic ? "مثوى 43 - التوزيع المعماري" : "Mathwaa 43 - Building Layout"}
        </p>
        <p className="text-white/70 text-xs">
          {isArabic
            ? `4 أدوار · ${totalUnits} وحدة · ${occupiedUnits} مشغولة`
            : `4 Floors · ${totalUnits} Units · ${occupiedUnits} Occupied`}
        </p>
      </div>

      <div className="flex items-center gap-4 px-4 py-2 bg-[#FAF8F5] border-b border-[#EDE5DC] flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-emerald-500" />
          <span className="text-[10px] text-[#8B6F47] font-semibold">
            {isArabic ? "مشغولة" : "Occupied"}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-red-400" />
          <span className="text-[10px] text-[#8B6F47] font-semibold">
            {isArabic ? "شاغرة" : "Vacant"}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <BedDouble className="w-3 h-3 text-[#5B4B8A]" />
          <span className="text-[10px] text-[#8B6F47] font-semibold">
            {isArabic ? "غرفتان" : "2-BR"}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Bed className="w-3 h-3 text-[#C89565]" />
          <span className="text-[10px] text-[#8B6F47] font-semibold">
            {isArabic ? "غرفة واحدة" : "1-BR"}
          </span>
        </div>
      </div>

      <div className="divide-y divide-[#EDE5DC]">
        {Db.map((floor, floorIdx) => (
          <div key={floorIdx} className={`${floor.bg} p-3`}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8B6F47]">
                {floor.level[lang]}
              </p>
              <p className="text-[10px] text-[#B0A08A]">
                {floor.units.filter((u) => u.status === "occupied").length}/{floor.units.length}{" "}
                {isArabic ? "مشغولة" : "occupied"}
              </p>
            </div>

            <div 
              id={`floor-${floorIdx}-grid`}
              className={`grid gap-2 ${floor.units.length <= 4 ? "grid-cols-4" : "grid-cols-6"}`}
            >
              {floor.units.map((unit, unitIdx) => {
                const isTwoBR = unit.type === "2BR";
                const isOccupied = unit.status === "occupied";
                return (
                  <div
                    key={unitIdx}
                    id={`unit-${unit.id}`}
                    className={`rounded-xl border p-2.5 flex flex-col items-center gap-1 text-center ${
                      isOccupied
                        ? isTwoBR
                          ? "bg-[#5B4B8A]/10 border-[#5B4B8A]/30"
                          : "bg-emerald-50 border-emerald-100"
                        : "bg-red-50 border-red-100"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                        isOccupied 
                          ? isTwoBR 
                            ? "bg-[#5B4B8A]" 
                            : "bg-emerald-500" 
                          : "bg-red-400"
                      }`}
                    >
                      {isTwoBR ? (
                        <BedDouble className="w-3 h-3 text-white" />
                      ) : (
                        <Bed className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <p className="text-[9px] font-mono font-bold text-[#1d1d1f] leading-tight">
                      {unit.id}
                    </p>
                    <p
                      className={`text-[9px] font-semibold ${
                        isOccupied
                          ? isTwoBR
                            ? "text-[#5B4B8A]"
                            : "text-emerald-600"
                          : "text-red-400"
                      }`}
                    >
                      {unit.type}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#F5EFE7] to-[#EDE5DC] px-4 py-3 flex items-center justify-between border-t border-[#EDE5DC]">
        <div className="flex items-center gap-4 text-xs">
          <span className="text-[#8B6F47] font-semibold">
            {isArabic ? "الأرضي" : "Ground"} · 4 × 2BR
          </span>
          <span className="text-[#8B6F47]">|</span>
          <span className="text-[#8B6F47] font-semibold">
            {isArabic ? "الأدوار 1-3" : "Floors 1-3"} · 16 × 1BR
          </span>
        </div>
        <span className="text-xs font-black text-emerald-600">
          {Math.round((occupiedUnits / totalUnits) * 100)}% {isArabic ? "إشغال" : "Occupied"}
        </span>
      </div>
    </div>
  );
}
