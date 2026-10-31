import { useAppSelector } from "./store/ hooks.ts";

function App() {
    const reduxState = useAppSelector((state) => state);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="rounded-xl bg-white p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-blue-600">
                    AppChat
                </h1>

                <p className="mt-3 text-gray-600">
                    Redux Toolkit đã được kết nối thành công!
                </p>

                <pre className="mt-4 rounded-lg bg-gray-100 p-3 text-sm">
          {JSON.stringify(reduxState, null, 2)}
        </pre>
            </div>
        </div>
    );
}

export default App;

