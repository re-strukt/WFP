import React, { Component } from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Login from './Login';
import Home from './HomeDrawer';

const NonAuthenticatedStack = createStackNavigator() 
const AuthContext = React.createContext();

const MainScreenComponent = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
        
        <NonAuthenticatedStack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              ...TransitionPresets.SlideFromRightIOS
            }}
        >
            {
                state.userToken == null ? 
                (
                    <NonAuthenticatedStack.Screen 
                      name="Login" 
                      component={Login} 
                      options={{
                        animationTypeForReplace: state.userToken !== null ? 'push' : 'push',
                      }}
                    />
                ) : (
                    <NonAuthenticatedStack.Screen 
                      name="Home" 
                      component={Home}
                      options={{
                        animationTypeForReplace: state.userToken !== null ? 'push' : 'pop',
                      }}
                    />
                )
            }
        </NonAuthenticatedStack.Navigator>
    </AuthContext.Provider>
  );
}


export default {
    MainScreenComponent,
    AuthContext
}