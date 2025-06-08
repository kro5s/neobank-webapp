import React from "react";

export type InfoPageValue = React.ReactNode | string;

export interface InfoPageAction {
  title: string;
  handler: () => void;
  accent?: boolean;
}

export interface InfoPageProps {
  title: string;
  map: Record<string, InfoPageValue>;
  actions?: InfoPageAction[];
}