import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDybKDnmgJWtVqMoYrUQBYVM09c-JRj4XQ',
	authDomain: 'happai-react-project.firebaseapp.com',
	projectId: 'happai-react-project',
	storageBucket: 'happai-react-project.appspot.com',
	messagingSenderId: '292284952262',
	appId: '1:292284952262:web:1686c084e8fae36b2831c7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
