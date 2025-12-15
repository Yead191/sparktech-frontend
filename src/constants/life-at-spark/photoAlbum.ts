const photoAlbums = [
  {
    id: "1",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796787/IMG_6439_xnawuw.jpg",
    height: 420,
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796787/573286596_122157660752886951_6946250503258363015_n_jukbju.jpg",
    height: 380,
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796787/573592015_122157660830886951_2933159187029705830_n_zedp5t.jpg",
    height: 460,
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796787/575104191_122157663032886951_2169561962068274450_n_wrp1ef.jpg",
    height: 520,
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796786/547356758_122144135426886951_5648487112506893195_n_xhbvs8.jpg",
    height: 360,
  },
  {
    id: "6",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796786/554997310_122147916110886951_7860946218894689302_n_x2vg3y.jpg",
    height: 480,
  },
  {
    id: "7",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796786/549235537_122144997008886951_3285366151529874880_n_ai2vid.jpg",
    height: 400,
  },
  {
    id: "8",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796786/548115176_122144134598886951_9087113429568350816_n_gm1bsj.jpg",
    height: 300,
  },
  {
    id: "9",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796786/547835369_122144997362886951_5236278593636076980_n_qdkrcd.jpg",
    height: 450,
  },
  {
    id: "10",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796786/547278061_122144997020886951_9043615392436985545_n_cwesfg.jpg",
    height: 340,
  },
  {
    id: "11",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796785/547253882_122144134742886951_1489753822469905323_n_c8ugdx.jpg",
    height: 500,
  },
  {
    id: "12",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796785/547210527_122144134676886951_540636267158576429_n_z5msmy.jpg",
    height: 370,
  },
  {
    id: "13",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796785/533175243_122134948244886951_3264989540852507939_n_qhadxi.jpg",
    height: 440,
  },
  {
    id: "14",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796785/542059060_122141487908886951_5939719723677017927_n_ya7zx8.jpg",
    height: 560,
  },
  {
    id: "15",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796785/531172942_729199813283922_537918083515314490_n_esnxu3.jpg",
    height: 310,
  },
  {
    id: "16",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796785/539415825_122137854710886951_7753562114209504560_n_iiyc4d.jpg",
    height: 470,
  },
  {
    id: "17",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796785/534635115_122134947566886951_6034213372563042261_n_ixtk9u.jpg",
    height: 390,
  },
  {
    id: "18",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796784/519904003_122125011278886951_4912064788696507101_n_vzypvr.jpg",
    height: 330,
  },
  {
    id: "19",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796784/520440583_122125011374886951_4385111121235820957_n_hajc7e.jpg",
    height: 510,
  },
  {
    id: "20",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796784/481240963_605625202308051_5065456554702653818_n_ee4hi6.jpg",
    height: 280,
  },
  {
    id: "21",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796784/528565995_724403190430251_584348301746671685_n_wsvkap.jpg",
    height: 460,
  },
  {
    id: "22",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796784/481015067_601276266076278_6034486819011312020_n_1_yvckne.jpg",
    height: 500,
  },
  {
    id: "23",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796784/528826445_724338307103406_8813929183850114219_n_ehbfxe.jpg",
    height: 480,
  },
  {
    id: "24",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796783/480289152_598262216377683_8052821779794308262_n_o28lyb.jpg",
    height: 500,
  },
  {
    id: "25",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796783/480160180_595947536609151_9090290840619485268_n_zi3wx4.jpg",
    height: 420,
  },
  {
    id: "26",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796783/528737719_724403367096900_138478336319987220_n_yktnzp.jpg",
    height: 510,
  },
  {
    id: "27",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796783/480816520_598265026377402_8927807806260869278_n_yx1ngl.jpg",
    height: 560,
  },
  {
    id: "28",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796783/479642460_595947636609141_6199649261805615908_n_ahla5t.jpg",
    height: 460,
  },
  {
    id: "29",
    img: "https://res.cloudinary.com/ds1njqypu/image/upload/v1765796783/528681986_724403513763552_7907274599580754441_n_lqs4dc.jpg",
    height: 420,
  },
];

export default photoAlbums;
