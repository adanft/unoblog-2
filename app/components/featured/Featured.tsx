import React from 'react';
import Image from 'next/image';

import styles from './Featured.module.css';

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hello there!</b> Discover the best about{' '}
				<span className="primary-color">Cryptocurrency</span>
			</h1>
			<div className={styles.post}>
				<div className={styles.imageContainer}>
					<Image
						src="/cryptocurrency-main.jpg"
						alt="mian-img"
						fill
						className={styles.image}
					/>
				</div>
				<div className={styles.textContainer}>
					<h2 className={styles.postTitle}>
						Navigating the Crypto Cosmos: Your Gateway to a World of Digital Currencies
					</h2>
					<p className={styles.postDesc}>
						Embark on a captivating journey into the dynamic universe of
						cryptocurrencies with our blog! From the pioneering Bitcoin to a galaxy of
						promising altcoins, we unravel the mysteries of blockchain technology.
						Whether you're a seasoned enthusiast or a curious beginner, we break down
						complex concepts, explore emerging trends, and guide you through the diverse
						landscape of digital currencies. Ready to redefine your financial horizons?
						Join us in exploring the endless possibilities of the crypto cosmos! 🚀💰
						#CryptoExploration #DigitalCurrencyFrontiers
					</p>
				</div>
			</div>
		</div>
	);
};

export default Featured;
