import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export default function SavedWordsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Saved Words</h1>

      <Card>
        <CardHeader>
          <CardTitle>Your Saved Words</CardTitle>
          <CardDescription>
            You haven't saved any words yet. Browse the vocabulary list and click the bookmark icon to save words for
            later review.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Bookmark className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No saved words yet</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              When you find words you want to review later, click the bookmark icon to add them to your saved list.
            </p>
            <Button asChild>
              <a href="/">Browse Vocabulary</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
