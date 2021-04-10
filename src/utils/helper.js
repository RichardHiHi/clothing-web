export const getLinkApi = (table) => {
  return `https://api.airtable.com/v0/${process.env.REACT_APP_BASIC_KEY}/${table}?api_key=${process.env.REACT_APP_PERSON_KEY}`;
};
