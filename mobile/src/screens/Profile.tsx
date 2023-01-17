import { yupResolver } from '@hookform/resolvers/yup'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import {
	Center,
	Heading,
	ScrollView,
	Skeleton,
	Text,
	VStack,
	useToast
} from 'native-base'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TouchableOpacity } from 'react-native'
import * as yup from 'yup'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

import { useAuth } from '@hooks/useAuth'

const PHOTO_SIZE = 33

type FormDataProps = {
	name: string
	email: string
	password: string
	old_password: string
	confirm_password: string
}

const profileSchema = yup.object({
	name: yup.string().required('Informe o nome')
})

export function Profile() {
	const [photoIsLoading, setPhotoIsLoading] = useState(false)
	const [userPhoto, setUserPhoto] = useState('https://github.com/mgckaled.png')

	const toast = useToast()

	const { user } = useAuth()

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<FormDataProps>({
		defaultValues: {
			name: user.name,
			email: user.email
		},
		resolver: yupResolver(profileSchema)
	})

	async function handleUserPhotoSelected() {
		setPhotoIsLoading(true)

		try {
			const photoSelected = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 1,
				aspect: [4, 4],
				allowsEditing: true
			})

			if (photoSelected.canceled) {
				return
			}

			if (photoSelected.assets[0].uri) {
				const photoInfo = await FileSystem.getInfoAsync(
					photoSelected.assets[0].uri
				)
				console.log(photoInfo)

				if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
					return toast.show({
						title: 'Essa imagem é muito grande. Escolha uma de até 5MB.',
						placement: 'top',
						bgColor: 'red.500'
					})
				}

				setUserPhoto(photoSelected.assets[0].uri)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setPhotoIsLoading(false)
		}
	}

	async function handleProfileUpdate(data: FormDataProps) {
		console.log(data)
	}

	return (
		<VStack flex={1}>
			<ScreenHeader title="Perfil" />
			<ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
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
							source={{ uri: userPhoto }}
							alt="Foto do usuário"
							size={PHOTO_SIZE}
						/>
					)}

					<TouchableOpacity onPress={handleUserPhotoSelected}>
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

					<Controller
						control={control}
						name="name"
						render={({ field: { value, onChange } }) => (
							<Input
								bg="gray.600"
								placeholder="Nome"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.name?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="email"
						render={({ field: { value, onChange } }) => (
							<Input
								bg="gray.600"
								placeholder="E-mail"
								isDisabled
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>

					<Heading
						color="gray.200"
						fontSize="md"
						mb={2}
						alignSelf="flex-start"
						mt={12}
						fontFamily="heading"
					>
						Alterar senha
					</Heading>

					<Controller
						control={control}
						name="old_password"
						render={({ field: { onChange } }) => (
							<Input
								bg="gray.600"
								placeholder="Senha antiga"
								secureTextEntry
								onChangeText={onChange}
							/>
						)}
					/>

					<Controller
						control={control}
						name="password"
						render={({ field: { onChange } }) => (
							<Input
								bg="gray.600"
								placeholder="Nova senha"
								secureTextEntry
								onChangeText={onChange}
								errorMessage={errors.password?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="confirm_password"
						render={({ field: { onChange } }) => (
							<Input
								bg="gray.600"
								placeholder="Confirme a nova senha"
								secureTextEntry
								onChangeText={onChange}
								errorMessage={errors.confirm_password?.message}
							/>
						)}
					/>

					<Button
						title="Atualizar"
						mt={4}
						onPress={handleSubmit(handleProfileUpdate)}
					/>
				</Center>
			</ScrollView>
		</VStack>
	)
}
