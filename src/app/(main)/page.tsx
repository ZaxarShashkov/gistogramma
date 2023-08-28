'use client';
import { useState } from 'react';
import styles from './page.module.scss';
import Scale from '@/components/UI/Scale/Scale';
import Select from '@/components/UI/Select/Select';
import Gistogramma from '@/components/UI/Gistogramma/Gistogramma';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';

const store = setupStore();

export default function Home() {
	const [value, setValue] = useState<string | undefined>('За последний месяц');

	return (
		<Provider store={store}>
			<main className={styles.main}>
				<Select value={value} setValue={setValue} />
				<div className={styles.wrapper}>
					<Scale />
					<Gistogramma />
				</div>
			</main>
		</Provider>
	);
}
