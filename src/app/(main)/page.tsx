'use client';
import { useState } from 'react';
import styles from './page.module.scss';
import Scale from '@/components/UI/Scale/Scale';
import Select from '@/components/UI/Select/Select';
import Gistogramma from '@/components/Gistogramma/Gistogramma';
import { Provider } from 'react-redux';
import { setupStore } from '@/store/store';

const store = setupStore();

export default function Home() {
	const [period, setPeriod] = useState<string | undefined>('За последний месяц');

	return (
		<Provider store={store}>
			<main className={styles.main}>
				<Select period={period} setPeriod={setPeriod} />
				<div className={styles.wrapper}>
					<Scale />
					<Gistogramma period={period} setPeriod={setPeriod} />
				</div>
			</main>
		</Provider>
	);
}
