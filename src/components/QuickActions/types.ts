import React from "react";

export interface QuickAction {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export interface QuickActionsProps {
  actions: QuickAction[];
}