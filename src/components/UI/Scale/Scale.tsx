import React from 'react';
import styles from './Scale.module.scss';
import Count from '../Count/Count';

const Scale = (): JSX.Element => {
	return (
		<div className={styles.scale}>
			<Count count={10000} />
			<Count count={5000} />
			<Count count={2000} />
			<Count count={1000} />
			<Count count={500} />
			<Count count={0} />
		</div>
	);
};

export default Scale;
