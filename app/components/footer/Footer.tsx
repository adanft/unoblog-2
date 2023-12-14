import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.css';
import { getCategories } from '@/lib/data';

const Footer = async () => {
	const categories = await getCategories();

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src="/logo.png" alt="unoblog" width={50} height={50} />
					<h1 className="font-medium text-xl text-color">Unoblog</h1>
				</div>
				<p className="text-color">
					Empower your financial future with the potential of cryptocurrencies. Explore,
					invest, and thrive in the digital frontier. 🚀 #CryptoRevolution
				</p>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className="font-semibold title-color">Links</span>
					<Link className="text-blue-500" href="/">
						Home
					</Link>
					<Link className="text-blue-500" href="/about">
						About
					</Link>
					<Link className="text-blue-500" href="/contact">
						Contact
					</Link>
				</div>
				<div className={styles.list}>
					<span className="font-semibold title-color">Social media</span>
					<Link className="text-orange-600 flex items-center gap-4" href="/">
						<i className="nf nf-fa-instagram text-2xl"></i> <span>Instagram</span>
					</Link>
					<Link className="text-gray-500 flex items-center gap-4" href="/">
						<i className="nf nf-md-music_note_outline text-2xl"></i>
						<span>TikTok</span>
					</Link>
					<Link className="text-red-500 flex items-center gap-4" href="/">
						<i className="nf nf-md-youtube text-2xl"></i>
						<span>YouTube</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
