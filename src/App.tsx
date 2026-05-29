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
          <div className="max-w-2xl mx-auto mt-4 text-sm text-gray-500 bg-yellow-50 rounded-lg p-4">
            <p className="text-center mt-2">
              <strong>⚠️ Muy importante:</strong> Si querés regalar otra cosa
              que no está en la lista no hay problema y siempre tené en cuenta
              que <strong>tu presencia es el regalo más lindo.</strong>
            </p>
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
