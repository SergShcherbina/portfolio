export const inputModel = [
    {
        labelText: 'Ваше имя',
        name: 'firstName',
        placeholder: 'Ваше имя',
    },
    {
        labelText: 'Ваш email *',
        name: 'email',
        placeholder: 'Ваш email',
        pattern: '^\\S+@\\S+\\.\\S+$',
        errorMessage: 'Неверный email',
        required: true,
    },
    {
        labelText: ' Тема *',
        name: 'theme',
        placeholder: 'Тема идеи',
        required: true,
        errorMessage: 'Обязательное поле',
    },
]
