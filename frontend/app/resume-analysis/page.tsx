'use client';
import Sidebar from "../components/sidebar"
import routes from "../routes";
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from '../utils/navigation';
import React from 'react';
const ResumeAnalysis=()=>{
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return(
    <>
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" />
        <p>Your Resume Analysis</p>
    </>
  )
}
export default ResumeAnalysis