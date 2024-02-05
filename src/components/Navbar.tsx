import * as React from "react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Terminal } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { components } from "@/data/Navbar";
import { Link } from "@tanstack/react-router";
import LinkButton from "./LinkButton";

export function Navbar() {
    return (
        <>
            <NavigationMenu className="ml-auto mt-1 rounded-md border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Getting started
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Terminal />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Lorem
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-tight">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Eveniet molestiae culpa alias
                                                nobis deleniti magni ab aut.
                                                Magnam atque consequatur iste
                                                provident qui voluptatibus
                                                possimus adipisci sunt, vero cum
                                                dolorem?
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="" title="Title 1">
                                    Eveniet molestiae culpa alias nobis deleniti
                                    magni ab aut. Magnam atque consequatur.
                                </ListItem>
                                <ListItem href="" title="Title 2">
                                    Magnam atque veniet molestiae culpa alias
                                    nobis deleniti magni ab aut nam atque
                                    consequatur
                                </ListItem>
                                <ListItem href="" title="Title 3">
                                    Atque veniet molestiae culpa alias nobis
                                    deleniti magni
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="pr-80">
                        <NavigationMenuTrigger>Tasks</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <LinkButton to="/" />
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <LinkButton to="/about" />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
