import {
  Suspense,
  lazy,
  useEffect,
  useState,
} from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Albums from "./routes/albums/albums.routes";
import Player from "./routes/player/player.routes";
import Queues from "./routes/queues/queues.routes";
import Search from "./routes/search/search.routes";
import Playlist from "./routes/playlists/playlist.routes";
import Artists from "./routes/artistis/artists.routes";
import Genre from "./routes/genre/genre.routes";
import FileLocation from "./routes/file-location/file-location'.routes";
import NavBar from "./routes/nav-bar/nav-bar.routes";

declare global {
  interface Window {
    toggleDevtools: unknown;
  }
}

const App = () => {
  const queryClient = new QueryClient();

  const ReactQueryDevtoolsProduction = lazy(() =>
    import(
      "@tanstack/react-query-devtools/build/lib/index.prod.js"
    ).then((d) => ({
      default: d.ReactQueryDevtools,
    }))
  );

  const [showDevtools, setShowDevtools] =
    useState(false);

  useEffect(() => {
    window.toggleDevtools = () =>
      setShowDevtools((old) => !old);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<NavBar />}
            ></Route>
            <Route
              path="index"
              element={<Player />}
            />
            <Route
              path="queues"
              element={<Queues />}
            />
            <Route
              path="storage"
              element={<FileLocation />}
            />
            <Route
              path="albums"
              element={<Albums />}
            />
            <Route
              path="artists"
              element={<Artists />}
            />
            <Route
              path="genres"
              element={<Genre />}
            />
            <Route
              path="playlists"
              element={<Playlist />}
            />
            <Route
              path="search"
              element={<Search />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};

export default App;
