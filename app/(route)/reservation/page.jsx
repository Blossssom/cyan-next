"use client";
import React, { useState } from "react";
import ReservationIntro from "@/app/_components/reservation/ReservationIntro";
import ReservationTime from "@/app/_components/reservation/ReservationTime";
import { CSSTransition } from "react-transition-group";
import "./transitions.css";

export default function page() {
  const [step, setStep] = useState(1);

  const nextStepHandler = () => {
    setStep(step + 1);
  };

  const prevStepHandler = () => {
    if (step <= 1) {
      return;
    }
    setStep(step - 1);
  };
  return (
    <div className="w-full h-full flex justify-center relative">
      {step === 1 && <ReservationIntro nextStep={nextStepHandler} />}
      {step === 2 && (
        <ReservationTime
          prevStep={prevStepHandler}
          nextStep={nextStepHandler}
        />
      )}
    </div>
  );
}
