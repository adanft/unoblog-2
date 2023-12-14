'use client';
import React from 'react';

import styles from './Toggle.module.css';
import { useTheme } from '@/lib/providers/ThemeProvider';

const Toggle = () => {
	const { theme, toggle } = useTheme();

	const handleToggle = () => {
		toggle();
	};

	return (
		<div className={styles.container}>
			<label className={styles.switch}>
				<span className={styles.sun}>
					<i className="nf nf-oct-sun"></i>
				</span>
				<span className={styles.moon}>
					<i className="nf nf-fa-moon_o"></i>
				</span>
				<input
					type="checkbox"
					className={styles.input}
					onChange={handleToggle}
					checked={theme === 'dark'}
				/>
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};

export default Toggle;
