import { useState, useMemo } from "react";
import { 
  DollarSign, 
  Search, 
  ArrowUpDown, 
  TrendingDown, 
  TrendingUp, 
  Minus, 
  Table, 
  BarChart4, 
  SlidersHorizontal 
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { unitAveragePrices } from "../data";
import { UnitAveragePrice } from "../types";

interface ApartmentPricesProps {
  isArabic: boolean;
}

export function ApartmentPrices({ isArabic }: ApartmentPricesProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"ALL" | "1BR" | "2BR">("ALL");
  const [viewMode, setViewMode] = useState<"table" | "chart">("table");
  const [sortField, setSortField] = useState<"id" | "2025" | "2026" | "change">("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Format currencies
  const formatCurrency = (val: number) => {
    return `SAR ${val.toLocaleString()}`;
  };

  // Calculate summary metrics
  const stats = useMemo(() => {
    const total2025 = unitAveragePrices.reduce((sum, u) => sum + u.avgPrice2025, 0);
    const total2026 = unitAveragePrices.reduce((sum, u) => sum + u.avgPrice2026, 0);
    const avg2025 = total2025 / unitAveragePrices.length;
    const avg2026 = total2026 / unitAveragePrices.length;
    const pctChange = ((avg2026 - avg2025) / avg2025) * 100;

    // Filter by type to get type averages
    const units1BR = unitAveragePrices.filter(u => u.id !== "43-001" && u.id !== "43-002" && u.id !== "43-003" && u.id !== "43-004");
    const units2BR = unitAveragePrices.filter(u => u.id === "43-001" || u.id === "43-002" || u.id === "43-003" || u.id === "43-004");

    const avg1BR2025 = units1BR.reduce((sum, u) => sum + u.avgPrice2025, 0) / units1BR.length;
    const avg1BR2026 = units1BR.reduce((sum, u) => sum + u.avgPrice2026, 0) / units1BR.length;

    const avg2BR2025 = units2BR.reduce((sum, u) => sum + u.avgPrice2025, 0) / units2BR.length;
    const avg2BR2026 = units2BR.reduce((sum, u) => sum + u.avgPrice2026, 0) / units2BR.length;

    return {
      avg2025,
      avg2026,
      pctChange,
      avg1BR2025,
      avg1BR2026,
      avg2BR2025,
      avg2BR2026
    };
  }, []);

  // Filter and Sort units
  const processedUnits = useMemo(() => {
    return unitAveragePrices
      .filter((unit) => {
        const matchesSearch = unit.id.toLowerCase().includes(searchTerm.toLowerCase());
        
        let matchesType = true;
        if (selectedType === "1BR") {
          matchesType = unit.id !== "43-001" && unit.id !== "43-002" && unit.id !== "43-003" && unit.id !== "43-004";
        } else if (selectedType === "2BR") {
          matchesType = unit.id === "43-001" || unit.id === "43-002" || unit.id === "43-003" || unit.id === "43-004";
        }
        
        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        let modifier = sortDirection === "asc" ? 1 : -1;
        
        if (sortField === "id") {
          return a.id.localeCompare(b.id) * modifier;
        }
        if (sortField === "2025") {
          return (a.avgPrice2025 - b.avgPrice2025) * modifier;
        }
        if (sortField === "2026") {
          return (a.avgPrice2026 - b.avgPrice2026) * modifier;
        }
        if (sortField === "change") {
          const changeA = a.avgPrice2026 - a.avgPrice2025;
          const changeB = b.avgPrice2026 - b.avgPrice2025;
          return (changeA - changeB) * modifier;
        }
        return 0;
      });
  }, [searchTerm, selectedType, sortField, sortDirection]);

  const handleSort = (field: "id" | "2025" | "2026" | "change") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Chart data format
  const chartData = useMemo(() => {
    return processedUnits.map(u => ({
      name: u.id,
      "2025": u.avgPrice2025,
      "2026": u.avgPrice2026,
    }));
  }, [processedUnits]);

  return (
    <div id="apartment-prices-card" className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-2xl">
      <div className="p-4 sm:p-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2
              className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight"
              style={{
                borderInlineStart: "4px solid #C89565",
                paddingInlineStart: "14px",
              }}
            >
              {isArabic ? "معدل أسعار الشقق (2025 vs 2026)" : "Average Apartment Prices (2025 vs 2026)"}
            </h2>
          </div>

          {/* View Toggle */}
          <div className="flex bg-zinc-100 p-1 rounded-xl self-start sm:self-center">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === "table" 
                  ? "bg-white text-[#B8865F] shadow-sm" 
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              {isArabic ? "جدول" : "Table"}
            </button>
            <button
              onClick={() => setViewMode("chart")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === "chart" 
                  ? "bg-white text-[#B8865F] shadow-sm" 
                  : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              <BarChart4 className="w-3.5 h-3.5" />
              {isArabic ? "مخطط بياني" : "Chart"}
            </button>
          </div>
        </div>

        <div className="ms-0 sm:ms-[64px] space-y-6">
          <p className="text-[#3d3d3d] leading-relaxed text-sm">
            {isArabic
              ? "مقارنة تفصيلية لمعدل أسعار الإيجار الفعلي لكل وحدة سكنية بين عامي 2025 و 2026. يوضح التحليل استقرار وتغير مستويات الأسعار، وهو ما يساهم في تحديد الاستراتيجية التسعيرية الأمثل لعقد التجديد القادم:"
              : "Detailed comparison of actual average rental rates for each housing unit between 2025 and 2026. The analysis reveals pricing stability and shifts, assisting in formulating the optimal pricing strategy for the upcoming contract renewal:"}
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Overall Average */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EDE5DC] shadow-sm">
              <span className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wide block mb-1">
                {isArabic ? "متوسط السعر الإجمالي" : "Overall Average Price"}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-gray-800 font-mono">
                  {stats.avg2026.toFixed(0).toLocaleString()}
                </span>
                <span className="text-xs text-zinc-400">
                  vs {stats.avg2025.toFixed(0).toLocaleString()}
                </span>
              </div>
              
              <div className="mt-1 flex items-center gap-1">
                {stats.pctChange < 0 ? (
                  <>
                    <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-xs font-bold text-red-500">{stats.pctChange.toFixed(1)}%</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-bold text-emerald-500">+{stats.pctChange.toFixed(1)}%</span>
                  </>
                )}
                <span className="text-[10px] text-[#B0A08A]">
                  {isArabic ? "تغير متوسط الأسعار" : "average price change"}
                </span>
              </div>
            </div>

            {/* 1-Bedroom Average */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EDE5DC] shadow-sm">
              <span className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wide block mb-1">
                {isArabic ? "متوسط جناح (غرفة وصالة)" : "Average Suite (1BR) Price"}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-gray-800 font-mono">
                  {stats.avg1BR2026.toFixed(0).toLocaleString()}
                </span>
                <span className="text-xs text-zinc-400">
                  vs {stats.avg1BR2025.toFixed(0).toLocaleString()}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-[#B0A08A]">
                {((stats.avg1BR2026 - stats.avg1BR2025) / stats.avg1BR2025 * 100) < 0 ? (
                  <span className="text-red-500 font-semibold">{((stats.avg1BR2026 - stats.avg1BR2025) / stats.avg1BR2025 * 100).toFixed(1)}%</span>
                ) : (
                  <span className="text-emerald-500 font-semibold">+{((stats.avg1BR2026 - stats.avg1BR2025) / stats.avg1BR2025 * 100).toFixed(1)}%</span>
                )}
                <span>{isArabic ? "معدل تغير شريحة الغرفة" : "1BR tier change rate"}</span>
              </div>
            </div>

            {/* 2-Bedroom Average */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EDE5DC] shadow-sm">
              <span className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wide block mb-1">
                {isArabic ? "متوسط شقة (غرفتين وصالة)" : "Average 2BR Apartment Price"}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-gray-800 font-mono">
                  {stats.avg2BR2026.toFixed(0).toLocaleString()}
                </span>
                <span className="text-xs text-zinc-400">
                  vs {stats.avg2BR2025.toFixed(0).toLocaleString()}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-[#B0A08A]">
                {((stats.avg2BR2026 - stats.avg2BR2025) / stats.avg2BR2025 * 100) < 0 ? (
                  <span className="text-red-500 font-semibold">{((stats.avg2BR2026 - stats.avg2BR2025) / stats.avg2BR2025 * 100).toFixed(1)}%</span>
                ) : (
                  <span className="text-emerald-500 font-semibold">+{((stats.avg2BR2026 - stats.avg2BR2025) / stats.avg2BR2025 * 100).toFixed(1)}%</span>
                )}
                <span>{isArabic ? "معدل تغير شريحة الغرفتين" : "2BR tier change rate"}</span>
              </div>
            </div>

          </div>

          {/* Interactive Filters Panel */}
          <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder={isArabic ? "البحث برقم الشقة (مثال: 43-105)..." : "Search by Apartment ID (e.g. 43-105)..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-zinc-200 rounded-xl focus:outline-none focus:border-[#C89565] transition-colors"
              />
            </div>

            {/* Type Filtering */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8B6F47]" />
              <span className="text-xs font-bold text-gray-600 mr-1">
                {isArabic ? "التصنيف:" : "Type:"}
              </span>
              <div className="flex bg-zinc-200/70 p-0.5 rounded-lg text-[10px]">
                <button
                  onClick={() => setSelectedType("ALL")}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                    selectedType === "ALL" 
                      ? "bg-white text-[#B8865F] shadow-sm" 
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {isArabic ? "الكل" : "All"}
                </button>
                <button
                  onClick={() => setSelectedType("1BR")}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                    selectedType === "1BR" 
                      ? "bg-white text-[#B8865F] shadow-sm" 
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {isArabic ? "غرفة وصالة" : "1BR Suite"}
                </button>
                <button
                  onClick={() => setSelectedType("2BR")}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                    selectedType === "2BR" 
                      ? "bg-white text-[#B8865F] shadow-sm" 
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {isArabic ? "غرفتين وصالة" : "2BR"}
                </button>
              </div>
            </div>

          </div>

          {/* VIEW: Table Mode */}
          {viewMode === "table" ? (
            <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF8F5] text-[10px] sm:text-xs font-bold text-[#8B6F47] uppercase border-b border-[#EDE5DC]">
                      {/* Apartment ID Header */}
                      <th 
                        onClick={() => handleSort("id")}
                        className="p-3 text-center cursor-pointer select-none hover:bg-[#F5EFE7] transition-colors"
                      >
                        <div className="flex items-center justify-center gap-1">
                          {isArabic ? "رقم الشقة" : "Apartment ID"}
                          <ArrowUpDown className="w-3 h-3 text-[#B0A08A]" />
                        </div>
                      </th>

                      {/* Type Header */}
                      <th className="p-3 text-center">
                        {isArabic ? "النوع" : "Unit Type"}
                      </th>

                      {/* 2025 Price Header */}
                      <th 
                        onClick={() => handleSort("2025")}
                        className="p-3 text-center cursor-pointer select-none hover:bg-[#F5EFE7] transition-colors"
                      >
                        <div className="flex items-center justify-center gap-1">
                          {isArabic ? "متوسط سعر 2025" : "Avg Price 2025"}
                          <ArrowUpDown className="w-3 h-3 text-[#B0A08A]" />
                        </div>
                      </th>

                      {/* 2026 Price Header */}
                      <th 
                        onClick={() => handleSort("2026")}
                        className="p-3 text-center cursor-pointer select-none hover:bg-[#F5EFE7] transition-colors"
                      >
                        <div className="flex items-center justify-center gap-1">
                          {isArabic ? "متوسط سعر 2026" : "Avg Price 2026"}
                          <ArrowUpDown className="w-3 h-3 text-[#B0A08A]" />
                        </div>
                      </th>

                      {/* Change Header */}
                      <th 
                        onClick={() => handleSort("change")}
                        className="p-3 text-center cursor-pointer select-none hover:bg-[#F5EFE7] transition-colors"
                      >
                        <div className="flex items-center justify-center gap-1">
                          {isArabic ? "التغير" : "Price Shift"}
                          <ArrowUpDown className="w-3 h-3 text-[#B0A08A]" />
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-zinc-100 text-xs text-center font-medium">
                    {processedUnits.length > 0 ? (
                      processedUnits.map((unit) => {
                        const priceDiff = unit.avgPrice2026 - unit.avgPrice2025;
                        const pctDiff = (priceDiff / unit.avgPrice2025) * 100;

                        return (
                          <tr key={unit.id} className="hover:bg-zinc-50/70 transition-colors">
                            {/* ID */}
                            <td className="p-3 font-mono font-bold text-gray-800">
                              {unit.id}
                            </td>

                            {/* Type */}
                            <td className="p-3 text-gray-600">
                              {isArabic ? unit.type.ar : unit.type.en}
                            </td>

                            {/* Avg Price 2025 */}
                            <td className="p-3 font-mono text-gray-700">
                              {formatCurrency(unit.avgPrice2025)}
                            </td>

                            {/* Avg Price 2026 */}
                            <td className="p-3 font-mono text-gray-900 font-semibold">
                              {formatCurrency(unit.avgPrice2026)}
                            </td>

                            {/* Difference and Shift Indicators */}
                            <td className="p-3 font-mono">
                              {priceDiff < 0 ? (
                                <div className="inline-flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                                  <TrendingDown className="w-3 h-3" />
                                  <span>{pctDiff.toFixed(1)}%</span>
                                </div>
                              ) : priceDiff > 0 ? (
                                <div className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                  <TrendingUp className="w-3 h-3" />
                                  <span>+{pctDiff.toFixed(1)}%</span>
                                </div>
                              ) : (
                                <div className="inline-flex items-center gap-1 text-zinc-500 bg-zinc-50 px-2 py-1 rounded-lg">
                                  <Minus className="w-3 h-3" />
                                  <span>{isArabic ? "مستقر" : "Stable"}</span>
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-zinc-400 italic">
                          {isArabic ? "لم يتم العثور على نتائج تطابق بحثك" : "No results match your filters"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* VIEW: Chart Mode */
            <div className="rounded-2xl border border-[#EDE5DC] p-4 bg-[#FAF8F5]/30">
              <div className="h-[350px] w-full">
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#71717a', fontSize: 10, fontFamily: 'monospace' }}
                        stroke="#CBD5E1"
                      />
                      <YAxis 
                        tick={{ fill: '#71717a', fontSize: 10 }}
                        stroke="#CBD5E1"
                        tickFormatter={(v) => `${(v/1000)}k`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#ffffff', 
                          border: '1px solid #C89565',
                          borderRadius: '12px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                          fontSize: '11px'
                        }}
                        formatter={(val: number) => [formatCurrency(val), ""]}
                        labelStyle={{ fontWeight: 'bold', color: '#1d1d1f', fontFamily: 'monospace' }}
                      />
                      <Legend 
                        wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                      />
                      <Bar name={isArabic ? "متوسط 2025" : "Avg Price 2025"} dataKey="2025" fill="#B0A08A" radius={[4, 4, 0, 0]} />
                      <Bar name={isArabic ? "متوسط 2026" : "Avg Price 2026"} dataKey="2026" fill="#C89565" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-zinc-400 italic text-sm">
                    {isArabic ? "لم يتم العثور على نتائج لعرضها بيانياً" : "No filtered results to display"}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
