// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = initialFormData => {
    const [formData, setFormData] = useState(initialFormData);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [formData, showSuccessMessage, handleChanges, handleSubmit];
}