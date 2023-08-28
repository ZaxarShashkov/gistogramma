import React from 'react';
import styles from './Count.module.scss';

type CountProps = {
	count: number | string;
};

const Count = ({ count }: CountProps) => {
	return (
		<>
			<p className={styles.count}>{count}</p>
		</>
	);
};

export default Count;
