import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/ui-elements/Button/Button.js'

storiesOf('Button', module)
    .add('Default Button', () => (
        <Button message="Submit" mode="default" />
    ))
    .add('Submit Button', () => (
        <Button message="Submit" mode="submit" />
    ));