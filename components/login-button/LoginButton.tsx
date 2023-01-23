import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '@/components/login-button/login-button.module.css';
export default function LoginButton() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<button className={styles.button} onClick={() => signOut()}>
					Sign out
				</button>
			</>
		);
	}
	return (
		<>
			<button className={styles.button} onClick={() => signIn()}>
				Sign in
			</button>
		</>
	);
}
