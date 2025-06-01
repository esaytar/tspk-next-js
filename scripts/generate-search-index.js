const fs = require('fs/promises');
const path = require('path');
const glob = require('fast-glob');

async function generateIndex() {
  // 1. Находим все страницы
  const files = await glob('app/**/page.{js,jsx,ts,tsx}');
  
  // 2. Обрабатываем каждую страницу
  const index = [];
  for (const filePath of files) {
    const fullPath = path.join(process.cwd(), filePath);
    const content = await fs.readFile(fullPath, 'utf8');

    // 3. Вручную извлекаем title (без сложных парсеров)
    let title = path.basename(path.dirname(filePath))
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

    // 4. Простой поиск метаданных в содержимом
    const metadataMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (metadataMatch) title = metadataMatch[1];

    // 5. Формируем URL
    const url = filePath
      .replace(/^app/, '')
      .replace(/\/page\.(js|jsx|ts|tsx)$/, '')
      .replace(/\/index$/, '')
      || '/';

    // 6. Добавляем в индекс
    index.push({
      id: filePath,
      url,
      title,
      content: content
        .replace(/<[^>]+>/g, ' ') // Удаляем HTML/JSX
        .replace(/\s+/g, ' ') // Удаляем лишние пробелы
        .substring(0, 500) // Ограничиваем длину
    });
  }

  // 7. Сохраняем индекс
  await fs.writeFile(
    path.join(process.cwd(), 'public/search-index.json'),
    JSON.stringify(index, null, 2)
  );
  console.log(`Index generated with ${index.length} pages`);
}

generateIndex().catch(console.error);