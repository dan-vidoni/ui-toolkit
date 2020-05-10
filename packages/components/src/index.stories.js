import tokensHtml from '@demo-ui-toolkit/design-tokens/dist/tokens.html'
import { storiesOf } from '@storybook/react';
import React from 'react';

function createMarkup() {
    return { __html: tokensHtml };
}
const stories = storiesOf('Design tokens', module)
stories.add('Documentation', () => <div dangerouslySetInnerHTML={createMarkup()}></div>)