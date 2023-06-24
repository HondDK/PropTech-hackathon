import { ChangeEvent, useState } from 'react';

interface FormInput<T> {
    value: T;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useFormInput = <T>(initialValue: T): FormInput<T> => {
    const [value, setValue] = useState<T>(initialValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setValue(event.target.value as T);
    };

    return {
        value,
        onChange: handleChange,
    };
};

export default useFormInput;
