import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import Decks from "./pages/Decks";
import DeckView from "./pages/DeckView";
import Import from "./pages/Import";
import Practice from "./pages/Practice";
import Review from "./pages/Review";
import Stats from "./pages/Stats";
import GrammarOverview from "./pages/GrammarOverview";
import GrammarLesson from "./pages/GrammarLesson";
import ShehataA2 from "./pages/ShehataA2";
import SpeakingTopics from "./pages/SpeakingTopics";
import GermanHelper from "./pages/GermanHelper";
import Reading from "./pages/Reading";
import TodoPage from "./pages/Todo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/decks" element={<Decks />} />
            <Route path="/decks/:deckId" element={<DeckView />} />
            <Route path="/import" element={<Import />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/review" element={<Review />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/grammar" element={<GrammarOverview />} />
            <Route path="/grammar/shehata-a2" element={<ShehataA2 />} />
            <Route path="/grammar/:lessonId" element={<GrammarLesson />} />
            <Route path="/speaking" element={<SpeakingTopics />} />
            <Route path="/helper" element={<GermanHelper />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
