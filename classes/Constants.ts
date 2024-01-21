export abstract class StorageNames { }

export const Constants = {
  obstructionSeconds: 60 * 5,
  Description:
    "Discover efficiency with our ANPR Camera System. Live video, license plate tracking, and seamless vehicle management. Elevate security and stay ahead with real-time insights.",
  serverBaseURL: "http://192.168.1.2:5000",
  ErrorCodes: {
    "11000": "Plate number already exists",
  }
};
export function getError(code: string | undefined) {
  switch (code) {
    case "11000":
      return "Plate number already exists";
    default:
      return "Something went wrong";
  }
}