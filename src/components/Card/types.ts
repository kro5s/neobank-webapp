import React from "react";

export interface CardProps {
  title: string;
  subtitle?: string;
  total: number;
  meta: React.ReactNode;
  status: string;
  detailsHref: string;
  dateInfo: string;
}