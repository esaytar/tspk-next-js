const fs = require('fs/promises');
const path = require('path');
const glob = require('fast-glob');

async function generateIndex() {
  const files = await glob('app/**/page.{js,jsx,ts,tsx}');
  const index = [];
  
  for (const filePath of files) {
    const fullPath = path.join(process.cwd(), filePath);
    const content = await fs.readFile(fullPath, 'utf8');
    let title = path.basename(path.dirname(filePath))
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

    const metadataMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (metadataMatch) title = metadataMatch[1];

    const url = filePath
      .replace(/^app/, '')
      .replace(/\/page\.(js|jsx|ts|tsx)$/, '')
      .replace(/\/index$/, '')
      || '/';

    // const cleanContent = content
    //   .replace(/import\s+.*?\s+from\s+["'].*?["'];?\n/g, '') 
    //   .replace(/export\s+(default\s+)?(function|const|let|var)\s+\w+/g, '')
    //   .replace(/<[^>]+>/g, ' ') 
    //   .replace(/{[^}]+}/g, ' ') 
    //   .replace(/\s+/g, ' ') 
    //   .trim()
    //   .substring(0, 500);
    index.push({
      id: filePath,
      url,
      title,
      // content: cleanContent
    });
  }
  await fs.writeFile(
    path.join(process.cwd(), 'public/search-index.json'),
    JSON.stringify(index, null, 2)
  );
  console.log(`Index generated with ${index.length} pages`);
}

generateIndex().catch(console.error);