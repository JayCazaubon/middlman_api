import React, {useCallback, useState} from 'react';
import {Stack, RadioButton} from '@shopify/polaris';

function Index() {
  const [value, setValue] = useState('disabled');

  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    [],
  );

  return (
    <Stack vertical>
      <RadioButton
        label="Middlman"
        helpText="Get your package delivered to you within hours"
        checked={value === 'disabled'}
        id="disabled"
        name="accounts"
        onChange={handleChange}
      />
      <RadioButton
        label="Shipping"
        helpText="Wait longer to get your packages instead"
        id="optional"
        name="accounts"
        checked={value === 'optional'}
        onChange={handleChange}
      />
    </Stack>
  );
}

export default Index;
