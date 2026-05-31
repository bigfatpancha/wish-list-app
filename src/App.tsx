import "./App.css";
import WishList from "./components/WishList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Lista de regalos para Joaco
          </h1>
          <p className="text-center text-gray-600">
            si nos ordenamos, regalamos todos
          </p>
          <div className="max-w-2xl mx-auto mt-4 text-sm text-gray-500 bg-blue-50 rounded-lg p-4">
            <p className="text-center">
              <strong>💡 Cómo funciona:</strong> Marcá el regalo que querés
              comprar para evitar duplicados. Si te arrepentís, podés
              desmarcarlo para que otro pueda elegirlo. Los cambios se
              actualizan en tiempo real para todos.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Lo más importante es tu presencia
              </h3>
              <p className="text-purple-700 leading-relaxed">
                Si querés regalar otra cosa que no está en la lista no hay
                problema.
                <span className="font-semibold text-purple-900">
                  {" "}
                  Tu compañía y cariño son los regalos que más valoramos.
                </span>
                ¡Que estés ahí celebrando con nosotros es lo que realmente nos
                hace felices! 🥰
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <WishList />
      </main>
    </div>
  );
}

export default App;
