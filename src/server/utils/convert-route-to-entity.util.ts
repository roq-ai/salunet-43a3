const mapping: Record<string, string> = {
  clinics: 'clinic',
  exams: 'exam',
  files: 'file',
  patients: 'patient',
  prescriptions: 'prescription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
