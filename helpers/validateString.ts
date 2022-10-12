const validateString = (string: string) => {
    return string.trim().length > 0 && string.trim().length <= 255 ? true : false;
};

export default validateString;