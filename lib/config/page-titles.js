export const PAGE_TITLES = {
  "/sveden": "Основные сведения",
  "/sveden/documents": "Документы",
  "/sveden/structure": "Структура и сведения об образовательной организации",
};

export const getPageTitle = (path, params = {}) => {
  const dynamicPath = Object.keys(PAGE_TITLES).find(key => 
    key.includes('[') && new RegExp(`^${key.replace(/\[.*?\]/, '.*')}$`).test(path)
  );
  
  if (dynamicPath) {
    return typeof PAGE_TITLES[dynamicPath] === 'function' 
      ? PAGE_TITLES[dynamicPath](params) 
      : PAGE_TITLES[dynamicPath];
  }
  
  return PAGE_TITLES[path] || "Тольяттинский социально-педагогический колледж"; // Дефолтный заголовок
};