export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://tspk.onrender.com';

export const fetchDocuments = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/documents?populate=*`);
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: [] }; 
  }
};