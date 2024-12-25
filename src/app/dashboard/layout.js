export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Links da navegação da dashboard</nav>

      <div>{children}</div>
    </div>
  );
}
