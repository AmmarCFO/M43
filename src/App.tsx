import { useState } from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  Building, 
  Calendar, 
  Megaphone, 
  FileText 
} from "lucide-react";

import { ScrollProgress } from "./components/ScrollProgress";
import { FormulasModal } from "./components/FormulasModal";
import { PhotoCarousel } from "./components/PhotoCarousel";
import { BuildingLayout } from "./components/BuildingLayout";
import { OccupancyPerformance } from "./components/OccupancyPerformance";
import { RevenuePerformance } from "./components/RevenuePerformance";
import { InvestmentBreakdown } from "./components/InvestmentBreakdown";
import { ContractProposal } from "./components/ContractProposal";
import { DriveVideoPreview } from "./components/DriveVideoPreview";

import { 
  insightsData, 
  marketingCampaigns, 
  tiktokVideos 
} from "./data";

export default function App() {
  const [isArabic, setIsArabic] = useState(true);
  const [isFormulasOpen, setIsFormulasOpen] = useState(false);

  const lang = isArabic ? "ar" : "en";

  const i = {
    ownerName: { en: "ORUS", ar: "أورس - شركة الأساس" },
    buildingName: { en: "Mathwaa 43", ar: "مثوى 43" },
    location: { en: "Al Ta'awun District, Riyadh, Saudi Arabia", ar: "حي التعاون، الرياض، المملكة العربية السعودية" },
    assetType: { en: "Residential Building", ar: "مبنى سكني" },
    totalUnits: 20,
    contractStart: { en: "June 2025", ar: "يونيو 2025" },
    contractEnd: { en: "June 2026", ar: "يونيو 2026" },
    reportDate: { en: "April 2026", ar: "أبريل 2026" },
    heroImage: "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/e5612c617_ores-cover-image.jpg",
    buildingPhotos: [
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/0479954a7_DSC06177.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/e74010f96_DSC06274.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/3da39e41b_DSC06277.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/18b60fa99_DSC06193.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/fdb0bfe6a_DSC06273.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/834f13966_DSC06271.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/5c90138d1_DSC06272.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/aad61bc6e_DSC06291.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/8beca27a3_DSC06289.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/6314e69db_DSC06279.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/a86caa2fd_DSC06280.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/30a6f09a7_DSC06297.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/878865bf0_DSC06278.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/e03444510_DSC06281.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/46c291237_DSC06282.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/eac73e1f8_DSC06283.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/b3f502ad0_DSC06284.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/c36376b9a_DSC06285.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/e42c8ddb5_DSC06259.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/b84d13f0f_DSC06260.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/69765b48b_DSC06261.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/662bab6aa_DSC06264.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/eb899060f_DSC06265.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/726439983_DSC06266.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/12dd5f405_DSC06286.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/e74c078e2_DSC06287.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/f5d97a1c2_DSC06288.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/586911dff_DSC06269.jpg",
      "https://media.base44.com/images/public/69e45359a75e1e7fa9180eb7/1b0d069f3_DSC06270.jpg"
    ]
  };

  const o = {
    reportTitle: { en: "Contract Renewal Report | Mathwaa 43", ar: "تقرير تجديد العقد | مثوى 43" },
    preparedFor: { en: "Prepared For", ar: "مُعدٌّ لـ" },
    executiveSummary: { en: "Executive Summary", ar: "الموجز التنفيذي" },
    executiveText: {
      en: [
        "This report documents the full performance of Mathwaa's management of Mathwaa 43 in Al Ta'awun throughout the contract period. It covers occupancy results, revenue collected, and marketing activities.",
        "Most importantly, it includes a transparent breakdown of the real costs we have absorbed, and a clear demonstration that operating at 5.5% is generating net losses that are not sustainable.",
        "Our goal is to make the case for adjusting contract terms: 15% retroactively on Year 1 to at minimum cover our costs, and 20% on the new contract to ensure this partnership remains viable."
      ],
      ar: [
        "يوثّق هذا التقرير الأداء الكامل لإدارة مثوى لمبنى مثوى 43 في حي التعاون خلال فترة العقد. يشمل نتائج الإشغال والإيرادات المحصّلة وأنشطة التسويق.",
        "والأهم من ذلك، يتضمن تفصيلاً شفافاً للاستثمارات الحقيقية التي قدّمناها نيابةً عن هذا العقار، مع إثبات واضح أن نسبة 5.5% الحالية تُوقع علينا خسائر فعلية.",
        "هدفنا تقديم حجة واضحة لتعديل شروط العقد: 15% بأثر رجعي على السنة الأولى كحد أدنى لتغطية تكاليفنا، و20% للعقد الجديد لضمان استدامة الشراكة."
      ]
    },
    projectInfo: { en: "Building Overview", ar: "نظرة عامة على المبنى" },
    marketing: { en: "Marketing Efforts", ar: "جهود التسويق" },
    marketingIntro: {
      en: "A comprehensive multi-channel marketing strategy was deployed across the contract period to maximize occupancy for Mathwaa 43.",
      ar: "تم تنفيذ استراتيجية تسويقية شاملة متعددة القنوات طوال فترة العقد لتعظيم الإشغال في مثوى 43."
    },
    ourInvestment: { en: "Our Investment in This Property", ar: "استثمارنا في هذا العقار" },
    ourInvestmentIntro: {
      en: "Beyond the day-to-day management fee, Mathwaa invested significantly in this property. From physical renovations to staff time, marketing budget, and operational systems. Below is a transparent breakdown of every riyal we put into making this building perform.",
      ar: "بعيداً عن رسوم الإدارة اليومية، استثمرت مثوى بشكل كبير في هذا العقار. من التجديدات المادية إلى وقت الموظفين وميزانية التسويق والأنظمة التشغيلية. فيما يلي تفصيل شفاف لكل ريال أنفقناه لجعل هذا المبنى يعمل بأعلى مستوى."
    },
    contractProposal: { en: "Contract Renewal Proposal", ar: "مقترح تجديد العقد" },
    insights: { en: "Key Insights", ar: "الرؤى الأساسية" },
    closing: { en: "A Message to the Owner", ar: "رسالة إلى المالك" },
    closingText: {
      en: [
        "We entered this partnership committed to delivering results, and the numbers in this report speak for themselves.",
        "But transparency requires us to be direct: every month we operated under 5.5%, we absorbed losses out of our own pocket. This cannot continue.",
        "We are proposing a fair path forward: 15% to settle Year 1 at cost, and 20% on the new contract to build a partnership that is sustainable for both sides.",
        "We believe in this asset and in this partnership. We just need the terms to reflect the reality of what it takes to operate at this level."
      ],
      ar: [
        "دخلنا هذه الشراكة بالتزام حقيقي بتحقيق النتائج، والأرقام الواردة في هذا التقرير تتحدث عن نفسها.",
        "لكن الشفافية تقتضي أن نكون صريحين: كل شهر أدرنا المبنى بنسبة 5.5%، تحملنا خسائر من مواردنا الخاصة. هذا الوضع لا يمكن الاستمرار فيه.",
        "نقترح مساراً عادلاً للمضي قدماً: 15% لتسوية السنة الأولى بما يعادل تكاليفنا، و20% في العقد الجديد لبناء شراكة مستدامة لكلا الطرفين.",
        "نؤمن بهذا العقار وبهذه الشراكة، نحتاج فقط إلى شروط تعكس حقيقة ما يتطلبه التشغيل بهذا المستوى."
      ]
    }
  };

  return (
    <div 
      className="min-h-screen pb-16" 
      style={{ background: "linear-gradient(160deg, #FDFAF7 0%, #F7F1E8 40%, #EDE5DC 100%)" }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Dynamic styles injected from extracted original index.js */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes investorGlow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(184,134,95,0.4), 0 0 60px rgba(200,149,101,0.2), 0 16px 48px rgba(0,0,0,0.10); 
            border-color: rgba(200,149,101,0.45); 
          }
          50% { 
            box-shadow: 0 0 60px rgba(184,134,95,0.7), 0 0 100px rgba(200,149,101,0.45), 0 24px 56px rgba(0,0,0,0.13); 
            border-color: rgba(200,149,101,0.75); 
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        .investor-glow { animation: investorGlow 3.5s ease-in-out infinite; }
        .owner-name-shimmer {
          background: linear-gradient(90deg, #B8865F 0%, #E8C088 35%, #C89565 55%, #B8865F 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .card-hover { 
          transition: transform 0.35s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.35s ease; 
        }
        .card-hover:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 28px 72px rgba(0,0,0,0.07), 0 6px 24px rgba(184,134,95,0.13); 
        }
        .vacant-pulse { animation: pulse-dot 1.8s ease-in-out infinite; }
        .section-title { 
          border-inline-start: 3px solid #C89565; 
          padding-inline-start: 14px; 
          border-radius: 2px; 
          line-height: 1.3; 
        }
        .stat-card { 
          background: linear-gradient(135deg, #FDFBF8 0%, #F5EFE7 100%); 
        }
        .glass-pill { 
          background: rgba(255,255,255,0.7); 
          backdrop-filter: blur(12px); 
          -webkit-backdrop-filter: blur(12px); 
        }
      `}</style>

      {/* Floating Scroll Indicator */}
      <ScrollProgress />

      {/* Formulas popup modal */}
      <FormulasModal 
        isOpen={isFormulasOpen} 
        onClose={() => setIsFormulasOpen(false)} 
        isArabic={isArabic} 
      />

      {/* Main Header navigation */}
      <header 
        className="bg-white/90 backdrop-blur-2xl border-b border-[#C89565]/10 sticky top-0 z-40"
        style={{ boxShadow: "0 1px 0 rgba(200,149,101,0.08), 0 4px 24px rgba(0,0,0,0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png" 
              alt="Mathwaa Logo" 
              className="w-10 h-10 object-contain" 
            />
            <div>
              <span className="text-lg font-bold tracking-tight text-[#5B4B8A] block leading-none">
                {isArabic ? "مثوى" : "Mathwaa"}
              </span>
              <span className="text-[10px] text-[#B0A08A] font-medium tracking-wide uppercase">
                {isArabic ? "تقرير تجديد العقد" : "Contract Renewal Report"}
              </span>
            </div>
          </motion.div>

          <div className="flex items-center gap-2">
            <button 
              id="header-formulas-btn"
              onClick={() => setIsFormulasOpen(true)}
              className="text-[#5B4B8A] hover:text-[#4a3a78] text-xs font-semibold bg-[#F0EDF8] hover:bg-[#E4DFF5] px-3 py-1.5 rounded-full transition-all duration-200 border border-[#5B4B8A]/15 cursor-pointer"
            >
              {isArabic ? "المعادلات" : "Formulas"}
            </button>
            <motion.button 
              id="lang-toggle-btn"
              initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsArabic(!isArabic)}
              className="text-[#B8865F] text-sm font-bold bg-gradient-to-r from-[#F5EFE7] to-[#EDE5DC] hover:from-[#EDE5DC] hover:to-[#E0D5C8] px-5 py-2 rounded-full transition-all duration-200 border border-[#C89565]/20 cursor-pointer"
            >
              {isArabic ? "English" : "العربية"}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div 
        className="max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-16"
        style={{ fontFamily: isArabic ? "'Cairo', sans-serif" : "'Poppins', sans-serif" }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 sm:mb-24"
        >
          {/* Cover Hero Banner Card */}
          <div className="relative w-full rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-2xl">
            <img src={i.heroImage} alt="Mathwaa 43" className="w-full h-auto object-cover" style={{ maxHeight: "400px", width: "100%" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="text-start">
                <p className="text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1">
                  {isArabic ? "تقرير تجديد العقد" : "Contract Renewal Report"}
                </p>
                <p className="text-white text-2xl font-black tracking-tight">
                  {i.buildingName[lang]}
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-2 text-end">
                <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wide">
                  {isArabic ? "التاريخ" : "Date"}
                </p>
                <p className="text-white text-xs font-bold">
                  {i.reportDate[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Centered Large Logo Badge */}
          <div className="mb-6 flex justify-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white p-5 flex items-center justify-center shadow-2xl border border-[#5B4B8A]/20"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png" 
                alt="Mathwaa Logo" 
                className="w-full h-full object-contain" 
              />
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight"
          >
            {o.reportTitle[lang]}
          </motion.h1>

          {/* Metadata pill buttons */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-12 flex-wrap">
            {[
              { text: isArabic ? "حي التعاون، الرياض" : "Al Ta'awun, Riyadh", Icon: MapPin },
              { text: isArabic ? "20 وحدة" : "20 Units", Icon: Building },
              { text: isArabic ? "يونيو 2025 - يونيو 2026" : "Jun 2025 - Jun 2026", Icon: Calendar }
            ].map((pill, idx) => (
              <span 
                key={idx} 
                className="glass-pill inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#EDE5DC] text-xs font-semibold text-[#8B6F47] shadow-sm"
              >
                <pill.Icon className="w-3.5 h-3.5 text-[#C89565]" />
                {pill.text}
              </span>
            ))}
          </div>

          {/* Prepared For Client Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-2 bg-white inline-block px-8 sm:px-12 py-6 sm:py-8 rounded-3xl border border-[#C89565]/30 investor-glow"
          >
            <p className="text-xs font-semibold text-[#8B6F47] mb-3 uppercase tracking-wider">
              {o.preparedFor[lang]}
            </p>
            <p className="text-3xl font-black tracking-tight owner-name-shimmer">
              {i.ownerName[lang]}
            </p>
            <div className="mt-4 pt-4 border-t border-[#EDE5DC] flex items-center justify-center gap-2">
              <p className="text-[10px] text-[#B0A08A] uppercase tracking-widest">
                {isArabic ? "معدّ بواسطة" : "Prepared by"}
              </p>
              <p className="text-[10px] font-bold text-[#8B6F47]">
                {isArabic ? "فريق الإيرادات، مثوى" : "Revenue Team, Mathwaa"}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard Sections Stagger */}
        <div className="space-y-10 sm:space-y-14">
          
          {/* 1. Location / Map Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-3xl card-hover"
          >
            <div className="p-0 overflow-hidden">
              <div className="p-4 sm:p-6 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#8B6F47] uppercase tracking-wide">
                      {isArabic ? "موقع العقار" : "Property Location"}
                    </p>
                    <p className="text-sm font-bold text-[#1d1d1f]">
                      {i.location[lang]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[260px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.228!2d46.6718!3d24.7818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f079f52ac3f27%3A0x9e8b4f4c3a3d7e2a!2sORES%20%D8%A3%D9%88%D8%B1%D8%B3!5e0!3m2!1sen!2ssa!4v1713500000000!5m2!1sen!2ssa" 
                  className="w-full h-full border-0" 
                  allowFullScreen={true}
                  loading="lazy" 
                  title="ORES Mathwaa 43 Location"
                />
              </div>
            </div>
          </motion.div>

          {/* 2. Executive Summary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-3xl card-hover"
          >
            <div className="p-4 sm:p-10">
              <div className="flex items-start gap-4 mb-7">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight section-title">
                  {o.executiveSummary[lang]}
                </h2>
              </div>
              <div className="ms-0 sm:ms-[64px] space-y-4">
                {o.executiveText[lang].map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-[#3d3d3d] leading-relaxed text-sm sm:text-base font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Building Overview Card with Photo Carousel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-3xl card-hover"
          >
            <div className="p-4 sm:p-10">
              <div className="flex items-start gap-4 mb-7">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight section-title">
                  {o.projectInfo[lang]}
                </h2>
              </div>
              <div className="ms-0 sm:ms-[64px] space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: isArabic ? "نوع العقار" : "Property Type", value: i.assetType[lang] },
                    { label: isArabic ? "إجمالي الوحدات" : "Total Units", value: `${i.totalUnits} ${isArabic ? "وحدات سكنية" : "Residential Units"}` },
                    { label: isArabic ? "بداية التشغيل" : "Operations Start", value: i.contractStart[lang] },
                    { label: isArabic ? "نهاية العقد" : "Contract End", value: i.contractEnd[lang] }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EDE5DC]/60">
                      <p className="text-[10px] text-[#B0A08A] font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-bold text-[#1d1d1f] mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Photo Carousel slideshow */}
                <div>
                  <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
                    {isArabic ? "صور المبنى والوحدات" : "Building & Units Gallery"}
                  </p>
                  <PhotoCarousel photos={i.buildingPhotos} isArabic={isArabic} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Occupancy Performance Card (Nfe) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-hover"
          >
            <OccupancyPerformance isArabic={isArabic} />
          </motion.div>

          {/* 5. Building Layout Card (Rfe) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-3xl card-hover p-4 sm:p-10"
          >
            <div className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight section-title">
                {isArabic ? "توزيع إشغال الغرف" : "Room Occupancy Layout"}
              </h2>
            </div>
            <div className="ms-0 sm:ms-[64px]">
              <BuildingLayout isArabic={isArabic} />
            </div>
          </motion.div>

          {/* 6. Revenue Performance Card (kfe) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-hover"
          >
            <RevenuePerformance isArabic={isArabic} />
          </motion.div>

          {/* 7. Investment Breakdown Card (Pfe) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-hover"
          >
            <InvestmentBreakdown isArabic={isArabic} />
          </motion.div>

          {/* 8. Marketing Efforts Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border border-[#C89565]/20 shadow-lg bg-white overflow-hidden rounded-3xl card-hover"
          >
            <div className="p-4 sm:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Megaphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight section-title">
                  {o.marketing[lang]}
                </h2>
              </div>
              
              <div className="ms-0 sm:ms-[64px] space-y-6">
                <p className="text-[#3d3d3d] leading-relaxed text-sm sm:text-base font-normal">
                  {o.marketingIntro[lang]}
                </p>

                {/* Digital Ad Campaign Video Embeds */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <DriveVideoPreview 
                    fileId="1mr9KfWvQRyPfr7YnfG0QlomN3MaCijZO" 
                    label={isArabic ? "حملة إعلانية 1" : "Ad Campaign 1"} 
                  />
                  <DriveVideoPreview 
                    fileId="1hVMurMw45rvpCkCq7G-hd0jv4OwKDavt" 
                    label={isArabic ? "حملة إعلانية 2" : "Ad Campaign 2"} 
                  />
                </div>



                {/* Bullet points list of marketing campaigns */}
                <div className="space-y-2.5">
                  {marketingCampaigns.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[#3d3d3d]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C89565] mt-2 flex-shrink-0" />
                      <span>{item[lang]}</span>
                    </div>
                  ))}
                </div>

                {/* TikTok Organic Performance Section */}
                <div className="pt-6 border-t border-[#EDE5DC]">
                  <div className="flex items-center gap-3 mb-4 p-4 bg-zinc-950 rounded-2xl border border-zinc-800">
                    <div className="w-10 h-10 bg-[#FF2D55] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.13 1.2 2.67 1.95 4.3 2.12v3.9c-1.83-.02-3.58-.63-5.02-1.74-.08 1.66-.02 3.32-.05 4.98-.07 2.3-.92 4.54-2.52 6.18-1.77 1.87-4.38 2.82-6.94 2.51-2.82-.3-5.26-2.24-6.07-4.96-1.01-3.18.53-6.85 3.58-8.23.94-.43 1.95-.62 2.97-.62.02 1.34 0 2.68.01 4.01-1.3-.01-2.67.43-3.4 1.53-.78 1.1-.64 2.7.35 3.6 1.05.98 2.81.93 3.75-.15.42-.48.6-1.12.59-1.75-.02-3.05-.01-6.1-.02-9.15.01-1.09-.01-2.18 0-3.27h3.7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">
                        {isArabic ? "مشاهدات تيك توك العضوية" : "TikTok Organic Performance"}
                      </p>
                      <p className="text-zinc-400 text-xs">
                        @mathwaa_ - {isArabic ? "مشاهدات عضوية لهذا العقار" : "organic views for this property"}
                      </p>
                    </div>
                    <div className="ms-auto text-end">
                      <p className="text-white font-black text-xl">186,000+</p>
                      <p className="text-zinc-400 text-[9px] uppercase tracking-wide">
                        {isArabic ? "مشاهدة" : "Views"}
                      </p>
                    </div>
                  </div>

                  {/* Grid of the 4 TikTok Videos */}
                  <div className="grid grid-cols-2 gap-3">
                    {tiktokVideos.map((video, idx) => (
                      <a
                        key={idx}
                        href={`https://www.tiktok.com/@mathwaa_/video/${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative rounded-2xl overflow-hidden border border-zinc-700 group block"
                        style={{ aspectRatio: "9/16" }}
                      >
                        <img 
                          src={`https://www.tiktok.com/api/img/?itemId=${video.id}&location=0`} 
                          alt={`TikTok ${idx + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            if (target.nextSibling) {
                              (target.nextSibling as HTMLElement).style.display = "flex";
                            }
                          }}
                        />
                        <div className="hidden w-full h-full bg-zinc-900 items-center justify-center absolute inset-0">
                          <p className="text-zinc-500 text-xs text-center px-2">
                            {isArabic ? `فيديو تيك توك ${idx + 1}` : `TikTok Video ${idx + 1}`}
                          </p>
                        </div>
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 ms-0.5" fill="black" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2.5 start-2.5 end-2.5">
                          <span className="text-white text-[9px] font-bold bg-black/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {isArabic ? "شاهد على تيك توك" : "Watch on TikTok"}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 9. Contract Proposal Card (Tfe) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-hover"
          >
            <ContractProposal isArabic={isArabic} />
          </motion.div>

          {/* 10. Closing / Message to Owner Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div 
              className="relative overflow-hidden rounded-3xl border border-[#C89565]/25 shadow-xl"
              style={{ background: "linear-gradient(135deg, #FDFAF6 0%, #F5EFE7 50%, #EDE5DC 100%)" }}
            >
              <div 
                className="absolute top-0 end-0 w-64 h-64 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #C89565, transparent)", transform: "translate(30%, -30%)" }}
              />
              <div 
                className="absolute bottom-0 start-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #B8865F, transparent)", transform: "translate(-30%, 30%)" }}
              />

              <div className="relative p-6 sm:p-12">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight section-title">
                    {o.closing[lang]}
                  </h2>
                </div>

                <div className="ms-0 sm:ms-[64px] space-y-5">
                  {o.closingText[lang].map((para, paraIdx) => (
                    <p 
                      key={paraIdx} 
                      className={`leading-relaxed ${
                        paraIdx === 0 
                          ? "text-lg sm:text-xl font-semibold text-[#1d1d1f]" 
                          : paraIdx === o.closingText[lang].length - 1 
                          ? "text-base sm:text-lg font-bold text-[#C89565]" 
                          : "text-base sm:text-lg font-normal text-[#3d3d3d]"
                      }`}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Signature block */}
                  <div className="pt-4 flex items-center gap-3">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png" 
                      alt="Mathwaa" 
                      className="w-8 h-8 object-contain opacity-70" 
                    />
                    <div>
                      <p className="text-xs font-bold text-[#8B6F47]">
                        {isArabic ? "فريق الإيرادات، مثوى" : "Revenue Team, Mathwaa"}
                      </p>
                      <p className="text-[10px] text-[#B0A08A]">
                        {i.reportDate[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Confidential Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-3 py-12 border-t border-[#EDE5DC]/60">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F5EFE7] to-[#EDE5DC] border border-[#C89565]/20 flex items-center justify-center shadow-sm">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png" 
                  alt="Mathwaa Logo" 
                  className="w-7 h-7 object-contain opacity-75" 
                />
              </div>
              <p className="text-[11px] text-[#B0A08A] text-center max-w-xs leading-relaxed">
                {isArabic 
                  ? "هذا التقرير سري ومُعدٌّ حصرياً لصاحب العقار. جميع الحقوق محفوظة لمثوى." 
                  : "This report is confidential and prepared exclusively for the property owner. All rights reserved © Mathwaa."}
              </p>
              <span className="text-[10px] text-[#C8B89A] font-bold tracking-[0.2em] uppercase">
                {i.reportDate[lang]}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
