
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import iceCoffeeImage from "@/assets/images/iced-coffee.png";

const app = () => {
	return (
		//2. ilalagay mo sa mga component
		<View style={styles.container}>
			<ImageBackground
				source={iceCoffeeImage}
				alt='hetlog'
				resizeMode='cover'
				style={styles.image}
			>
				<Text style={styles.text}>Coffee Shop</Text>
			</ImageBackground>
		</View>
	)
}

export default app

//1. gagawa ka css sa baba ng app.tsx
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30,
		padding: 25,
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	image: {
		width: '100%',
		height: '100%',
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	},
})