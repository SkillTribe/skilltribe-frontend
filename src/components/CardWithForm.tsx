import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
    return (
        <Card className="mt-1 w-[350px]">
            <CardHeader>
                <CardTitle>New Task</CardTitle>
                <CardDescription>A new investment in yourself</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Name of your Task"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="task">Task Type</Label>
                            <Select>
                                <SelectTrigger id="task">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="boo">
                                        Read a book
                                    </SelectItem>
                                    <SelectItem value="grass">
                                        Touch grass
                                    </SelectItem>
                                    <SelectItem value="muscle">
                                        Build muscle
                                    </SelectItem>
                                    <SelectItem value="code">
                                        Learn to code
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Apply</Button>
            </CardFooter>
        </Card>
    );
}
