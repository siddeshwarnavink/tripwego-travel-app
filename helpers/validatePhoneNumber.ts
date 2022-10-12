function validatePhoneNumber(phoneNumber: string) {
    return phoneNumber.trim().length === 10  ? true : false;
}

export default validatePhoneNumber;