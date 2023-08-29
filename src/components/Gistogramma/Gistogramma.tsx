'use client';
import React, { ReactNode, useState } from 'react';
import style from './Gistogramma.module.scss';
import cn from 'classnames';
import Count from '../UI/Count/Count';
import { dataApi } from '@/Services/Api';
import { Period } from '@/interfaces/data.interface';
import Spinner from '../UI/Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';

type GistogrammaProps = {
	period: string | undefined;
	setPeriod: (e: string | undefined) => void;
};

const Gistogramma = ({ period, setPeriod }: GistogrammaProps): JSX.Element => {
	const { data, isLoading, error } = dataApi.useFetchAllDataQuery(100, {});

	return (
		<>
			<div className={style.container}>
				{isLoading && <Spinner />}

				<div
					className={cn(style.column, {
						[style.column__lastMonth]: period === 'За последний месяц',
						[style.column__halfYear]: period === 'За последние 6 месяцев',
						[style.column__lastYear]: period === 'За последний год',
					})}>
					{period === 'За последний месяц' &&
						data?.map((item: Period) => {
							return Object.values(item.month).map(
								(month: number, i: number): ReactNode => {
									return (
										<div
											key={uuidv4()}
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
								}
							);
						})}
					{period === 'За последние 6 месяцев' &&
						data?.map((item: Period) => {
							return Object.values(item.half_year).map(
								(month: number, i: number): ReactNode => {
									return (
										<div
											key={uuidv4()}
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
								}
							);
						})}
					{period === 'За последний год' &&
						data?.map((item: Period) => {
							return Object.values(item.year).map(
								(month: number, i: number): ReactNode => {
									return (
										<div
											key={uuidv4()}
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
								}
							);
						})}
				</div>
				<div
					className={cn(style.numbers, {
						[style.numbers__lastYear]: period === 'За последний год',
						[style.numbers__lastMonth]: period === 'За последний месяц',
						[style.numbers__halfYear]: period === 'За последние 6 месяцев',
					})}>
					{period === 'За последний месяц' ? (
						<>
							<Count count={'01'} key={'01'} />
							<Count count={'05'} key={'05'} />
							<Count count={10} key={10} />
							<Count count={15} key={15} />
							<Count count={20} key={20} />
							<Count count={25} key={25} />
							<Count count={30} key={30} />
						</>
					) : period === 'За последний год' ? (
						<>
							<Count count={'Янв'} key={'Янв'} />
							<Count count={'Фев'} key={'Фев'} />
							<Count count={'Март'} key={'Март'} />
							<Count count={'Апр'} key={'Апр'} />
							<Count count={'Май'} key={'Май'} />
							<Count count={'Июнь'} key={'Июнь'} />
							<Count count={'Июль'} key={'Июль'} />
							<Count count={'Авг'} key={'Авг'} />
							<Count count={'Сент'} key={'Сент'} />
							<Count count={'Окт'} key={'Окт'} />
							<Count count={'Нояб'} key={'Нояб'} />
							<Count count={'Дек'} key={'Дек'} />
						</>
					) : period === 'За последние 6 месяцев' ? (
						<>
							<Count count={'Янв'} key={'Jan'} />
							<Count count={'Фев'} key={'Feb'} />
							<Count count={'Март'} key={'March'} />
							<Count count={'Апр'} key={'April'} />
							<Count count={'Май'} key={'May'} />
							<Count count={'Июнь'} key={'June'} />
						</>
					) : null}
				</div>
			</div>
		</>
	);
};

export default Gistogramma;
