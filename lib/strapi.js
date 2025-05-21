export const fetchDocs = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/docs?populate=*`);
    const data = await res.json();
    
    return { 
      data: data?.data || [],
      meta: data?.meta || null
    };
  } catch (error) {
    console.error('API Error:', error);
    return { data: [], error: error.message };
  }
};