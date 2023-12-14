import React from 'react';
import MenuPosts from '../menu-posts/MenuPosts';
import MenuCategories from '../menu-categories/MenuCategories';

import styles from './Menu.module.css';

const Menu = () => {
	return (
		<div className={styles.container}>
			<h2 className="font-medium text-sm text-gray-500">{"What's hot"}</h2>

			<h1 className="font-medium text-xl title-color">Most popular</h1>
			<MenuPosts withImage={false} />

			<h2 className="font-medium text-sm text-gray-500">Discover by topic</h2>
			<h1 className="font-medium text-xl title-color">Categories</h1>
			<MenuCategories />

			<h2 className="font-medium text-sm text-gray-500">Chosen by the editor</h2>
			<h1 className="font-medium text-xl title-color">Editors pick</h1>
			<MenuPosts withImage={true} />
		</div>
	);
};

export default Menu;
