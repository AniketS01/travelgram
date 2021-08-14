import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import database from '@react-native-firebase/database';

export const signUp = (data) => async (dispatch) => {
  const {name, instaUserName, bio, email, password, country, image} = data;

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      console.log(data);
      console.log('user created success...');
      database()
        .ref('/users/' + data.user.uid)
        .set({
          name,
          instaUserName,
          country,
          image,
          bio,
          uid: data.user.uid,
        })
        .then(() => console.log('data set success'));
      Snackbar.show({
        text: 'account created',
        textColor: 'white',
        backgroundColor: 'green',
      });
    })
    .catch((err) => {
      console.log(err);
      Snackbar.show({
        text: 'signUp fail',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signIn = (data) => async (diapatch) => {
  console.log(data);
  const {email, password} = data;

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('sign in success');
      Snackbar.show({
        text: 'you are signed in',
        textColor: 'white',
        backgroundColor: 'green',
      });
    })
    .catch((err) => {
      console.log(err);
      Snackbar.show({
        text: 'sign in failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};

export const signOut = () => async (dispatch) => {
  auth()
    .signOut()
    .then(() => {
      Snackbar.show({
        text: 'you are signed out',
        textColor: 'white',
        backgroundColor: 'green',
      });
    })
    .catch((err) => {
      console.log(err);
      Snackbar.show({
        text: 'sign out failed',
        textColor: 'white',
        backgroundColor: 'red',
      });
    });
};
