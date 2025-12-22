'use client';

import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

import { formConfig } from '../config/formConfig';
import { FieldConfig } from '../types/form';

export default function DynamicForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    localStorage.setItem('formData', JSON.stringify(data));
  };

  const renderField = (field: FieldConfig) => {
    switch (field.fieldType) {
      case 'TEXT':
        return (
          <TextField
            fullWidth
            label={field.label}
            {...register(field.name, { required: field.required })}
          />
        );

      case 'RADIO':
        return (
          <RadioGroup>
            {field.options?.map((opt) => (
              <FormControlLabel
                key={opt}
                value={opt}
                control={<Radio />}
                label={opt}
                {...register(field.name)}
              />
            ))}
          </RadioGroup>
        );

      case 'LIST':
        return (
          <Select fullWidth defaultValue="">
            {field.options?.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ maxWidth: 400 }}>
        {formConfig.map((field) => (
          <Box key={field.name} mb={2}>
            {renderField(field)}
          </Box>
        ))}

        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Box>
    </form>
  );
}
