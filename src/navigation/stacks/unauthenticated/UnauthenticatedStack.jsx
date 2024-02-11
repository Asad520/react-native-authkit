import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Onboarding } from '@screens/auth';

const Stack = createNativeStackNavigator();

export const UnauthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
);
