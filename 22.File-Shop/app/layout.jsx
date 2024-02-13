
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../styles/globals.css';

// export const metadata = {
//    title: 'mernfa default next 13 project',
//    description: 'mernfa default next 13 project',
// }

export default function RootLayout({ children }) {
   return (
      <html lang="fa-IR">
         <body>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   )
}
