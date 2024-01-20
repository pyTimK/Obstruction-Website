function isValidPlateNumber(plateNumber: string): boolean {
    // Define the regular expression pattern
    const plateNumberPattern = /^[a-zA-Z]{3}[\s-]*\d{3,4}$/;
    console.log(`isValidPlateNumber: ${plateNumberPattern.test(plateNumber)}`)
    // Test if the plate number matches the pattern
    return plateNumberPattern.test(plateNumber);
}

export default isValidPlateNumber;