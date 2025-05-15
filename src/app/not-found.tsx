import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Seite nicht gefunden</h2>
      <p className="text-lg mb-8 max-w-xl">
        Die gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-klare-accent text-white rounded-md hover:bg-opacity-90 transition-all"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
