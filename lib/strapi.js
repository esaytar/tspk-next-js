const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://tspk.onrender.com';

export const getDocuments = async () => {
  const res = await fetch(`${STRAPI_URL}/api/documents?populate=*`);
  return await res.json();
};