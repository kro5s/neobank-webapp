export interface Tab {
  title: string;
  value: string;
}

export interface TabsProps {
  value: string;
  onUpdate: (value: string) => void;
  tabs: Tab[];
  className?: string;
}