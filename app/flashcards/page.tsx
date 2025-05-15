import { ArrowLeft, ArrowRight, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { getVocabularyWords } from "@/lib/vocabulary"
import FlashcardComponent from "@/components/flashcard"

export default async function FlashcardsPage() {
  const words = await getVocabularyWords()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Flashcards</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to List
              </Button>
              <Button variant="outline" size="sm">
                <Shuffle className="h-4 w-4 mr-2" />
                Shuffle
              </Button>
            </div>
            <div className="text-sm">Card 1 of {words.length}</div>
          </div>
          <Progress value={(1 / words.length) * 100} className="h-2" />
        </header>

        <FlashcardComponent word={words[0]} />

        <div className="flex justify-between mt-8">
          <Button variant="outline" disabled>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">I need to review</Button>
            <Button>I know this word</Button>
          </div>
          <Button>
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
