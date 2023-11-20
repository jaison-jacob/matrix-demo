export const patientInfo = {
    "patientName": "Christine Davis",
    "patientId": "CD123456",
    "dateOfBirth": "1978-04-22",
    "gender": "Female",
    "assessmentId": "A456789",
    "medicalInfo": {
      "CPT Codes": [
        {"code": "99214", "description": "Office or other outpatient visit"},
        {"code": "12002", "description": "Simple wound repair"}
      ],
      "Procedure Codes": [
        {"code": "S9083", "description": "Global fee urgent care"},
        {"code": "X5002", "description": "Standard lab services"}
      ],
      "Diagnostic Codes": [
        {"code": "I10", "description": "Essential (primary) hypertension"},
        {"code": "E11.9", "description": "Type 2 diabetes mellitus without complications"},
        {"code": "M54.2", "description": "Cervicalgia"}
      ]
    },
    "billingInfo": {
      "totalPayments": 350.00,
      "totalCharges": 450.00,
      "insuranceProvider": "HealthCare Inc.",
      "policyNumber": "HC987654"
    },
    "encounterDetails": {
      "dateOfServiceFrom": "2023-11-01",
      "dateOfServiceThrough": "2023-11-02",
      "attendingPhysician": "Dr. Sarah Johnson",
      "providerNPI": "1234567890"
    }
  };
  