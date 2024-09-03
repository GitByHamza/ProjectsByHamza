import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAl8UMqavH3ysJUINcofEI73qxbTKrxY-w",
  authDomain: "chaachoo-7fc17.firebaseapp.com",
  databaseURL: "https://chaachoo-7fc17-default-rtdb.firebaseio.com/",
  projectId: "chaachoo-7fc17",
  storageBucket: "chaachoo-7fc17.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
