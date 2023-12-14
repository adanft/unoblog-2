'use client';

import React, { ChangeEvent } from 'react';
import { Category } from '@prisma/client';
import useForm from '@/lib/hooks/use-form';
import { useRouter } from 'next/navigation';
import styles from './categoriesPage.module.css';

function Categories() {
	const router = useRouter();
	const [input, setInput] = useForm<Category>({
		slug: '',
		title: '',
		color: '#000000',
		id: '',
	});

	function handleOnSaveCategory(event: ChangeEvent<HTMLFormElement>): void {
		event.preventDefault();

		fetch('http://localhost:3000/api/categories', {
			method: 'POST',
			body: JSON.stringify(input),
		})
			.then((response) => {
				router.push('/');
				console.log({ response });
			})
			.catch((error) => {
				console.log({ error });
			});
	}

	return (
		<div className="mt-16">
			<div>
				<form
					className="box mx-auto flex flex-col w-80 gap-4"
					onSubmit={handleOnSaveCategory}
				>
					<div className="flex flex-col gap-2">
						<input
							className={`${styles.formInput} text-color bg-primary`}
							type="text"
							name="title"
							id="title"
							placeholder="Write main name..."
							defaultValue={input.title}
							onChange={setInput}
						/>
						<label className="-order-1 text-sm text-color font-medium" htmlFor="title">
							Title
						</label>
					</div>
					<div className="flex flex-col gap-2">
						<input
							className={`${styles.formInput} text-color bg-primary`}
							type="text"
							name="slug"
							id="slug"
							placeholder="Write short name..."
							defaultValue={input.slug}
							onChange={setInput}
						/>
						<label className="-order-1 text-sm text-color font-medium" htmlFor="slug">
							Slug
						</label>
					</div>
					<div className="flex flex-col gap-2">
						<input
							className={`${styles.formInputColor} bg-inherit w-full h-10`}
							type="color"
							name="color"
							id="color"
							defaultValue={input.color!}
							onChange={setInput}
						/>
						<label className="-order-1 text-sm text-color font-medium" htmlFor="color">
							Color
						</label>
					</div>
					<div className="text-center">
						<button
							className="text-white bg-primary-color rounded-full px-8 py-4 leading-4"
							type="submit"
						>
							Add category
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Categories;
