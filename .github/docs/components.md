# Components

## Funções

## Arquivos

### [`Button.tsx`](../../mobile/src/components/Button.tsx)

- `Button as ButtonNativeBase` - utilizado para diferenciar o nome do componente nativo do componente criado, evitando-se erros ou conflitos.
- `IButtonProps` - tipagem pré-definida que carrega todas as propriedades do componente nativo (`Button`).
- A propriedade `variant` dentro da `function Button()` foi definida para indicar o valor padrão do componente;
- prop `w="full"` - ocupa toda a largura da tela;
- prop `borderWidth` - espessura da linha/borda
- prop `rounded` - similar ao `border-radius` do CSS;
- prop `_pressed` - define as propriedades do botão quando o mesmo estiver pressionado;

### [`ExerciseCard.tsx`](../../mobile/src/components/ExerciseCard.tsx)

- source={{uri:`${api.defaults.baseURL}/exercise/thumb/${data.thumb}}}` - endereço base do servidor/exercise/thumb/nome da foto salva na api (`<../../api/exercise/thumb>`).

### [`Group.tsx`](../../mobile/src/components/Group.tsx)

- `IPressableProps` - tipagem pré-definida que carrega todas as propriedades do componente nativo (`Pressable`).
- `Pressable` - tem a mesma fucionalidade do `TouchableOpacity`, porém sem o efeito de opacidade.
- prop `overflow="hidden"` - mantem o texto dentro do limite do componente
- prop `textTransform={'uppercase'}` - transforma o texto deixando-o com letras maiúsculas.

### [`HistoryCard.tsx`](../../mobile/src/components/HistoryCard.tsx)

### [`HomeHeader.tsx`](../../mobile/src/components/HomeHeader.tsx)

### [`Input.tsx`](../../mobile/src/components/Input.tsx)

### [`Loading.tsx`](../../mobile/src/components/Loading.tsx)

Este componente gera um ícone de carregamento verde centralizado na tela do dispositivo.

### [`ScreenHeader.tsx`](../../mobile/src/components/ScreenHeader.tsx)

### [`UserPhoto.tsx`](../../mobile/src/components/UserPhoto.tsx)

[voltar](index.md) para página de index
