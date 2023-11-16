import React, { useState } from "react";
import { VisitWrapper } from "../components/styled-components/VisitPage.styled";
import { patientData } from "../data/patientData";
import { useNavigate } from "react-router-dom";
import { matrixPath } from "../routes/routePath";
import Breadcrumb from "../components/breadcrumb/breadcrumb";

const headerValues = [
  { label: "CMS Plan Number", field: "CMSPlanNumber" },
  { label: "First Name", field: "firstName" },
  { label: "Last Name", field: "lastName" },
  { label: "Patient Id", field: "patientId" },
  { label: "Assessment Id", field: "assessmentId" },
  { label: "Date Of Birth", field: "dateOfBirth" },
  { label: "Physician", field: "physician" },
  { label: "Provider NPI", field: "providerNPI" },
  { label: "DOS From", field: "DOSFrom" },
  { label: "DOS Through", field: "DOSthrough" },
];

export default function Visit() {
  const navigate = useNavigate();

  return (
    <VisitWrapper>
      <Breadcrumb title={"Visit Assessment Information"}></Breadcrumb>
      <table>
        <thead>
          <tr>
            {headerValues.map((data, i) => {
              return <th key={i}>{data.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {patientData.map((data, i) => {
            return (
              <tr key={i}>
                {headerValues.map((head, i) => {
                  if (head.field === "assessmentId") {
                    return (
                      <td
                        className="active_link"
                        key={i}
                        onClick={() => {
                          navigate(matrixPath.VISITPATIENT);
                        }}
                      >
                        {data[head.field]}
                      </td>
                    );
                  }
                  return <td key={i}>{data[head.field]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </VisitWrapper>
  );
}
