var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_PERSON_KEY }).base(
  process.env.REACT_APP_BASIC_KEY
);

// export const test = async () => {
//   const res = await base('product').select({}).firstPage();
//   const resColor = await base('productColorImg').select({}).firstPage();
//   console.log(resColor.map((color) => color.fields));
//   console.log(
//     res.map((e) => {
//       const newColorImg = e.fields.colorImg.map((color) => {
//         return resColor.find((colorin) => colorin.id === color).fields;
//       });
//       return { ...e.fields, colorImg: newColorImg, id: e.id };
//     })
//   );
// };

export const test = async () => {
  const res = await base('test').create([
    {
      fields: {
        Name: 'a',
        Status: true,
      },
    },
    {
      fields: {
        Name: 's',
      },
    },
  ]);
};

export const getLinkApi = (table) => {
  return `https://api.airtable.com/v0/${process.env.REACT_APP_BASIC_KEY}/${table}?api_key=${process.env.REACT_APP_PERSON_KEY}`;
};
export const fetchData = async (table, set, sizeImg = 'large') => {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_BASIC_KEY}/${table}?api_key=${process.env.REACT_APP_PERSON_KEY}`
  );
  const data = await res.json();
  set(
    data.records.map((record) => {
      return {
        ...record.fields,
        img: record.fields.img[0].thumbnails[sizeImg].url,
        id: record.id,
      };
    })
  );
};
