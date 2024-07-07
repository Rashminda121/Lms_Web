"use client";

import { ReactConfetti } from "react-confetti";


import { useConfettiStore } from "@/hooks/use-confetti-store";

export const ConfettiProvider=()=>{
    const confetti=useConfettiStore();

    if(!confetti.isOpen)
}