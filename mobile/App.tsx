import {
	Roboto_400Regular,
	Roboto_700Bold,
	useFonts
} from '@expo-google-fonts/roboto'
import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'

import { Loading } from '@components/Loading'
import { AuthContextProvider } from '@contexts/AuthContext'
import { Routes } from '@routes/index'
import { THEME } from './src/theme'

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<AuthContextProvider>
				{fontsLoaded ? <Routes /> : <Loading />}
			</AuthContextProvider>
		</NativeBaseProvider>
	)
}
