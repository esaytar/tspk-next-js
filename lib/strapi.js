const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://tspk.onrender.com';

export const fetchDocs = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/docs?populate=*`);
    if (!res.ok) throw new Error(`HTTP error!= status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: [], error: error.message };
  }
};