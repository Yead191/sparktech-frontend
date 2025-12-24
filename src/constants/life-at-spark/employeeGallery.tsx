export type ImageItem =
  | string
  | { src: string; alt?: string; name?: string; designation?: string };

const DEFAULT_IMAGES: ImageItem[] = [
  {
    src: "https://i.ibb.co.com/Gv2nbhXn/farzana-img.png",
    alt: "Abstract art",
    name: "Love BdCalling",
    designation: "UI/UX Designer",
  },

  {
    src: "https://i.ibb.co.com/Ng62nrs1/inspiring-new-boss-copy1-768x1147-3-4.png",
    alt: "Nadir",
    name: "Nadir Hossain",
    designation: "Sr Backend Developer",
  },
  {
    src: "https://i.ibb.co.com/Ps7z6hZ4/93995954-2667124773520254-2730501655723245568-n.jpg",
    alt: "Masum",
    name: "H. M. Masum",
    designation: "Jr. Frontend Developer",
  },
  {
    src: "https://i.ibb.co.com/FqzSsdfj/580512431-4116207195308135-3270780407261229590-n.jpg",
    alt: "Abstract art",
    name: "Asadur Rahaman Yead",
    designation: "Jr Frontend Developer",
  },
  {
    src: "/assets/thumbnails/mahmud.png",
    alt: "Modern sculpture",
    name: "Abdulllah Al Mahmud",
    designation: "GM, Sales Department",
  },
  {
    src: "https://i.ibb.co.com/rfHkfHB3/517693226-2530034364005098-6571637773511387247-n.jpg",
    alt: "Abstract art",
    name: "Farjana Ahamed Shuchona",
    designation: "UI/UX Designer",
  },
  {
    src: "https://i.ibb.co.com/qG6vvtQ/Frame-2147238452.png",
    alt: "Digital artwork",
    name: "Saiful Islam Fahim",
    designation: "LF Member & Backend Developer",
  },
  {
    src: "/assets/thumbnails/shahariar.jpg",
    alt: "Contemporary art",
    name: "Shahariar Mohammad Hassan",
    designation: "Sr. Senior Sales Executive",
  },
  {
    src: "https://i.ibb.co.com/jBsYrqv/Frame-2147238448.png",
    alt: "Rafsan ",
    name: "David Brown",
    designation: "Pattern Designer",
  },
  {
    src: "https://i.ibb.co.com/FqzSsdfj/580512431-4116207195308135-3270780407261229590-n.jpg",
    alt: "Abstract art",
    name: "Asadur Rahaman Yead",
    designation: "Jr Frontend Developer",
  },

  {
    src: "https://i.ibb.co.com/N2C3qLwJ/476160446-2158314191270526-2862639120188139429-n.jpg",
    alt: "Mostain",
    name: "Mostain Billah",
    designation: "Sr. UI/UX Designer",
  },

  {
    src: "https://i.ibb.co.com/Hfhw6ggV/asad.png",
    alt: "Asaduzzaman Mahfuz",
    name: "Asaduzzaman Mahfuz",
    designation: "Sr Ui/UX Designer",
  },
  {
    src: "/dummy/khushi.png",
    alt: "Khushi Akter",
    name: "Khushi Akter",
    designation: "Senior UI/UX Designer",
  },
  {
    src: "https://res.cloudinary.com/dnallbxxa/image/upload/v1765798441/724468d4-ab12-4915-ac49-742b95190b8e_ymakhx.png",
    alt: "Mahmud Hasan Sabbir",
    name: "Mahmud Hasan Sabbir",
    designation: "Frontend Developer",
  },
];
export default DEFAULT_IMAGES;
