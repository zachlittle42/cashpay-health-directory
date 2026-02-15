import ScrollTracker from '@/components/tracking/ScrollTracker';

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollTracker />
    </>
  );
}
