import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { useState } from 'react'

import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'

export function Home() {
	const [groups, setGroups] = useState([
		'costas',
		'ombro',
		'bíceps',
		'tríceps',
		'pernas'
	])
	const [groupSelectd, setGroupSelectd] = useState('costas')

	return (
		<VStack flex={1}>
			<HomeHeader />

			<FlatList
				data={groups}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<Group
						name={item}
						isActive={groupSelectd === item}
						onPress={() => setGroupSelectd(item)}
					/>
				)}
				horizontal
				showsVerticalScrollIndicator={false}
				_contentContainerStyle={{ px: 8 }}
				my={10}
				maxH={10}
			/>

			<VStack flex={1} px={8}>
				<HStack justifyContent={'space-between'}>
					<Heading color="gray.200" fontSize="md">
						Exercícios
					</Heading>
					<Text color="gray.200" fontSize="sm">
						4
					</Text>
				</HStack>
			</VStack>
		</VStack>
	)
}
