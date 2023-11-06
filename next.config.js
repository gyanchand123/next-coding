/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com"],
  },
  /*  output:"export" */ //if we don't write this our static html file won't be exported.
  redirects: async () => {
    return [
      {
        source: "/redirect",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
