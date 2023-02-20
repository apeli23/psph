import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title + ' - phoneSphere' : 'phoneSphere'}</title>
                <meta name="description" content="Virtual Call Center Software" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen flex-col justify-between">
                <header className=' bg-gray-800 text-white font-bold'>
                    <nav
                        className="flex h-16 items-center px-4 justify-between shadow-md"
                    >
                        <Link href="/" legacyBehavior>
                            <a className="text-lg">phoneSphere</a>
                        </Link>
                        <div>
                            <Link href="/cart" legacyBehavior>
                                <a className="p-2">Features</a>
                            </Link>
                            <Link href="/login" legacyBehavior>
                                <a className="p-2">Pricing</a>
                            </Link>
                            <Link href="/login" legacyBehavior>
                                <a className="p-2">Contact</a>
                            </Link>
                            <button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-1 px-4 rounded">
                                Login
                            </button>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="bg-gray-800 py-4">
                    <div className='container mx-auto flex justify-between items-center px-4'>
                        <div className="text-white">&copy; 2023 CallCenter App</div>
                        <nav>
                            <ul className="flex text-white">
                                <li className="mr-6"><Link href="/terms" legacyBehavior><a>Terms of Service</a></Link></li>
                                <li><Link href="/privacy" legacyBehavior><a>Privacy Policy</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    );
}