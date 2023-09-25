import YieldTable from '../../models/YieldTable';

const de_wiedemann_pappelBadenWuerttemberg: YieldTable = {
  meta: {
    title: 'Pappel Baden Württemberg',
    author: 'E. Wiedemann',
    copyright:
      '© 1995 J.D. Sauerländer`s Verlag e.K., Berliner Str. 46, 63619 Bad Orb, Deutschland Internet: www.sauerlaender-verlag.com/',
    source:
      'Schober, R. (Hg.): Ertragstafeln wichtiger Baumarten bei verschiedener Durchforstung. 4. Aufl., Frankfurt am Main: J. D. Sauerländer`s Verlag, 1995.',
    sourceLink: 'https://www.eurobuch.com/buch/isbn/3793907309.html',
  },
  rows: [
    {
      yieldClass: 12.5,
      age: 10,
      stock: 37,
    },
    {
      yieldClass: 12.5,
      age: 20,
      stock: 158,
    },
    {
      yieldClass: 12.5,
      age: 30,
      stock: 273,
    },
    {
      yieldClass: 12.5,
      age: 40,
      stock: 352,
    },
    {
      yieldClass: 12.5,
      age: 50,
      stock: 404,
    },
    {
      yieldClass: 12.5,
      age: 60,
      stock: 432,
    },
  ],
};

export default de_wiedemann_pappelBadenWuerttemberg;
