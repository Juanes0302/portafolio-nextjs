import { Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const typography = Onest({ subsets: ["latin"] });

export const metadata = {
  title:
    "Portafolio de Juan Esteban Castillo Martinez - Desarrollador y Programador Web.",
  description:
    "Contrata a Juan Esteban para crear tus aplicaciones web o móviles. Desarrollador web, especializado en innovar con sus aplicaciones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta charset="UTF-8" />
      </Head>
      <body className={`${typography.className} mx-auto max-w-3xl`}>
        {children}
      </body>
    </html>
  );
}
