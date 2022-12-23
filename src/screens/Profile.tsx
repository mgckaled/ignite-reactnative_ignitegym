import { Center, ScrollView, Skeleton, Text, VStack } from 'native-base'
import { useState } from 'react'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { TouchableOpacity } from 'react-native'

const PHOTO_SIZE = 33

export function Profile() {
	const [photoIsLoading, setPhotoIsLoading] = useState(false)

	return (
		<VStack flex={1}>
			<ScreenHeader title="Perfil" />
			<ScrollView>
				<Center mt={6} px={10}>
					{photoIsLoading ? (
						<Skeleton
							w={PHOTO_SIZE}
							h={PHOTO_SIZE}
							rounded="full"
							startColor="gray.400"
							endColor="gray.300"
						/>
					) : (
						<UserPhoto
							source={{ uri: 'https://github.com/mgckaled.png' }}
							alt="Foto do usuário"
							size={PHOTO_SIZE}
						/>
					)}
					<TouchableOpacity>
						<Text
							color="green.500"
							fontWeight="bold"
							fontSize="md"
							mt={3}
							mb={8}
						>
							Alterar Foto
						</Text>
					</TouchableOpacity>
				</Center>
			</ScrollView>
		</VStack>
	)
}
