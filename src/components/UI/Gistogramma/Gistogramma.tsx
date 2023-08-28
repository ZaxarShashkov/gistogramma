'use client';
import React, { ReactNode, useState } from 'react';
import style from './Gistogramma.module.scss';
import cn from 'classnames';
import Count from '../Count/Count';
import { dataApi } from '@/Services/Api';
import { Provider } from 'react-redux';

type Props = {};

const Gistogramma = (props: Props) => {
	const [value, setValue] = useState<boolean>(false);

	const { data, isLoading, error } = dataApi.useFetchAllDataQuery(100, {});

	console.log(data);

	return (
		<>
			<div className={style.container}>
				<div className={style.column}>
					{data?.map((item: any) => {
						return Object.values(item.month).map((month: any, i: number): ReactNode => {
							console.log(month);
							return (
								<div
									key={month + i}
									className={style.column__default}
									data-title={month}
									style={
										month > 0 && month <= 500
											? { height: month / 10 + 'px' }
											: month > 500 && month <= 1000
											? { height: month / 10 + 'px' }
											: month > 1000 && month <= 2000
											? { height: (month - 1000) / 20 + 100 + 'px' }
											: month > 2000 && month <= 5000
											? { height: (month - 2000) / 60 + 150 + 'px' }
											: month > 5000 && month <= 10000
											? { height: (month - 5000) / 100 + 200 + 'px' }
											: { height: '1px' }
									}></div>
							);
						});
					})}
				</div>
				<div className={style.numbers}>
					<Count count={'01'} />
					<Count count={'05'} />
					<Count count={10} />
					<Count count={15} />
					<Count count={20} />
					<Count count={25} />
					<Count count={30} />
				</div>
			</div>
		</>
	);
};

export default Gistogramma;
