import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <Card className="shadow-xl rounded-lg bg-[#2E2E2E]/60 backdrop-blur-sm h-[400px] flex flex-col border border-[#302F30]">
        <CardHeader className="pb-4 flex-shrink-0">
          <CardTitle className="text-2xl font-bold text-white text-gray-300">Welcome to PUP Gather!</CardTitle>
          <CardDescription className="text-sm text-gray-400 pb-2 flex-shrink-0">
            Please sign in or sign up below
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <form className="flex flex-col h-full">
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-gray-600 underline-offset-4 hover:underline"
                  >
                    Use Phone Number
                  </a>
                </div>
                <Input 
                  id="email"
                  type="email"
                  placeholder="pupian@example.com"
                  required
                  className="bg-white/10 text-white placeholder-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Button type="submit" className="w-full bg-white hover:hover:bg-white/80 text-black text-sm font-medium">
                Continue with Email
              </Button>
              <Button variant="outline" className="w-full bg-[#DAA520] text-black hover:bg-[#DAA520]/80 text-sm font-medium border-white/30">
                Sign in with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
