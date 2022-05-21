export default function Footer() {
  return (
    <footer className="font-sansf py-4 text-white bg-moundbatten">
      <p className="mx-auto text-center max-w-5xl">
        {`Copyright `}&copy; {` ${new Date().getFullYear()} FarhanSwitch`}
      </p>
    </footer>
  );
}
