import { Providers } from './providers';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Vita Pro Nobis',
  description: 'Vita Pro Nobis',
  icons: {},
}

const RobotoClass = Roboto({weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap'});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={RobotoClass.className}>
      <Providers>
        <body>
            {children}
        </body>
      </Providers>
    </html>
  )
}
