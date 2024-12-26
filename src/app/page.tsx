import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



export default function page() {
  return (
    // Page Header Section
       <div className="mt-40">
          <div className="mx-60 p-2">
            <h1 className = "justify-center  text-[20px] text-red-700"><b>Discover Events</b></h1>
            <p>Explore popular events in the university, browse by category or check out what exciting events are coming for you...</p>
          </div>
        <div className="mx-80 p-2">
          <div>
          <Carousel className="w-full max-w-xs"> <h2 className="text-red-700"><b>Popular Events</b></h2>
          <CarouselContent>
                
                  <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                    <div className="p-2">
                      <Card >
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">Event 1</span>
                          
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">Event 2</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">Event 3</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                
              </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
          </div>

            <div>
            <Separator className="my-3" />
            </div>

            <div>
              <Tabs defaultValue="account" className="w-[400px]"> 
                <h3 className="text-red-700"><b>Explore PUP Branch Events</b></h3>
                  <TabsList>
                    <TabsTrigger value="metromanila">Metro Manila</TabsTrigger>
                    <TabsTrigger value="centralluzon">Central Luzon</TabsTrigger>
                    <TabsTrigger value="southluzon">South Luzon</TabsTrigger>
                  </TabsList>
                  <TabsContent value="metromanila">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">Paranaque City</span>
                        </CardContent>
                      </Card>
                  </TabsContent>
                  <TabsContent value="centralluzon">
                  <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">Mariveles, Bataan</span>
                        </CardContent>
                      </Card>
                  </TabsContent>
                  <TabsContent value="southluzon">
                  <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">Unisan, Quezon</span>
                        </CardContent>
                      </Card>
                  </TabsContent>
                </Tabs>
            </div>

            <div>
            <Separator className="my-3" />
            </div>

            <div>
            <h4 className="text-red-700"><b>Browse by category</b></h4>
            <Button variant="outline">
              <Link href="#">Category 1</Link>
            </Button>

            </div>
          </div>
       </div>

    
  );
}
