export const getLinkApi = (table) => {
  return `https://api.airtable.com/v0/${process.env.REACT_APP_BASIC_KEY}/${table}?api_key=${process.env.REACT_APP_PERSON_KEY}`;
};
export const fetchData = async (table, set) => {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_BASIC_KEY}/${table}?api_key=${process.env.REACT_APP_PERSON_KEY}`
  );
  const data = await res.json();
  set(
    data.records.map((record) => {
      return {
        ...record.fields,
        img: record.fields.img[0].url,
        id: record.id,
      };
    })
  );
};
