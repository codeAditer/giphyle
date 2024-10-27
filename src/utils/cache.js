export const setCache = (key, data, ttl = 3600) => {
  if (!key || !data) {
    console.error("Invalid key or data for caching");
    return;
  }
  const now = new Date();
  const item = {
    data,
    expiry: now.getTime() + ttl * 1000,
  };
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error("Error setting cache:", error);
  }
};

export const getCache = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  return item.data;
};
export const clearCache = (key) => {
  localStorage.removeItem(key);
};
