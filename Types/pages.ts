import { StackNavigationProp } from "@react-navigation/stack";
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { UserDetails } from "./apis";

// Tipagens para MainStack
export type MainStackParamList = {
  Home: { user: UserDetails };
  Search: undefined;
  Profile: undefined;
};

// Tipagens para RootStack
export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Main: NavigatorScreenParams<MainStackParamList>;
};

// Tipagens para navegação
export type HomeScreenProp = StackNavigationProp<MainStackParamList, 'Home'>;
export type SignInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
export type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;


// Tipagens para rotas
export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'Home'>;
export type ProfileScreenRouteProp = RouteProp<MainStackParamList, 'Profile'>;
