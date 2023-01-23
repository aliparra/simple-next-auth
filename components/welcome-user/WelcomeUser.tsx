import styles from '@/components/welcome-user/welcome-user.module.css';
import Link from 'next/link';
import { ReactElement } from 'react';
import LoginButton from '../login-button/LoginButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export function WelcomeUser(): ReactElement {
	const { data: session, status } = useSession();

	return (
		<div className={styles.welcome__wrapper}>
			{status !== 'loading' ? (
				status === 'authenticated' ? (
					<div className={styles.welcome__content}>
						<h1>User account data: </h1>
						<Image
							src={session?.user?.image || ''}
							alt="prueba"
							width={300}
							height={300}
						/>
						<p>Name: {session?.user?.name}</p>
						<p>Email: {session?.user?.email}</p>
					</div>
				) : (
					<div className={styles.welcome__content}>
						<h1>Please sign in</h1>
						<LoginButton />
					</div>
				)
			) : (
				<h1>Loading</h1>
			)}
		</div>
	);
}
