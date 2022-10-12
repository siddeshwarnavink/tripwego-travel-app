function validatePhoneNumber(phoneNumber: string) {
    return phoneNumber.trim().length === 10;
}

export default validatePhoneNumber;