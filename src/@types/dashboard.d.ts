interface IconType {
  className: string;
}

interface User {
  email_address: string;
  full_name: string;
  role: string;
  create_password: string;
  id?: string;
  success?: boolean;
}

interface FormPayload extends User {
  create_password: string;
}

interface ApiResponse {
  data: FormPayload;
  status: number;
}

interface DelResponse {
  success: boolean;
}
