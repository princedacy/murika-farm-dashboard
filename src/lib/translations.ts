
export const translations = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    products: "Products",
    orders: "Orders",
    analyticsReports: "Analytics Reports",
    userManagement: "User Management",
    settings: "Settings",
    navigation: "Navigation",
    
    // Dashboard
    dashboardTitle: "Dashboard",
    dashboardSubtitle: "Overview of your agricultural platform metrics.",
    welcomeBack: "Welcome back",
    adminDashboard: "Admin Dashboard",
    
    // KPIs
    keyPerformanceMetrics: "Key Performance Metrics",
    kpis: "KPIs",
    activeFarmers: "Active Farmers",
    totalRevenue: "Total Revenue",
    ordersThisMonth: "Orders This Month",
    growthRate: "Growth Rate",
    
    // Stats
    farmersOnboarded: "Farmers Onboarded",
    thisMonth: "This month: +127 new farmers joined",
    cropVarietiesListed: "Crop Varieties Listed",
    cropDescription: "Coffee, Rice, Potatoes, Vegetables & more",
    
    // Quick Actions
    quickActions: "Quick Actions",
    reviewKYC: "Review KYC",
    pendingApprovals: "3 pending approvals",
    processOrders: "Process Orders",
    newOrders: "12 new orders",
    platformStatus: "Platform Status",
    systemsOperational: "All systems operational",
    
    // Bottom Stats
    monthlyGrowth: "Monthly Growth",
    coverageAreas: "Coverage Areas",
    successRate: "Success Rate",
    
    // Footer
    growingTogether: "Growing Together",
    
    // Common
    coffee: "Coffee",
    rice: "Rice",
    potatoes: "Potatoes"
  },
  rw: {
    // Navigation
    dashboard: "Ikibaho",
    products: "Ibicuruzwa",
    orders: "Amateka",
    analyticsReports: "Raporo z'isesengura",
    userManagement: "Gucunga abakoresha",
    settings: "Amagerageza",
    navigation: "Kugenda",
    
    // Dashboard
    dashboardTitle: "Ikibaho",
    dashboardSubtitle: "Incamake y'ibipimo by'urubuga rwawe rw'ubuhinzi.",
    welcomeBack: "Murakaza neza",
    adminDashboard: "Ikibaho cy'umuyobozi",
    
    // KPIs
    keyPerformanceMetrics: "Ibipimo by'imikorere",
    kpis: "Ibipimo",
    activeFarmers: "Abahinzi bakora",
    totalRevenue: "Amafaranga yose",
    ordersThisMonth: "Amateka uku kwezi",
    growthRate: "Igipimo cy'iterambere",
    
    // Stats
    farmersOnboarded: "Abahinzi binjiye",
    thisMonth: "Uku kwezi: +127 abahinzi bashya binjiye",
    cropVarietiesListed: "Ubwoko bw'ibihingwa",
    cropDescription: "Ikawa, Umuceri, Ibirayi, Imboga n'ibindi",
    
    // Quick Actions
    quickActions: "Ibikorwa byihuse",
    reviewKYC: "Gusuzuma KYC",
    pendingApprovals: "3 bitegereje kwemezwa",
    processOrders: "Gutunganya amateka",
    newOrders: "12 amateka mashya",
    platformStatus: "Imiterere y'urubuga",
    systemsOperational: "Sisitemu zose zikora",
    
    // Bottom Stats
    monthlyGrowth: "Iterambere ry'ukwezi",
    coverageAreas: "Uturere twose",
    successRate: "Igipimo cy'intsinzi",
    
    // Footer
    growingTogether: "Turakura hamwe",
    
    // Common
    coffee: "Ikawa",
    rice: "Umuceri",
    potatoes: "Ibirayi"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
