/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = nextConfig

// module.exports = {
//   async headers(token) {
//     return [
//       {
//         source: '/',
//         headers : [
//         {
//           key: 'x-auth-token',
//           value: token
//         }]
//       }
//     ]
//   }
// }