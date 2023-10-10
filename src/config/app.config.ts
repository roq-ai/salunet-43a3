interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Doctor', 'Nurse', 'Patient', 'Administrator'],
  tenantName: 'Clinic',
  applicationName: 'Salunet',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user',
    'Manage clinic',
    'Manage patient',
    'Manage exam',
    'Manage prescription',
    'Manage file',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/100e0fbd-b4c6-47ce-a7cf-c28c01ed0804',
};
