import { Button } from "@/components/ui/button"
import { Bell, Calendar, Compass, PlusCircle, Search } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="w-full bg-background border-b">
      <div className="max-w-[1360px] mx-auto px-4">
        <div className="flex items-center h-16">
          <Link href="/" className="font-bold text-2xl mr-auto">Logo</Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 mr-80">
              <Button variant="ghost" size="sm">
                <Compass className="h-5 w-5 mr-2" />
                Discover
              </Button>
              <Button variant="ghost" size="sm">
                <Calendar className="h-5 w-5 mr-2" />
                Events
              </Button>
            </div>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button>
              <PlusCircle className="h-5 w-5 mr-2" />
              Create Event
            </Button>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}