import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[90vh] text-center w-full max-w-4xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 shadow-sm border border-blue-200">
          Revoluciona tu Networking 🚀
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Tarjetas de Presentación <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Digitales & Inteligentes
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Olvídate del papel y de configuraciones complejas. <strong className="text-slate-800">Nosotros diseñamos y programamos tu tarjeta por ti.</strong> Te entregamos un link único (y código QR) con un diseño premium adaptado a tu empresa para que compartas tu contacto al instante.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all">
            Solicitar mi Tarjeta
          </button>
          <button className="px-8 py-4 rounded-xl bg-white text-slate-900 border-2 border-slate-200 font-bold text-lg shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all">
            Ver Diseños
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mt-8">
        <div className="p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
          <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">100% Móvil</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Guarda contactos directamente en la agenda de tus clientes con un solo toque, sin descargar apps extrañas.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
          <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Diseño Premium</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Desde acabados minimalistas hasta texturas industriales. Personalizamos la interfaz para que encaje con tu marca.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
          <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Fácil de Compartir</h3>
          <p className="text-slate-600 text-sm leading-relaxed">A través de Códigos QR, enlaces cortos o tecnología NFC. Comparte todo tu ecosistema digital al instante.</p>
        </div>
      </div>

    </div>
  );
}
