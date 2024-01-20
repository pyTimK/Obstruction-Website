export interface AdminSettings {
  id: "settings";
  quasar: boolean;
  customer_service_phone: string;
}

export const constructEmptyAdminSettings = (): AdminSettings => {
  return {
    id: "settings",
    quasar: false,
    customer_service_phone: "",
  };
};
