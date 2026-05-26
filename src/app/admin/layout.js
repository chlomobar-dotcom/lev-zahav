export const metadata = {
  title: "Espace administrateur",
  robots: { index: false, follow: false },
};

// Layout vide : pas de Header/Footer publics dans l'espace admin
export default function AdminLayout({ children }) {
  return <>{children}</>;
}
