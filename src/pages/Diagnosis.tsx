import React from "react";
import { DiagnosisWrapper } from "../components/styled-components/DiagnosisPage.styled";

export default function Diagnosis() {
  return (
    <DiagnosisWrapper>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Emergency Contact</th>
            <th>Blood Type</th>
            <th>Medical History</th>
            <th>Allergies</th>
            <th>Medications</th>
            <th>Insurance Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>John</td>
            <td>Doe</td>
            <td>1980-05-15</td>
            <td>Male</td>
            <td>123 Main St</td>
            <td>555-123-4567</td>
            <td>john.doe@email.com</td>
            <td>Mary Doe (555-765-4321)</td>
            <td>O+</td>
            <td>Hypertension</td>
            <td>Penicillin</td>
            <td>Aspirin</td>
            <td>ABC Health Insurance</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>1992-08-22</td>
            <td>Female</td>
            <td>456 Oak Ave</td>
            <td>555-987-6543</td>
            <td>jane.smith@email.com</td>
            <td>John Smith (555-876-5432)</td>
            <td>A-</td>
            <td>Asthma</td>
            <td>None</td>
            <td>Birth Control</td>
            <td>XYZ Insurance</td>
          </tr>
          <tr>
            <td>003</td>
            <td>Alice</td>
            <td>Johnson</td>
            <td>1985-03-10</td>
            <td>Female</td>
            <td>789 Pine St</td>
            <td>555-234-5678</td>
            <td>alice.johnson@email.com</td>
            <td>Bob Johnson (555-987-6543)</td>
            <td>B+</td>
            <td>Diabetes</td>
            <td>Penicillin</td>
            <td>Insulin</td>
            <td>DEF Health Insurance</td>
          </tr>
          <tr>
            <td>004</td>
            <td>Michael</td>
            <td>Williams</td>
            <td>1975-11-18</td>
            <td>Male</td>
            <td>567 Elm St</td>
            <td>555-345-6789</td>
            <td>michael.williams@email.com</td>
            <td>Susan Williams (555-876-5432)</td>
            <td>AB+</td>
            <td>High Cholesterol</td>
            <td>Penicillin</td>
            <td>Statins</td>
            <td>GHI Health Insurance</td>
          </tr>
          <tr>
            <td>005</td>
            <td>Emily</td>
            <td>Miller</td>
            <td>1988-07-03</td>
            <td>Female</td>
            <td>890 Maple Ave</td>
            <td>555-876-5432</td>
            <td>emily.miller@email.com</td>
            <td>David Miller (555-234-5678)</td>
            <td>O-</td>
            <td>None</td>
            <td>None</td>
            <td>Contraceptives</td>
            <td>JKL Health Insurance</td>
          </tr>
          <tr>
            <td>006</td>
            <td>Daniel</td>
            <td>Clark</td>
            <td>1972-12-28</td>
            <td>Male</td>
            <td>678 Birch St</td>
            <td>555-765-4321</td>
            <td>daniel.clark@email.com</td>
            <td>Emma Clark (555-987-6543)</td>
            <td>A+</td>
            <td>High Blood Pressure</td>
            <td>None</td>
            <td>Antibiotics</td>
            <td>MNO Health Insurance</td>
          </tr>
          <tr>
            <td>007</td>
            <td>Sophia</td>
            <td>Anderson</td>
            <td>1995-02-14</td>
            <td>Female</td>
            <td>345 Cedar St</td>
            <td>555-987-6543</td>
            <td>sophia.anderson@email.com</td>
            <td>John Anderson (555-234-5678)</td>
            <td>AB-</td>
            <td>None</td>
            <td>Penicillin</td>
            <td>None</td>
            <td>PQR Health Insurance</td>
          </tr>
          <tr>
            <td>008</td>
            <td>William</td>
            <td>Thomas</td>
            <td>1983-09-09</td>
            <td>Male</td>
            <td>876 Pine St</td>
            <td>555-234-5678</td>
            <td>william.thomas@email.com</td>
            <td>Olivia Thomas (555-765-4321)</td>
            <td>B-</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>STU Health Insurance</td>
          </tr>
        </tbody>
      </table>
    </DiagnosisWrapper>
  );
}
