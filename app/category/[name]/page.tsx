import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import VocabularyList from "@/components/vocabulary-list"
import { getVocabularyWords } from "@/lib/vocabulary"

interface CategoryPageProps {
  params: {
    name: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const words = await getVocabularyWords()
  const categoryName = decodeURIComponent(params.name)

  // Filter words by category
  const categoryWords = words.filter(
    (word) => (word.category || "uncategorized").toLowerCase() === categoryName.toLowerCase(),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/categories">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to categories
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName} Words</h1>

      {categoryWords.length > 0 ? (
        <VocabularyList words={categoryWords} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No words found in this category.</p>
        </div>
      )}
    </div>
  )
}
