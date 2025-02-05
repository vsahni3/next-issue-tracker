'use client'
import React from 'react';
import { TextField, TextArea, Button } from '@radix-ui/themes';

const NewIssue = () => {
  return (
    <div className='max-w-xl p-5 space-y-3'>
    <TextField.Root placeholder="Title"></TextField.Root>
    <TextArea placeholder="Description"></TextArea>
    <Button>Submit Issue</Button>
    </div>
  );
};

export default NewIssue;
