export const getPageTitle = (path) => {
  const PAGE_TITLES = {
    "/sveden": "Основные сведения",
    "/sveden/documents": "Документы",
    "/sveden/structure": "Структура и сведения об образовательной организации",
    "/sveden/employees": "Руководство",
    "/sveden/mezhdunarodnoe-sotrudnichestvo": "Международное сотрудничество",
  };
  
  return PAGE_TITLES[path] || "Тольяттинский социально-педагогический колледж"; 
};