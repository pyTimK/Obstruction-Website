const formatPlateNumber = (plate_number: string): string => {
    return plate_number.substring(0, 3) + " " + plate_number.substring(3);
}

export default formatPlateNumber;