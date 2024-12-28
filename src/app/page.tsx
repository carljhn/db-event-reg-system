import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
          <div className="mx-72 p-2">
            <h1 className = "justify-center  text-[20px] text-red-800"><b>Discover Events</b></h1>
            <p className="text-sm">Explore popular events in the university, browse by category or check out what exciting events are coming for you...</p>
          </div>

          {/*-------------------------------------------POPULAR EVENT SECTION ---------------------------------------------*/}
        <div className="mx-80 p-2">
          <div>
          <Carousel className="w-full min-w-min"> 
            <h2 className="text-red-800"><b>Popular Events</b></h2>
            <p className="text-gray-500">PUP Main</p>
          <CarouselContent>
               {/*--------------EVENT 1----------------------*/} 
          <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                <div className="p-1">
                <Link href="/samplePage">
                  <Card className="inline-flex items-center p-2 space-x-2 border-none">
                      <div className="w-1/2">
                          <Image
                            src="/discover-images/event1.png"
                            alt="Image"
                            className="rounded-md object-cover"
                            width={2000}
                            height={180}
                          />
                      </div>
                      <div className="w-1/2 p-2">
                        <CardContent className="p-0">
                          <p className="text-red-800"><b>CPE FAIR 2025: Grand Prix</b></p>
                          <p className="text-red-800 text-opacity-80 text-sm">Today, 8:00 am</p>
                          <p className="text-red-800 text-opacity-80 text-sm">NDC Court</p>
                        </CardContent>
                      </div>
                  </Card>
                  </Link>
                </div>
              </CarouselItem>
                   {/*--------------EVENT 2----------------------*/} 
              <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                <div className="p-1">
                <Link href="/samplePage">
                  <Card className="inline-flex items-center p-2 space-x-2 border-none">
                      <div className="w-1/2">
                          <Image
                            src="/discover-images/event1.png"
                            alt="Image"
                            className="rounded-md object-cover"
                            width={2000}
                            height={180}
                          />
                      </div>
                      <div className="w-1/2 p-2">
                        <CardContent className="p-0">
                          <p className="text-red-800"><b>CPE FAIR 2025: Grand Prix</b></p>
                          <p className="text-red-800 text-opacity-80 text-sm">Today, 8:00 am</p>
                          <p className="text-red-800 text-opacity-80 text-sm">NDC Court</p>
                        </CardContent>
                      </div>
                  </Card>
                  </Link>
                </div>
              </CarouselItem>
                  {/*--------------EVENT 3----------------------*/} 
              <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                <div className="p-1">
                <Link href="/samplePage">
                  <Card className="inline-flex items-center p-2 space-x-2 border-none">
                      <div className="w-1/2">
                          <Image
                            src="/discover-images/event1.png"
                            alt="Image"
                            className="rounded-md object-cover"
                            width={2000}
                            height={180}
                          />
                      </div>
                      <div className="w-1/2 p-2">
                        <CardContent className="p-0">
                          <p className="text-red-800"><b>CPE FAIR 2025: Grand Prix</b></p>
                          <p className="text-red-800 text-opacity-80 text-sm">Today, 8:00 am</p>
                          <p className="text-red-800 text-opacity-80 text-sm">NDC Court</p>
                        </CardContent>
                      </div>
                  </Card>
                  </Link>
                </div>
              </CarouselItem>
                    {/*--------------EVENT 4----------------------*/} 
                <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                <div className="p-1">
                <Link href="/samplePage">
                  <Card className="inline-flex items-center p-2 space-x-2 border-none">
                      <div className="w-1/2">
                          <Image
                            src="/discover-images/event1.png"
                            alt="Image"
                            className="rounded-md object-cover"
                            width={2000}
                            height={180}
                          />
                      </div>
                      <div className="w-1/2 p-2">
                        <CardContent className="p-0">
                          <p className="text-red-800"><b>CPE FAIR 2025: Grand Prix</b></p>
                          <p className="text-red-800 text-opacity-80 text-sm">Today, 8:00 am</p>
                          <p className="text-red-800 text-opacity-80 text-sm">NDC Court</p>
                        </CardContent>
                      </div>
                  </Card>
                  </Link>
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

            {/*-------------------------------------------EXPLORE PUP BRANCH EVENT SECTION---------------------------------- */}
            <div className="p-1">
              <Tabs defaultValue="account" className="w-full"> 
                <h3 className="text-red-800"><b>Explore PUP Branch Events</b></h3>

                {/*------------------PUP BRANCHES------------- */}
                  <TabsList>
                    <TabsTrigger value="metromanila">Metro Manila</TabsTrigger>
                    <TabsTrigger value="centralluzon">Central Luzon</TabsTrigger>
                    <TabsTrigger value="southluzon">South Luzon</TabsTrigger>
                  </TabsList>

                  {/*------------------PUP BRANCH CONTENTS------------- */}
                  {/*------Metro Manila---------- */}
                  <TabsContent value="metromanila" className="p-2 ">
                    <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 w-full">
                      {/* Parañaque City */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Parañaque City</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Quezon City */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Quezon City</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* San Juan City */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">San Juan City</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                    {/* Taguig City */}
                    <div className="-mt-[50px]">
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 w-1/3 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/puptaguig.png"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Taguig City</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                  </TabsContent>

                  {/*-----------Central Luzon---------- */}
                  <TabsContent value="centralluzon">
                  <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-0 w-full">
                      {/* Bataan */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Bataan</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sta. Maria Bulacan */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Sta. Maria Bulacan</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Pulilan, Bulacan */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Pulilan, Bulacan</p>
                                <p className="text-red-800 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                    {/* Cabiao, Nueva Ecija */}
                    <div className="-mt-[50px]">
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 w-1/3 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/puptaguig.png"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Cabiao, Nueva Ecija</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    
                  </TabsContent>

                  {/*--------------South Luzon---------- */}
                  <TabsContent value="southluzon">
                  <div className="flex flex-col gap-y-6">
                     {/* First Row */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Lopez, Quezon */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Lopez, Quezon</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Mulanay, Quezon */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Mulanay, Quezon</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Unisan, Quezon */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Unisan, Quezon </p>
                                <p className="text-red-800 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Ragay, Camarines Sur */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Ragay, Camarines Sur</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sto. Tomas, Batangas */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Sto. Tomas, Batangas</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Maragondon, Cavite */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Maragondon, Cavite</p>
                                <p className="text-red-800 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                  {/* Third Row */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Bansud, Oriental Mindoro */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Bansud, Oriental Mindoro</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sablayan, Occidental Mindoro */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Sablayan, Occidental Mindoro</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Binan, Laguna */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Binan, Laguna</p>
                                <p className="text-red-800 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                   {/* Fourth Row */}
                  <div className="grid grid-cols-3 gap-4 w-full">
                      {/* San Pedro, Laguna */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupparanaque.jpg"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">San Pedro, Laguna</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Sta. Rosa, Laguna */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupquezoncity.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Sta. Rosa, Laguna</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Calauan, Laguna */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/pupsanjuan.jpg"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Calauan, Laguna</p>
                                <p className="text-red-800 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>
                    </div>
                  </TabsContent>
                </Tabs>
            </div>

            <div>
            <Separator className="my-3" />
            </div>
            
            {/* -------------------------------------------------------------------BROWSE BY CATEGORY SECTION----------------------------------------------*/}
            <div>
            <h4 className="text-red-800"><b>Browse by category</b></h4>
            
            
            <div className="flex flex-col gap-y-6">
              {/* First Row */}
              <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Category 1 */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/category1.png"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Seminars</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Category 2*/}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/category2.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Job Fair</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Category 3*/}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/category3.png"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Tournaments</p>
                                <p className="text-red-800 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {/* Category 4 */}
                      <div >
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/category4.png"
                                alt="Parañaque City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Bootcamps</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Category 5*/}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/category5.png"
                                alt="Quezon City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Career Development</p>
                                <p className="text-red-800 text-sm text-opacity-75">10 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>

                      {/* Category 6 */}
                      <div>
                        <Link href="/samplePage">
                          <Card className="flex items-center p-2 space-x-2 border-none">
                            {/* Image Section */}
                            <div className="w-12 h-12">
                              <Image
                                src="/discover-images/category6.png"
                                alt="San Juan City"
                                className="rounded-md object-cover"
                                width={50}
                                height={50}
                              />
                            </div>
                            {/* Text Section */}
                            <div className="w-auto">
                              <CardContent className="p-0">
                                <p className="text-red-800 font-bold">Trainings</p>
                                <p className="text-red-800 text-sm text-opacity-75">25 Events</p>
                              </CardContent>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </div>
            </div>

            </div>
          </div>
       </div>

  
       
  );
}
