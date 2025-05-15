import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import VocabularyList from "@/components/vocabulary-list"
import { getVocabularyWords } from "@/lib/vocabulary"

export default async function HomePage() {
  const words = await getVocabularyWords()

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">English Vocabulary Builder</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Learn and master 1000 essential English words with definitions, images, and flashcards
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search for words..." className="pl-8" />
          </div>
          <Link href="/flashcards">
            <Button>Start Flashcards</Button>
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Vocabulary List</h2>
            <div className="flex items-center gap-2">
              <select className="p-2 border rounded-md">
                <option value="all">All Categories</option>
                <option value="common">Common Words</option>
                <option value="academic">Academic</option>
                <option value="business">Business</option>
                <option value="travel">Travel</option>
              </select>
            </div>
          </div>
          <VocabularyList words={words} />
        </section>
      </div>
    </div>
  )
}
