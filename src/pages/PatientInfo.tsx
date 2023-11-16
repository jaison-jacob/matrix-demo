import React from "react";
import { PatientInfoWrapper } from "../components/styled-components/PatientInfoPage.styled";
import { patientData } from "../data/patientData";
import { patientInfo } from "../data/patientInfo";
import {
  FlexContainer,
  SizedBox,
} from "../components/styled-components/Global.styled";
import Breadcrumb from "../components/breadcrumb/breadcrumb";

export default function PatientInfo() {
  return (
    <PatientInfoWrapper>
      <Breadcrumb title={"Patient Info"}></Breadcrumb>
      <SizedBox height={20} />
      <FlexContainer>
        <div>
          <label>First Name: </label>
          <label>{patientData[0].firstName}</label>
        </div>
        <div>
          <label>Last Name: </label>
          <label>{patientData[0].lastName}</label>
        </div>
        <div>
          <label>DOB: </label>
          <label>{patientData[0].dateOfBirth}</label>
        </div>
        <div>
          <label>Physician: </label>
          <label>{patientData[0].physician}</label>
        </div>
      </FlexContainer>
      <SizedBox height={10} />
      <FlexContainer>
        <div>
          <label>Provider NPI: </label>
          <label>{patientData[0].providerNPI}</label>
        </div>
        <div>
          <label>DOS From: </label>
          <label>{patientData[0].DOSFrom}</label>
        </div>
        <div>
          <label>DOS Through: </label>
          <label>{patientData[0].DOSthrough}</label>
        </div>
      </FlexContainer>
      <SizedBox height={20} />

      <h3>Billing Info</h3>
      <FlexContainer>
        <div>
          <label>Total Payments: </label>
          <label>{patientInfo.billingInfo.totalPayments}</label>
        </div>
        <div>
          <label>Total Charges: </label>
          <label>{patientInfo.billingInfo.totalCharges}</label>
        </div>
        <div>
          <label>Insurance Provider: </label>
          <label>{patientInfo.billingInfo.insuranceProvider}</label>
        </div>
        <div>
          <label>Policy Number: </label>
          <label>{patientInfo.billingInfo.policyNumber}</label>
        </div>
      </FlexContainer>
      <SizedBox height={20} />

      <h3>Encounter Details</h3>
      <FlexContainer>
        <div>
          <label>Date Of Service From: </label>
          <label>{patientInfo.encounterDetails.dateOfServiceFrom}</label>
        </div>
        <div>
          <label>Date Of Service Through: </label>
          <label>{patientInfo.encounterDetails.dateOfServiceThrough}</label>
        </div>
        <div>
          <label>Attending Physician: </label>
          <label>{patientInfo.encounterDetails.attendingPhysician}</label>
        </div>
        <div>
          <label>Provider NPI: </label>
          <label>{patientInfo.encounterDetails.providerNPI}</label>
        </div>
      </FlexContainer>
      <SizedBox height={20} />

      {/* {Object.keys(patientInfo.medicalInfo).map((medicalInfo, i) => {
        return (
          <div>
            <h3>{medicalInfo}</h3>
            <table key={i}>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {patientInfo.medicalInfo[medicalInfo].map((data, j) => {
                  return (
                    <tr key={j}>
                      {Object.keys(data).map((key, k) => {
                        return <td key={k}>{data[key]}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <SizedBox height={10} />
          </div>
        );
      })} */}

      <h3> Diagnosis Result</h3>
      <img src={"/diagnosis.jpg"} width={400} />

      <h3> Documents</h3>

      <div className="patient-list-image">
        <img src={"/documents.png"} width={'100%'} />
      </div>
      <SizedBox height={20} />
    </PatientInfoWrapper>
  );
}

const TableHead = (object) => {
  return Object.keys(object).map((key, i) => {
    return <th key={i}>{key}</th>;
  });
};
