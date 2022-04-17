import * as React from 'react';

import {ChakraProvider} from '@chakra-ui/react';

const withChakra = (StoryFunction) => {
	return (
		<ChakraProvider>
			<StoryFunction />
		</ChakraProvider>
	);
};

export const decorators = [withChakra];
