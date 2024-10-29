import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppRouter }  from "@/routes/index";
import { AuthProvider } from "@app/context/authContext";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<AppRouter/>
				<Toaster
					position="top-center"
					toastOptions={{
						duration: 3000
					}}
				/>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
