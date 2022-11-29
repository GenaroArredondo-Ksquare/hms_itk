# hms_itk
This is the repo for the Final Project of the Javascript 6G Course

Models

The User Model will store basic information about all users and what role do they have
Interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: string;
  email: string;
  password: string;
  is_active: boolean;
  role_id: number;
  }
 
The Role model will contain the three types of role that the website is going to have
Interface Role {
  user_id: mumber;
  role_id: number;
  role_name: string;
 }

The Doctor model will store additional information for when the user has the role of a doctor
Interface Doctor {
  user_id: number;
  doctor_id: mumber;
  role_id: number;
  department_id: number;
  is_available: boolean;
  }

The Patient model will store additional information for when the user has the role of a patient
Interface Patient {
  user_id: number;
  patient_id: number;
  role_id: number;
  height: number;
  weight: number;
  bloodType_id: number;
  }

The Department model is going to store how many medical departments are available
Interface Department {
  department_id: number;
  department_name: string;
  }

The blood type model is going to store how many blood types does all the patients have
Interface BloodType {
  bloodType_id: number;
  bloodType_name: string;
  }

The Appointment model is going to store all the information needed to create appointments
Interface Appointment {
  appointment_id: number;
  patient_id: number;
  doctor_id: number;
  date: Date;
  time: number;
  status: string;
  description: string;
  department_id: number;
  }
  
The Admin model will store additional information about the Admin role
Interface Admin {
  admin_id: number;
  user_id: number;
  auth: string;
  }
