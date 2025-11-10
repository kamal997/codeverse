export const COLOR = {
  // الأسطح والخلفيات العامة
  surface: "bg-white",
  panel: "bg-neutral-50",
  overlaySoft: "bg-gray-50",

  // النصوص
  text: "text-neutral-800",
  textMuted: "text-neutral-600",
  textSubtle: "text-neutral-500",

  // الحدود والحلقات
  border: "border-neutral-200",
  ring: "ring-neutral-200",

  // الشارات/الوسوم
  badge: "bg-white text-[var(--secondary-600)] border border-neutral-200",
  tag: "bg-gray-50 text-[var(--secondary-600)]",

  // عناصر الواجهة المحددة
  sidebarBg: "bg-gradient-to-b from-neutral-50 to-white",
  sidebarText: "text-neutral-600",
  sidebarDivider: "border-neutral-200",

  // الأزرار
  toggleButton:
    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 transition-all duration-200 shadow-sm hover:shadow group",

  // تدرّجات الهوية (هوية جديدة: Amber → Teal)
  headingGradient: "bg-gradient-to-r from-[var(--primary-600)] to-[var(--secondary-600)]",
  underlineGradient:
    "bg-gradient-to-r from-[var(--primary-500)] via-[var(--secondary-500)] to-[var(--secondary-600)]",

  // إبراز/تمييز النص
  highlight: "bg-[var(--primary-100)] text-[var(--primary-800)] border border-[var(--primary-200)]",

  // خلفية التطبيق العامة
  appBg:
    "bg-gradient-to-br from-neutral-50 to-neutral-100",

  // خلفية الحاوية الرئيسية
  containerBg:
    "bg-gradient-to-r from-neutral-50 via-white to-neutral-100",
};

export const themeClass = (role) => COLOR[role];