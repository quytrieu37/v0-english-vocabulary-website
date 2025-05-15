import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getVocabularyWords } from "@/lib/vocabulary"

export default async function CategoriesPage() {
  const words = await getVocabularyWords()

  // Get unique categories and count words in each
  const categories = words.reduce(
    (acc, word) => {
      const category = word.category || "Uncategorized"
      if (!acc[category]) {
        acc[category] = {
          name: category,
          count: 0,
          words: [],
        }
      }
      acc[category].count++
      if (acc[category].words.length < 5) {
        acc[category].words.push(word)
      }
      return acc
    },
    {} as Record<string, { name: string; count: number; words: typeof words }>,
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Word Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(categories).map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="capitalize">{category.name}</CardTitle>
              <CardDescription>{category.count} words</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.words.slice(0, 5).map((word) => (
                  <Link href={`/word/${word.id}`} key={word.id}>
                    <Badge variant="outline" className="hover:bg-secondary">
                      {word.word}
                    </Badge>
                  </Link>
                ))}
                {category.count > 5 && <Badge variant="outline">+{category.count - 5} more</Badge>}
              </div>
              <Link href={`/category/${category.name.toLowerCase()}`}>
                <Badge className="cursor-pointer">View all</Badge>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
