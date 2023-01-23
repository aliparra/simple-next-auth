import styles from '@/components/navbar/navbar.module.css';
import Link from 'next/link';
import { ReactElement } from 'react';
import LoginButton from '../login-button/LoginButton';
/**
 * @remarks
 * A functional component that displays a navbar
 * @param NavbarProps - Type object inferring `links` property.
 * @returns  ReactElement that represents the Navbar component.
 */
export function Navbar(): ReactElement {
	return (
		<div className={styles.navbar__wrapper}>
			<Link className={styles.navbar__link} href="/">
				Inicio
			</Link>
			<LoginButton />
		</div>
	);
}
